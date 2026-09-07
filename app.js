// Hangman Game Engine (Myanmar Edition) with Supabase Cloud Sync & 3-Game Free Trial Limit
class HangmanGame {
  constructor() {
    this.words = [...WORD_BANK];
    this.availableWords = [];
    this.currentWordObj = null;
    this.guessedLetters = new Set();
    this.strikes = 0;
    this.maxStrikes = 6;
    this.isGameOver = false;
    this.hintRevealed = false;
    this.authMode = "signin"; // 'signin' or 'signup'
    this.maxFreeTrialGames = 3;

    // Load guest trial count & stats
    this.guestGamesCount = parseInt(localStorage.getItem("hangman_guest_plays") || "0", 10);
    this.streak = parseInt(localStorage.getItem("hangman_streak") || "0", 10);
    this.bestStreak = parseInt(localStorage.getItem("hangman_best_streak") || "0", 10);
    this.score = parseInt(localStorage.getItem("hangman_score") || "0", 10);
    this.gamesWon = parseInt(localStorage.getItem("hangman_won") || "0", 10);
    this.gamesPlayed = parseInt(localStorage.getItem("hangman_played") || "0", 10);

    // DOM Elements
    this.dom = {
      streakVal: document.getElementById("streak-val"),
      bestStreakVal: document.getElementById("best-streak-val"),
      scoreVal: document.getElementById("score-val"),
      winrateVal: document.getElementById("winrate-val"),
      categorySelect: document.getElementById("category-select"),
      difficultySelect: document.getElementById("difficulty-select"),
      newGameBtn: document.getElementById("new-game-btn"),
      soundBtn: document.getElementById("sound-btn"),
      soundIcon: document.getElementById("sound-icon"),
      infoBtn: document.getElementById("info-btn"),
      closeInfoBtn: document.getElementById("close-info-btn"),
      infoModal: document.getElementById("info-modal"),
      livesLeft: document.getElementById("lives-left"),
      maxLives: document.getElementById("max-lives"),
      strikesBar: document.getElementById("strikes-bar"),
      currentCategoryBadge: document.getElementById("current-category-badge"),
      badgeIcon: document.getElementById("badge-icon"),
      badgeText: document.getElementById("badge-text"),
      diffPill: document.getElementById("diff-pill"),
      wordPhrase: document.getElementById("word-phrase"),
      hintText: document.getElementById("hint-text"),
      hintBtn: document.getElementById("hint-btn"),
      kbRows: [
        document.getElementById("kb-row-1"),
        document.getElementById("kb-row-2"),
        document.getElementById("kb-row-3")
      ],
      gameModal: document.getElementById("game-modal"),
      modalCard: document.getElementById("modal-card"),
      modalIcon: document.getElementById("modal-icon"),
      modalTitle: document.getElementById("modal-title"),
      modalWord: document.getElementById("modal-word"),
      modalMeaning: document.getElementById("modal-meaning"),
      modalStreak: document.getElementById("modal-streak"),
      modalScore: document.getElementById("modal-score"),
      modalLivesLeft: document.getElementById("modal-lives-left"),
      modalNextBtn: document.getElementById("modal-next-btn"),
      confettiCanvas: document.getElementById("confetti-canvas"),

      // Free Trial Elements
      trialBadge: document.getElementById("trial-badge"),
      trialCountText: document.getElementById("trial-count-text"),
      trialLimitNotice: document.getElementById("trial-limit-notice"),
      guestActionWrapper: document.getElementById("guest-action-wrapper"),

      // Auth & Profile
      authProfileBtn: document.getElementById("auth-profile-btn"),
      userAvatarIcon: document.getElementById("user-avatar-icon"),
      userDisplayName: document.getElementById("user-display-name"),
      authModal: document.getElementById("auth-modal"),
      authTitle: document.getElementById("auth-title"),
      authSubtitle: document.getElementById("auth-subtitle"),
      tabSignin: document.getElementById("tab-signin"),
      tabSignup: document.getElementById("tab-signup"),
      authForm: document.getElementById("auth-form"),
      authUsername: document.getElementById("auth-username"),
      usernameGroup: document.getElementById("username-group"),
      authEmail: document.getElementById("auth-email"),
      authPassword: document.getElementById("auth-password"),
      authSubmitBtn: document.getElementById("auth-submit-btn"),
      authErrorAlert: document.getElementById("auth-error-alert"),
      closeAuthBtn: document.getElementById("close-auth-btn"),

      // Profile Modal
      profileModal: document.getElementById("profile-modal"),
      profileUsername: document.getElementById("profile-username"),
      profileEmail: document.getElementById("profile-email"),
      profScore: document.getElementById("prof-score"),
      profBestStreak: document.getElementById("prof-best-streak"),
      profStreak: document.getElementById("prof-streak"),
      profWon: document.getElementById("prof-won"),
      profPlayed: document.getElementById("prof-played"),
      profWinrate: document.getElementById("prof-winrate"),
      logoutBtn: document.getElementById("logout-btn"),
      closeProfileBtn: document.getElementById("close-profile-btn"),

      // Leaderboard Modal
      leaderboardBtn: document.getElementById("leaderboard-btn"),
      leaderboardModal: document.getElementById("leaderboard-modal"),
      leaderboardTbody: document.getElementById("leaderboard-tbody"),
      refreshLbBtn: document.getElementById("refresh-lb-btn"),
      closeLbBtn: document.getElementById("close-lb-btn")
    };

    // Body parts definition
    this.parts = {
      head: document.getElementById("part-head"),
      eyeLeft: document.getElementById("part-eye-left"),
      eyeRight: document.getElementById("part-eye-right"),
      deadEyes: document.getElementById("part-dead-eyes"),
      mouth: document.getElementById("part-mouth"),
      torso: document.getElementById("part-torso"),
      leftArm: document.getElementById("part-left-arm"),
      rightArm: document.getElementById("part-right-arm"),
      leftHand: document.getElementById("part-left-hand"),
      rightHand: document.getElementById("part-right-hand"),
      leftLeg: document.getElementById("part-left-leg"),
      rightLeg: document.getElementById("part-right-leg")
    };

    this.initConfetti();
    this.renderKeyboard();
    this.bindEvents();
    this.updateStatsUI();
    this.updateSoundIcon();
    this.initAuthSession();
    this.startNewGame();
  }

