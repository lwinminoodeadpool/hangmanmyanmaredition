# Hangman: Myanmar Edition 🪢

A modern, responsive, and visually stunning web implementation of the classic **Hangman Game**, featuring things Myanmar people know and love (iconic foods, landmarks, cultural items, festivals, and fan favorites), connected to **Supabase** for User Authentication, Player Profiles, Cloud Stats Sync, and a Global Leaderboard!

---

## 🌟 Features

- 🍲 **Rich Myanmar Word Bank (in English)**: Over 70+ categorized words across Myanmar Food, Landmarks, Culture & Festivals, Gems & Wildlife, Football & Gaming Favorites, and Tech.
- 💡 **Helpful English Hints**: Contextual clues for every word that challenge and guide the player.
- 🎮 **3-Game Free Trial**: Guests can play up to 3 games for free before registering.
- 🔐 **Supabase User Authentication**: Sign up or log in with username/email and password.
- 👤 **Player Profiles**: Lifetime statistics tracking (Total Score, Best Streak, Current Streak, Games Won, Games Played, Win Rate).
- 🏆 **Global Leaderboard**: Real-time top player rankings with medals (🥇, 🥈, 🥉).
- 🎨 **Visuals & Audio**: Modern dark glassmorphism design with SVG hangman animations and Web Audio API synthesized sound effects.

---

## 🚀 Running Locally

You can serve the project using any static file server:

```bash
# Using Python
python3 -m http.server 3005

# Or using Node.js / npx serve
npx serve .
```

Then open `http://localhost:3005` in your browser.

---

## 🔐 Configuration & Security

- **Database & Auth**: Powered by [Supabase](https://supabase.com).
- **Security**: The client uses the public `anon` key, which is safe for frontend browsers when Row Level Security (RLS) is enabled on your tables. The secret `service_role` key is **never** included or committed.

---

## 📄 License

MIT License. Feel free to use and customize for your own projects!
