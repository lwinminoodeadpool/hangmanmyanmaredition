// Lightweight Web Audio API Sound Synthesizer (Zero External Assets)
class SoundManager {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem("hangman_muted") === "true";
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem("hangman_muted", this.isMuted);
    return this.isMuted;
  }

  playTone(freq, type = "sine", duration = 0.15, gainVal = 0.15, startTime = 0) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime + startTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(gainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  playClick() {
    this.playTone(600, "sine", 0.04, 0.08);
  }

  playCorrect() {
    this.playTone(523.25, "sine", 0.12, 0.15, 0);       // C5
    this.playTone(659.25, "sine", 0.16, 0.18, 0.07);    // E5
    this.playTone(783.99, "triangle", 0.22, 0.2, 0.14); // G5
  }

  playWrong() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(70, now + 0.25);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  playHint() {
    this.playTone(659.25, "sine", 0.08, 0.12, 0);     // E5
    this.playTone(880.00, "sine", 0.08, 0.12, 0.08);  // A5
    this.playTone(1046.50, "sine", 0.15, 0.15, 0.16); // C6
  }

  playWin() {
    if (this.isMuted) return;
    const notes = [
      { f: 523.25, t: 0, d: 0.15 },    // C5
      { f: 659.25, t: 0.12, d: 0.15 }, // E5
      { f: 783.99, t: 0.24, d: 0.18 }, // G5
      { f: 1046.50, t: 0.38, d: 0.4 }  // C6
    ];
    notes.forEach(n => this.playTone(n.f, "triangle", n.d, 0.22, n.t));
  }

  playLose() {
    if (this.isMuted) return;
    const notes = [
      { f: 392.00, t: 0, d: 0.2 },     // G4
      { f: 369.99, t: 0.18, d: 0.2 },  // F#4
      { f: 349.23, t: 0.36, d: 0.25 }, // F4
      { f: 293.66, t: 0.58, d: 0.45 }  // D4
    ];
    notes.forEach(n => this.playTone(n.f, "sawtooth", n.d, 0.14, n.t));
  }
}

const audio = new SoundManager();
