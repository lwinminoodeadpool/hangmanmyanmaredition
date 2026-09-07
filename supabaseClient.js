// Supabase Client & Backend Authentication Manager
const SUPABASE_URL = (window.HANGMAN_CONFIG && window.HANGMAN_CONFIG.SUPABASE_URL) || "https://prqwwuxfpynmzdvaoesh.supabase.co";
const SUPABASE_ANON_KEY = (window.HANGMAN_CONFIG && window.HANGMAN_CONFIG.SUPABASE_ANON_KEY) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBycXd3dXhmcHlubXpkdmFvZXNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1MDA5OTEsImV4cCI6MjEwNDA3Njk5MX0.WN4q3SdsDSmKvLXckTyhgDwNBawNSVtqvWIJjsbS3BE";

class AuthManager {
  constructor() {
    this._client = null;
    this.currentUser = null;
    this.currentProfile = null;
  }

  // Robust Supabase Client Getter
  get client() {
    if (!this._client) {
      if (window.supabase && typeof window.supabase.createClient === "function") {
        this._client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      }
    }
    return this._client;
  }

  // Format identifier to email if user just types a username
  formatEmail(identifier) {
    const clean = identifier.trim().toLowerCase();
    if (clean.includes("@")) return clean;
    return `${clean.replace(/[^a-z0-9_]/g, "")}@hangman.local`;
  }

  // Register New User
  async signUp(identifier, password, username) {
    if (!this.client) throw new Error("Supabase is loading, please try again in a moment.");
    
    const email = this.formatEmail(identifier);
    const finalUsername = (username || identifier.split("@")[0]).trim();

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters.");
    }

    const { data, error } = await this.client.auth.signUp({
      email: email,
      password: password,
      options: {
        data: { username: finalUsername }
      }
    });

    if (error) {
      const msg = error.message || error.error_description || "";
      if (msg.toLowerCase().includes("user already registered") || msg.toLowerCase().includes("already registered") || msg.toLowerCase().includes("user_already_exists")) {
        throw new Error("This username/email is already registered! Please switch to Sign In.");
      }
      if (msg.toLowerCase().includes("rate limit") || msg.toLowerCase().includes("over_email_send_rate_limit")) {
        throw new Error("Email rate limit exceeded. Please turn off 'Confirm email' in Supabase Auth -> Providers -> Email for instant registration.");
      }
      throw error;
    }

    if (data && data.user) {
      // Supabase email enumeration protection returns empty identities array if user exists
      if (Array.isArray(data.user.identities) && data.user.identities.length === 0) {
        throw new Error("This account already exists! Please switch to the Sign In tab.");
      }
      this.currentUser = data.user;
      await this.ensureProfile(data.user.id, finalUsername);
      await this.fetchProfile(data.user.id);
    }

    return data;
  }

  // Sign In Existing User
  async signIn(identifier, password) {
    if (!this.client) throw new Error("Supabase is loading, please try again in a moment.");

    const email = this.formatEmail(identifier);

    const { data, error } = await this.client.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) {
      console.error("Supabase signIn error:", error);
      const msg = error.message || error.error_description || "";
      if (msg.toLowerCase().includes("email not confirmed")) {
        throw new Error("✉️ Email is not confirmed yet! Please click the confirmation link sent to your email, OR disable 'Confirm email' in Supabase Dashboard (Authentication -> Providers -> Email).");
      }
      if (msg.toLowerCase().includes("invalid login") || msg.toLowerCase().includes("invalid_grant")) {
        throw new Error("Invalid email/password, or your email confirmation is still pending in Supabase.");
      }
      throw error;
    }

    if (data && data.user) {
      this.currentUser = data.user;
      await this.fetchProfile(data.user.id);
    }

    return data;
  }

  // Sign Out
  async signOut() {
    this.currentUser = null;
    this.currentProfile = null;

    // Clear all Supabase auth tokens from localStorage
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && (k.startsWith("sb-") || k.includes("supabase") || k.includes("auth-token"))) {
        keysToRemove.push(k);
      }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));

    if (this.client) {
      try {
        await this.client.auth.signOut();
      } catch (e) {
        console.warn("Supabase client signOut caught:", e);
      }
    }
  }

  // Ensure Profile Table Row Exists
  async ensureProfile(userId, username) {
    if (!this.client) return;
    try {
      const { data, error } = await this.client
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .maybeSingle();

      if (!data) {
        await this.client.from("profiles").insert([
          {
            id: userId,
            username: username || "Player",
            score: 0,
            best_streak: 0,
            current_streak: 0,
            games_won: 0,
            games_played: 0
          }
        ]);
      }
    } catch (e) {
      console.warn("Could not ensure profile:", e);
    }
  }

  // Fetch Logged-in User's Profile
  async fetchProfile(userId) {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .maybeSingle();

      if (data) {
        this.currentProfile = data;
        return data;
      }
    } catch (e) {
      console.warn("Error fetching profile:", e);
    }
    return null;
  }

  // Get Current Active User & Profile
  async initUser() {
    if (!this.client) return null;
    try {
      const { data: { session } } = await this.client.auth.getSession();
      if (session && session.user) {
        this.currentUser = session.user;
        await this.fetchProfile(session.user.id);
        return { user: this.currentUser, profile: this.currentProfile };
      }
    } catch (e) {
      console.warn("Session check error:", e);
    }
    return null;
  }

  // Update Game Stats on Cloud
  async recordGameResult(won, scoreGained, currentStreak) {
    if (!this.client || !this.currentUser) return null;

    try {
      const userId = this.currentUser.id;
      let p = this.currentProfile || (await this.fetchProfile(userId)) || {};

      const newPlayed = (p.games_played || 0) + 1;
      const newWon = (p.games_won || 0) + (won ? 1 : 0);
      const newScore = (p.score || 0) + (won ? scoreGained : 0);
      const newStreak = won ? currentStreak : 0;
      const newBestStreak = Math.max(p.best_streak || 0, newStreak);

      const updatePayload = {
        games_played: newPlayed,
        games_won: newWon,
        score: newScore,
        current_streak: newStreak,
        best_streak: newBestStreak,
        updated_at: new Date().toISOString()
      };

      const { data, error } = await this.client
        .from("profiles")
        .update(updatePayload)
        .eq("id", userId)
        .select()
        .single();

      if (data) {
        this.currentProfile = data;
        return data;
      }
    } catch (e) {
      console.error("Failed to sync game result to Supabase:", e);
    }
    return null;
  }

  // Fetch Global Top 10 Leaderboard
  async getLeaderboard(limit = 15) {
    if (!this.client) return [];

    try {
      const { data, error } = await this.client
        .from("profiles")
        .select("id, username, score, best_streak, games_won, games_played")
        .order("best_streak", { ascending: false })
        .order("score", { ascending: false })
        .limit(limit);

      if (error) {
        console.warn("Leaderboard fetch error:", error);
        return [];
      }
      return data || [];
    } catch (e) {
      console.error("Failed to load leaderboard:", e);
      return [];
    }
  }
}

const authManager = new AuthManager();