  // Check Supabase Session
  async initAuthSession() {
    try {
      const sessionData = await authManager.initUser();
      if (sessionData && sessionData.user) {
        this.applyCloudProfile(sessionData.profile, sessionData.user);
      } else {
        this.applyGuestMode();
      }
    } catch (e) {
      console.warn("Auth init error:", e);
      this.applyGuestMode();
    }
  }

  applyCloudProfile(profile, user) {
    const username = profile?.username || user?.user_metadata?.username || user?.email?.split("@")[0] || "Player";
    const initial = username.charAt(0).toUpperCase();
    this.dom.userDisplayName.textContent = username;
    this.dom.userAvatarIcon.textContent = initial;
    this.dom.authProfileBtn.classList.add("logged-in");
    this.dom.authProfileBtn.title = `Player Profile (${username})`;

    if (profile) {
      this.score = profile.score || 0;
      this.bestStreak = profile.best_streak || 0;
      this.streak = profile.current_streak || 0;
      this.gamesWon = profile.games_won || 0;
      this.gamesPlayed = profile.games_played || 0;
      this.updateStatsUI();
    }

    this.updateTrialUI();
  }

  applyGuestMode() {
    this.dom.userDisplayName.textContent = "Sign In";
    this.dom.userAvatarIcon.textContent = "👤";
    this.dom.authProfileBtn.classList.remove("logged-in");
    this.dom.authProfileBtn.title = "Player Profile / Login";
    this.updateTrialUI();
  }

  updateTrialUI() {
    const isLoggedIn = !!authManager.currentUser;
    if (isLoggedIn) {
      this.dom.trialBadge.style.display = "none";
      this.dom.guestActionWrapper.style.display = "flex";
      this.dom.trialLimitNotice.style.display = "none";
    } else {
      this.dom.trialBadge.style.display = "inline-flex";
      const remaining = Math.max(0, this.maxFreeTrialGames - this.guestGamesCount);
      this.dom.trialCountText.textContent = remaining;

      if (this.guestGamesCount >= this.maxFreeTrialGames) {
        this.dom.trialBadge.innerHTML = `⚠️ Trial Expired (3/3)`;
        this.dom.guestActionWrapper.style.display = "none";
        this.dom.trialLimitNotice.style.display = "block";
      } else {
        this.dom.trialBadge.innerHTML = `🎮 Free Trial: <strong>${remaining}</strong> left`;
        this.dom.guestActionWrapper.style.display = "flex";
        this.dom.trialLimitNotice.style.display = "none";
      }
    }
  }

