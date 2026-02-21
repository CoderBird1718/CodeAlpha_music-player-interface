#  Dharma Player · धर्म प्लेयर

> *"Yada yada hi dharmasya glanir bhavati bharata..."*
> — Bhagavad Gita 4.7

A **Mahabharata-themed music streaming web app** — think Spotify, but set in the age of gods, warriors, and sacred fire. Built with pure HTML, CSS, and vanilla JavaScript. No frameworks. No build tools. Just epic aesthetics and working audio controls.

---

##  Live Preview
https://coderbird1718.github.io/CodeAlpha_music-player-interface/

---
##  Features

###  Music Player
- **Simulated playback** with real progress tracking (play, pause, seek, skip)
- **Progress bar** — click or drag to seek, shows elapsed/total time
- **Volume control** with drag bar and mute toggle
- **Shuffle mode** — randomizes track order
- **Repeat modes** — Off → Repeat All → Repeat One (cycle with `R`)
- **Like/unlike tracks** — persists across sessions via `localStorage`
- **Now Playing bar** — updates dynamically with track art, title, artist

###  Design & Aesthetics
- **Mahabharata gold + deep purple** colour palette
- **Sudarshan Chakra** SVG animations — spinning at multiple speeds across the UI
- **Animated star particle canvas** — 90 floating gold/purple particles in the background
- **Gold shimmer effects** on the player bar and sidebar top border
- **Sanskrit verse quotes** displayed throughout the UI
- **Responsive design** — works on desktop, tablet, and mobile
- **Custom scrollbar** — gold gradient on dark track

###  Scroll Buttons
Fixed **▲ / ▼ scroll buttons** on the bottom-right of every page:
- ▲ scrolls to the top (only visible after scrolling 300px)
- ▼ scrolls down 300px at a time
- Styled with gold border, glassmorphism, hover glow

###  Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Play / Pause |
| `Alt + →` | Next track |
| `Alt + ←` | Previous track |
| `→` | Seek forward 5% |
| `←` | Seek backward 5% |
| `↑` | Volume up 10% |
| `↓` | Volume down 10% |
| `M` | Mute / Unmute |
| `S` | Toggle Shuffle |
| `R` | Cycle Repeat mode |
| `L` | Like current track |

##  File Structure

```
dharma-player/
├── index.html       # Home page
├── artists.html     # All 10 artists (grid + spotlight)
├── artist.html      # Single artist detail (dynamic via ?id=)
├── playlist.html    # Playlist view with autoplay toggle
├── library.html     # User library (playlists, liked songs)
├── style.css        # All styles (~785 lines)
├── player.js        # All logic (~484 lines)
└── README.md
```


## Tech Stack

| Layer | Tech |
|-------|------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox, animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Cinzel Decorative, IM Fell English, Raleway |
| Images | Picsum Photos (placeholder art) |
| Storage | `localStorage` |
| Audio | Simulated (setInterval-based progress, no audio files) |

##  Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `> 1400px` | Wide sidebar (280px), 5-column card grid |
| `1024–1400px` | Standard sidebar (250px), 4-column grid |
| `768–1024px` | Narrower sidebar, single-column home layout |
| `< 768px` | Sidebar slides in from left (hamburger menu), simplified player |
| `< 480px` | 2-column grid, minimal player bar |