  initConfetti() {
    this.confettiCtx = this.dom.confettiCanvas.getContext("2d");
    this.confettiParticles = [];
    this.confettiRunning = false;
    
    const resizeCanvas = () => {
      this.dom.confettiCanvas.width = window.innerWidth;
      this.dom.confettiCanvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
  }

  spawnConfetti() {
    const colors = ["#06b6d4", "#f59e0b", "#10b981", "#ef4444", "#8b5cf6", "#ec4899", "#3b82f6"];
    this.confettiParticles = [];
    const count = window.innerWidth < 600 ? 70 : 130;

    for (let i = 0; i < count; i++) {
      this.confettiParticles.push({
        x: window.innerWidth * (0.3 + Math.random() * 0.4),
        y: window.innerHeight * 0.45,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.9) * 16,
        size: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        life: 1,
        decay: Math.random() * 0.012 + 0.008
      });
    }

    if (!this.confettiRunning) {
      this.confettiRunning = true;
      this.animateConfetti();
    }
  }

  animateConfetti() {
    if (!this.confettiRunning) return;
    this.confettiCtx.clearRect(0, 0, this.dom.confettiCanvas.width, this.dom.confettiCanvas.height);

    let activeParticles = 0;
    this.confettiParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.vx *= 0.98;
      p.rotation += p.rotSpeed;
      p.life -= p.decay;

      if (p.life > 0) {
        activeParticles++;
        this.confettiCtx.save();
        this.confettiCtx.translate(p.x, p.y);
        this.confettiCtx.rotate((p.rotation * Math.PI) / 180);
        this.confettiCtx.globalAlpha = Math.max(0, p.life);
        this.confettiCtx.fillStyle = p.color;
        this.confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        this.confettiCtx.restore();
      }
    });

    if (activeParticles > 0) {
      requestAnimationFrame(() => this.animateConfetti());
    } else {
      this.confettiRunning = false;
      this.confettiCtx.clearRect(0, 0, this.dom.confettiCanvas.width, this.dom.confettiCanvas.height);
    }
  }

  renderKeyboard() {
    const layout = [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["Z", "X", "C", "V", "B", "N", "M"]
    ];

    layout.forEach((row, rIdx) => {
      this.dom.kbRows[rIdx].innerHTML = "";
      row.forEach(letter => {
        const btn = document.createElement("button");
        btn.className = "key-btn";
        btn.id = `key-${letter}`;
        btn.textContent = letter;
        btn.dataset.letter = letter;
        btn.setAttribute("aria-label", `Letter ${letter}`);
        btn.addEventListener("click", () => this.handleGuess(letter));
        this.dom.kbRows[rIdx].appendChild(btn);
      });
    });
  }

  bindEvents() {
    // Physical Keyboard Listener
    window.addEventListener("keydown", (e) => {
      if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) {
        return;
      }

      if (e.key === " " || e.key === "Enter") {
        if (this.dom.gameModal.classList.contains("active")) {
          e.preventDefault();
          this.dom.gameModal.classList.remove("active");
          this.checkAndStartNextGame();
          return;
        }
      }

      if (this.isGameOver) return;

      const key = e.key.toUpperCase();
      if (/^[A-Z]$/.test(key)) {
        this.handleGuess(key);
      }
    });

    // Control buttons
    this.dom.newGameBtn.addEventListener("click", () => {
      audio.playClick();
      this.checkAndStartNextGame();
    });

    this.dom.categorySelect.addEventListener("change", () => {
      audio.playClick();
      this.availableWords = [];
      this.checkAndStartNextGame();
    });

    this.dom.difficultySelect.addEventListener("change", () => {
      audio.playClick();
      this.checkAndStartNextGame();
    });

    this.dom.hintBtn.addEventListener("click", () => {
      this.revealHint();
    });

    this.dom.soundBtn.addEventListener("click", () => {
      const isMuted = audio.toggleMute();
      this.updateSoundIcon();
      if (!isMuted) audio.playClick();
    });

    this.dom.infoBtn.addEventListener("click", () => {
      audio.playClick();
      this.dom.infoModal.classList.add("active");
    });

    this.dom.closeInfoBtn.addEventListener("click", () => {
      audio.playClick();
      this.dom.infoModal.classList.remove("active");
    });

    this.dom.modalNextBtn.addEventListener("click", () => {
      audio.playClick();
      this.dom.gameModal.classList.remove("active");
      this.checkAndStartNextGame();
    });

    // ==================== AUTH & PROFILE EVENTS ====================
    this.dom.authProfileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      audio.playClick();
      if (authManager.currentUser) {
        this.openProfileModal();
      } else {
        this.openAuthModal();
      }
    });

    this.dom.tabSignin.addEventListener("click", (e) => {
      e.preventDefault();
      this.setAuthMode("signin");
    });

    this.dom.tabSignup.addEventListener("click", (e) => {
      e.preventDefault();
      this.setAuthMode("signup");
    });

    this.dom.closeAuthBtn.addEventListener("click", (e) => {
      e.preventDefault();
      audio.playClick();
      if (!authManager.currentUser && this.guestGamesCount >= this.maxFreeTrialGames) {
        // Cannot play as guest when 3 free games are used
        this.dom.authErrorAlert.textContent = "You must sign in or register to continue playing!";
        this.dom.authErrorAlert.style.display = "block";
        return;
      }
      this.dom.authModal.classList.remove("active");
    });

    this.dom.authForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      await this.handleAuthSubmit();
    });

    this.dom.closeProfileBtn.addEventListener("click", (e) => {
      e.preventDefault();
      audio.playClick();
      this.dom.profileModal.classList.remove("active");
    });

    this.dom.logoutBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      audio.playClick();

      this.dom.profileModal.classList.remove("active");
      await authManager.signOut();
      this.applyGuestMode();

      // Reset all displayed and local stats to 0 for a clean slate
      this.streak = 0;
      this.bestStreak = 0;
      this.score = 0;
      this.gamesWon = 0;
      this.gamesPlayed = 0;

      localStorage.removeItem("hangman_streak");
      localStorage.removeItem("hangman_best_streak");
      localStorage.removeItem("hangman_score");
      localStorage.removeItem("hangman_won");
      localStorage.removeItem("hangman_played");

      this.updateStatsUI();
    });

    // ==================== LEADERBOARD EVENTS ====================
    this.dom.leaderboardBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      audio.playClick();
      this.openLeaderboardModal();
    });

    this.dom.refreshLbBtn.addEventListener("click", (e) => {
      e.preventDefault();
      audio.playClick();
      this.loadLeaderboard();
    });

    this.dom.closeLbBtn.addEventListener("click", (e) => {
      e.preventDefault();
      audio.playClick();
      this.dom.leaderboardModal.classList.remove("active");
    });

    // Close Modals on Backdrop Click (except when trial limit reached)
    [this.dom.authModal, this.dom.profileModal, this.dom.leaderboardModal, this.dom.infoModal].forEach(modal => {
      if (modal) {
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            if (modal === this.dom.authModal && !authManager.currentUser && this.guestGamesCount >= this.maxFreeTrialGames) {
              return; // Do not close auth modal if trial expired
            }
            modal.classList.remove("active");
          }
        });
      }
    });
  }

  checkAndStartNextGame() {
    if (!authManager.currentUser && this.guestGamesCount >= this.maxFreeTrialGames) {
      this.openAuthModal(true);
      return;
    }
    this.startNewGame();
  }

  setAuthMode(mode) {
    this.authMode = mode;
    this.dom.authErrorAlert.style.display = "none";
    if (mode === "signin") {
      this.dom.tabSignin.classList.add("active");
      this.dom.tabSignup.classList.remove("active");
      this.dom.authTitle.textContent = "Welcome Back";
      this.dom.usernameGroup.style.display = "none";
      this.dom.authSubmitBtn.innerHTML = `<span>🚀</span> Sign In`;
    } else {
      this.dom.tabSignup.classList.add("active");
      this.dom.tabSignin.classList.remove("active");
      this.dom.authTitle.textContent = "Create Account";
      this.dom.usernameGroup.style.display = "flex";
      this.dom.authSubmitBtn.innerHTML = `<span>✨</span> Register & Play`;
    }
  }

  openAuthModal(forced = false) {
    this.setAuthMode("signup");
    this.dom.authErrorAlert.style.display = "none";
    this.updateTrialUI();
    this.dom.authModal.classList.add("active");
  }

  async handleAuthSubmit() {
    const email = this.dom.authEmail.value.trim();
    const password = this.dom.authPassword.value;
    const username = (this.dom.authUsername.value || email.split("@")[0] || "Player").trim();

    this.dom.authSubmitBtn.disabled = true;
    this.dom.authSubmitBtn.innerHTML = `<span>⏳</span> Processing...`;
    this.dom.authErrorAlert.style.display = "none";

    try {
      if (this.authMode === "signup") {
        const data = await authManager.signUp(email, password, username);
        
        // If Supabase requires email verification (no active session returned immediately)
        if (!data.session) {
          this.setAuthMode("signin");
          this.dom.authEmail.value = email;
          this.dom.authPassword.value = "";
          this.dom.authErrorAlert.className = "auth-alert auth-success-alert";
          this.dom.authErrorAlert.innerHTML = `
            <strong>✉️ Registration Successful!</strong><br>
            Please check your email (<strong>${this.escapeHtml(email)}</strong>) to confirm your account, then sign in below.
          `;
          this.dom.authErrorAlert.style.display = "block";
          audio.playWin();
          return;
        }
      } else {
        await authManager.signIn(email, password);
      }

      await this.initAuthSession();
      this.dom.authModal.classList.remove("active");
      audio.playWin();

      // If game was over or locked, start new round
      if (this.isGameOver || this.guestGamesCount >= this.maxFreeTrialGames) {
        this.startNewGame();
      }
    } catch (err) {
      console.error("Auth error:", err);
      this.dom.authErrorAlert.className = "auth-alert";
      this.dom.authErrorAlert.textContent = err.message || "Authentication failed. Please try again.";
      this.dom.authErrorAlert.style.display = "block";
      audio.playWrong();
    } finally {
      this.dom.authSubmitBtn.disabled = false;
      this.setAuthMode(this.authMode);
    }
  }

  openProfileModal() {
    const p = authManager.currentProfile || {};
    const u = authManager.currentUser || {};
    const username = p.username || u.user_metadata?.username || u.email?.split("@")[0] || "Player";

    this.dom.profileUsername.textContent = username;
    this.dom.profileEmail.textContent = u.email || "";
    this.dom.profScore.textContent = this.score;
    this.dom.profBestStreak.textContent = this.bestStreak;
    this.dom.profStreak.textContent = this.streak;
    this.dom.profWon.textContent = this.gamesWon;
    this.dom.profPlayed.textContent = this.gamesPlayed;

    const rate = this.gamesPlayed > 0 ? Math.round((this.gamesWon / this.gamesPlayed) * 100) : 0;
    this.dom.profWinrate.textContent = `${rate}%`;

    this.dom.profileModal.classList.add("active");
  }

  async openLeaderboardModal() {
    this.dom.leaderboardModal.classList.add("active");
    await this.loadLeaderboard();
  }

  async loadLeaderboard() {
    this.dom.leaderboardTbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding: 2rem; color: var(--text-muted);">
          Loading rankings...
        </td>
      </tr>
    `;

    const players = await authManager.getLeaderboard(15);
    const myId = authManager.currentUser?.id;

    if (!players || players.length === 0) {
      this.dom.leaderboardTbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align:center; padding: 2rem; color: var(--text-muted);">
            No rankings yet. Be the first to win and climb the board!
          </td>
        </tr>
      `;
      return;
    }

    this.dom.leaderboardTbody.innerHTML = "";
    players.forEach((player, idx) => {
      const rank = idx + 1;
      let rankDisplay = rank;
      let rankClass = "";

      if (rank === 1) { rankDisplay = "🥇"; rankClass = "rank-1"; }
      else if (rank === 2) { rankDisplay = "🥈"; rankClass = "rank-2"; }
      else if (rank === 3) { rankDisplay = "🥉"; rankClass = "rank-3"; }

      const isMe = myId && player.id === myId;
      const tr = document.createElement("tr");
      if (isMe) tr.className = "my-row";

      tr.innerHTML = `
        <td><span class="rank-badge ${rankClass}">${rankDisplay}</span></td>
        <td><strong>${this.escapeHtml(player.username || "Player")}</strong>${isMe ? " (You)" : ""}</td>
        <td>🔥 ${player.best_streak || 0}</td>
        <td>⭐ ${player.score || 0}</td>
        <td>🏅 ${player.games_won || 0}</td>
      `;
      this.dom.leaderboardTbody.appendChild(tr);
    });
  }

  escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  updateSoundIcon() {
    this.dom.soundIcon.textContent = audio.isMuted ? "🔇" : "🔊";
  }

  updateStatsUI() {
    this.dom.streakVal.textContent = this.streak;
    this.dom.bestStreakVal.textContent = this.bestStreak;
    this.dom.scoreVal.textContent = this.score;

    const rate = this.gamesPlayed > 0 ? Math.round((this.gamesWon / this.gamesPlayed) * 100) : 0;
    this.dom.winrateVal.textContent = `${rate}%`;
  }

  async saveStats(won, gainedScore) {
    // If not logged in, increment guest free trial counter
    if (!authManager.currentUser) {
      this.guestGamesCount++;
      localStorage.setItem("hangman_guest_plays", this.guestGamesCount);
      this.updateTrialUI();
    }

    // Local fallback
    localStorage.setItem("hangman_streak", this.streak);
    localStorage.setItem("hangman_best_streak", this.bestStreak);
    localStorage.setItem("hangman_score", this.score);
    localStorage.setItem("hangman_won", this.gamesWon);
    localStorage.setItem("hangman_played", this.gamesPlayed);
    this.updateStatsUI();

    // Cloud sync if authenticated
    if (authManager.currentUser) {
      await authManager.recordGameResult(won, gainedScore, this.streak);
    }
  }

  startNewGame() {
    // Enforce 3-game limit for unregistered guests
    if (!authManager.currentUser && this.guestGamesCount >= this.maxFreeTrialGames) {
      this.openAuthModal(true);
      return;
    }

    this.isGameOver = false;
    this.guessedLetters.clear();
    this.strikes = 0;
    this.hintRevealed = false;

    // Set Max Strikes based on Difficulty
    const diff = this.dom.difficultySelect.value;
    if (diff === "easy") {
      this.maxStrikes = 8;
      this.dom.diffPill.className = "difficulty-badge diff-easy";
      this.dom.diffPill.textContent = "Easy (8 Lives)";
    } else if (diff === "hard") {
      this.maxStrikes = 5;
      this.dom.diffPill.className = "difficulty-badge diff-hard";
      this.dom.diffPill.textContent = "Hard (5 Lives)";
    } else {
      this.maxStrikes = 6;
      this.dom.diffPill.className = "difficulty-badge diff-medium";
      this.dom.diffPill.textContent = "Medium (6 Lives)";
    }

    // Pick a word from the filtered category
    const cat = this.dom.categorySelect.value;
    if (!this.availableWords || this.availableWords.length === 0) {
      let pool = this.words;
      if (cat !== "all") {
        pool = pool.filter(w => w.category === cat);
      }
      this.availableWords = [...pool].sort(() => Math.random() - 0.5);
    }

    this.currentWordObj = this.availableWords.pop();
    if (!this.currentWordObj) {
      this.currentWordObj = this.words[Math.floor(Math.random() * this.words.length)];
    }

    // Update Category Badge UI
    this.dom.badgeText.textContent = this.currentWordObj.categoryName;
    const catIcons = {
      food: "🍲",
      places: "🏛️",
      culture: "🌺",
      nature: "💎",
      favorites: "⚽",
      tech: "💻"
    };
    this.dom.badgeIcon.textContent = catIcons[this.currentWordObj.category] || "🌟";

    // Setup Hint
    if (diff === "easy") {
      this.revealHint(false);
    } else {
      this.dom.hintText.textContent = "Click 'Show Hint' if you need a clue about this word!";
      this.dom.hintBtn.style.display = "inline-block";
    }

    // Reset Hangman SVG Visuals
    this.resetHangmanVisuals();
    this.updateLivesUI();
    this.renderWordSlots();
    this.resetKeyboardUI();
  }

  revealHint(playSound = true) {
    this.hintRevealed = true;
    this.dom.hintText.textContent = this.currentWordObj.hint;
    this.dom.hintBtn.style.display = "none";
    if (playSound) audio.playHint();
  }

  resetHangmanVisuals() {
    Object.values(this.parts).forEach(part => {
      if (part) {
        part.classList.remove("drawn");
        if (part.id === "part-dead-eyes") {
          part.style.display = "none";
        }
        if (part.id === "part-eye-left" || part.id === "part-eye-right" || part.id === "part-mouth") {
          part.style.display = "block";
        }
      }
    });

    // Reset strikes bar
    this.dom.strikesBar.innerHTML = "";
    for (let i = 0; i < this.maxStrikes; i++) {
      const dot = document.createElement("div");
      dot.className = "strike-dot";
      dot.id = `dot-${i + 1}`;
      this.dom.strikesBar.appendChild(dot);
    }
  }

  updateLivesUI() {
    const livesRemaining = Math.max(0, this.maxStrikes - this.strikes);
    this.dom.livesLeft.textContent = livesRemaining;
    this.dom.maxLives.textContent = this.maxStrikes;

    for (let i = 1; i <= this.maxStrikes; i++) {
      const dot = document.getElementById(`dot-${i}`);
      if (dot) {
        if (i <= this.strikes) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      }
    }
  }

  renderWordSlots() {
    this.dom.wordPhrase.innerHTML = "";
    const phrase = this.currentWordObj.word.toUpperCase();
    const words = phrase.split(" ");

    words.forEach(wordStr => {
      const group = document.createElement("div");
      group.className = "word-group";

      for (let i = 0; i < wordStr.length; i++) {
        const char = wordStr[i];
        const slot = document.createElement("div");
        slot.className = "letter-slot";

        if (!/^[A-Z]$/.test(char)) {
          slot.textContent = char;
          slot.classList.add("revealed");
        } else if (this.guessedLetters.has(char)) {
          slot.textContent = char;
          slot.classList.add("revealed");
        } else {
          slot.textContent = "";
        }
        slot.dataset.char = char;
        group.appendChild(slot);
      }

      this.dom.wordPhrase.appendChild(group);
    });
  }

  resetKeyboardUI() {
    document.querySelectorAll(".key-btn").forEach(btn => {
      btn.className = "key-btn";
      btn.disabled = false;
    });
  }

  handleGuess(letter) {
    if (!authManager.currentUser && this.guestGamesCount >= this.maxFreeTrialGames) {
      this.openAuthModal(true);
      return;
    }

    if (this.isGameOver || this.guessedLetters.has(letter)) return;

    this.guessedLetters.add(letter);
    const keyBtn = document.getElementById(`key-${letter}`);
    const targetWord = this.currentWordObj.word.toUpperCase();

    if (targetWord.includes(letter)) {
      audio.playCorrect();
      if (keyBtn) {
        keyBtn.classList.add("correct");
        keyBtn.disabled = true;
      }
      this.renderWordSlots();
      this.checkWinCondition();
    } else {
      this.strikes++;
      audio.playWrong();
      if (keyBtn) {
        keyBtn.classList.add("wrong");
        keyBtn.disabled = true;
      }
      this.drawHangmanPart();
      this.updateLivesUI();
      this.checkLoseCondition();
    }
  }

  drawHangmanPart() {
    const step = this.strikes;
    const p = this.parts;

    if (this.maxStrikes === 6) {
      if (step === 1) {
        p.head.classList.add("drawn");
        p.eyeLeft.classList.add("drawn");
        p.eyeRight.classList.add("drawn");
        p.mouth.classList.add("drawn");
      } else if (step === 2) p.torso.classList.add("drawn");
      else if (step === 3) p.leftArm.classList.add("drawn");
      else if (step === 4) p.rightArm.classList.add("drawn");
      else if (step === 5) p.leftLeg.classList.add("drawn");
      else if (step === 6) {
        p.rightLeg.classList.add("drawn");
        p.eyeLeft.style.display = "none";
        p.eyeRight.style.display = "none";
        p.deadEyes.style.display = "block";
        p.deadEyes.classList.add("drawn");
      }
    } else if (this.maxStrikes === 8) {
      if (step === 1) p.head.classList.add("drawn");
      else if (step === 2) {
        p.eyeLeft.classList.add("drawn");
        p.eyeRight.classList.add("drawn");
        p.mouth.classList.add("drawn");
      } else if (step === 3) p.torso.classList.add("drawn");
      else if (step === 4) p.leftArm.classList.add("drawn");
      else if (step === 5) p.rightArm.classList.add("drawn");
      else if (step === 6) {
        p.leftHand.classList.add("drawn");
        p.rightHand.classList.add("drawn");
      } else if (step === 7) p.leftLeg.classList.add("drawn");
      else if (step === 8) {
        p.rightLeg.classList.add("drawn");
        p.eyeLeft.style.display = "none";
        p.eyeRight.style.display = "none";
        p.deadEyes.style.display = "block";
        p.deadEyes.classList.add("drawn");
      }
    } else if (this.maxStrikes === 5) {
      if (step === 1) {
        p.head.classList.add("drawn");
        p.eyeLeft.classList.add("drawn");
        p.eyeRight.classList.add("drawn");
        p.mouth.classList.add("drawn");
      } else if (step === 2) p.torso.classList.add("drawn");
      else if (step === 3) {
        p.leftArm.classList.add("drawn");
        p.rightArm.classList.add("drawn");
      } else if (step === 4) p.leftLeg.classList.add("drawn");
      else if (step === 5) {
        p.rightLeg.classList.add("drawn");
        p.eyeLeft.style.display = "none";
        p.eyeRight.style.display = "none";
        p.deadEyes.style.display = "block";
        p.deadEyes.classList.add("drawn");
      }
    }
  }

  checkWinCondition() {
    const targetWord = this.currentWordObj.word.toUpperCase();
    let won = true;

    for (let char of targetWord) {
      if (/^[A-Z]$/.test(char) && !this.guessedLetters.has(char)) {
        won = false;
        break;
      }
    }

    if (won) {
      this.isGameOver = true;
      this.gamesPlayed++;
      this.gamesWon++;
      this.streak++;
      if (this.streak > this.bestStreak) {
        this.bestStreak = this.streak;
      }

      const diffMultiplier = this.maxStrikes === 5 ? 1.5 : this.maxStrikes === 8 ? 0.8 : 1.0;
      const livesBonus = (this.maxStrikes - this.strikes) * 15;
      const hintPenalty = this.hintRevealed ? 20 : 0;
      const gainedScore = Math.max(20, Math.round((100 + livesBonus - hintPenalty) * diffMultiplier));
      this.score += gainedScore;

      this.saveStats(true, gainedScore);
      this.spawnConfetti();
      audio.playWin();

      setTimeout(() => {
        this.dom.modalCard.className = "modal-card modal-win";
        this.dom.modalIcon.textContent = "🎉";
        this.dom.modalTitle.textContent = "VICTORY!";
        this.dom.modalWord.textContent = this.currentWordObj.word;
        this.dom.modalMeaning.textContent = this.currentWordObj.hint;
        this.dom.modalStreak.textContent = `+${this.streak}`;
        this.dom.modalScore.textContent = `+${gainedScore}`;
        this.dom.modalLivesLeft.textContent = `${this.maxStrikes - this.strikes}/${this.maxStrikes}`;
        
        if (!authManager.currentUser && this.guestGamesCount >= this.maxFreeTrialGames) {
          this.dom.modalNextBtn.textContent = "Sign In to Continue Playing";
        } else {
          this.dom.modalNextBtn.textContent = "Next Word (Spacebar)";
        }

        this.dom.gameModal.classList.add("active");
      }, 500);
    }
  }

  checkLoseCondition() {
    if (this.strikes >= this.maxStrikes) {
      this.isGameOver = true;
      this.gamesPlayed++;
      this.streak = 0;
      this.saveStats(false, 0);
      audio.playLose();

      document.querySelectorAll(".letter-slot").forEach(slot => {
        if (!slot.textContent) {
          slot.textContent = slot.dataset.char;
          slot.classList.add("missed");
        }
      });

      setTimeout(() => {
        this.dom.modalCard.className = "modal-card modal-lose";
        this.dom.modalIcon.textContent = "💀";
        this.dom.modalTitle.textContent = "GAME OVER";
        this.dom.modalWord.textContent = this.currentWordObj.word;
        this.dom.modalMeaning.textContent = this.currentWordObj.hint;
        this.dom.modalStreak.textContent = "0";
        this.dom.modalScore.textContent = "+0";
        this.dom.modalLivesLeft.textContent = "0";

        if (!authManager.currentUser && this.guestGamesCount >= this.maxFreeTrialGames) {
          this.dom.modalNextBtn.textContent = "Sign In to Continue Playing";
        } else {
          this.dom.modalNextBtn.textContent = "Try Again (Spacebar)";
        }

        this.dom.gameModal.classList.add("active");
      }, 700);
    }
  }
}

// Boot game when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  window.game = new HangmanGame();
});
