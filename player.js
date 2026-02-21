/* ================================================================
   DHARMA PLAYER — player.js  Enhanced v3
   Full audio control + particles + scroll + 10 artists
================================================================ */
"use strict";

/* ── 10 ARTISTS ── */
const ARTISTS = [
  { id:1, name:"Arjuna", seed:"arjuna", role:"The Divine Archer", genre:"Epic · Battle", listeners:"300.9M", followers:"108M", epics:18, description:"The greatest archer of the Mahabharata age, third Pandava and beloved disciple of Sri Krishna. His music carries the weight of dharma — every note is an arrow loosed from Gandiva, every silence a prayer on the battlefield. Blessed by all the devas, his range spans from thunderous war-cries to tender laments of a warrior questioning duty.", quote:'"Do your duty without attachment to the fruit of action." — Bhagavad Gita 3.19', color:"#1a3a6a", tracks:[3,5,0] },
  { id:2, name:"Krishna", seed:"krishna", role:"The Divine Flutist", genre:"Divine · Devotional", listeners:"∞", followers:"500M", epics:108, description:"Svayam Bhagavan — the Supreme Personality of Godhead — whose flute melody reverberates through all three worlds. His music is the universe itself breathing. Every note played on his Murali flute stills the motion of rivers and summons the cowherd maidens of Vrindavan from their deepest sleep.", quote:'"I am the taste in water, the light in the sun and the moon." — Bhagavad Gita 7.8', color:"#0a2a4a", tracks:[3,4,7] },
  { id:3, name:"Bhishma", seed:"bhishma", role:"The Oath-Keeper of Hastinapura", genre:"Epic · Classical", listeners:"150M", followers:"42M", epics:8, description:"Devavrata, who became Bhishma through a terrible oath of lifelong celibacy. His music is austere, magnificent, and tinged with the sorrow of self-denial. The eighth son of Ganga and Shantanu — even lying on his bed of arrows at Kurukshetra, he sang the Vishnu Sahasranama to assembled warriors.", quote:'"There is no greater dharma than truth, no greater sin than falsehood."', color:"#1a1a3a", tracks:[0,6] },
  { id:4, name:"Karna", seed:"karna", role:"The Forgotten Sun-Warrior", genre:"Epic · Tragic", listeners:"910M", followers:"280M", epics:12, description:"Radheya, son of Surya and Kunti, abandoned at birth and raised by a charioteer. Karna's music is the most heartbreaking in all the epics — full of brilliance obscured by fate, generosity meeting cruelty, and courage meeting injustice. A hero always on the wrong side of circumstance, yet never losing nobility.", quote:'"The greatest tragedy is not to die unloved, but to never have given your love."', color:"#3a1a0a", tracks:[7] },
  { id:5, name:"Draupadi", seed:"draupadi", role:"The Fire-Born Queen", genre:"Classical · Devotional", listeners:"80M", followers:"25M", epics:6, description:"Panchali, born of sacred fire at King Drupada's yajna, wife of the five Pandavas. Draupadi's voice carries both the serenity of the divine and the scorching heat of righteous wrath. Her compositions range from tender devotional hymns to fierce battle-cries demanding justice in courts of kings.", quote:'"If dharma abandons me, I shall become its guardian myself."', color:"#3a0a1a", tracks:[1] },
  { id:6, name:"Vishnu", seed:"vishnu", role:"The Preserver of Worlds", genre:"Devotional · Celestial", listeners:"2.1B", followers:"∞", epics:24, description:"Narayana, the sustainer of the universe, who descends as an avatar whenever dharma declines. His music is the cosmic hum (Aum) underlying all creation — infinite, all-pervading, beyond time. The Sudarshan Chakra spins in rhythm with his compositions; the waters of the Milky Ocean part when he plays.", quote:'"Whenever there is a decline in righteousness, I manifest myself." — Bhagavad Gita 4.7', color:"#0a2a1a", tracks:[4] },
  { id:7, name:"Yudhishthira", seed:"yudhi", role:"The Dharma Raja", genre:"Classical · Devotional", listeners:"85M", followers:"18M", epics:7, description:"The eldest Pandava, son of Dharma himself, who never uttered a lie in his life (save once). Yudhishthira's music is measured, just, and profound — the sound of dharma incarnate. His compositions explore the cost of righteous kingship and the weight of difficult choices. Even in defeat at the dice game, his music maintains unwavering dignity.", quote:'"The path of dharma is subtle; even the wise may be confused by it."', color:"#2a1a0a", tracks:[2] },
  { id:8, name:"Kalidasa", seed:"shakuntala", role:"The Poet of the Ages", genre:"Classical · Sanskrit", listeners:"388M", followers:"90M", epics:15, description:"The jewel of Vikramaditya's court and arguably the greatest poet in Sanskrit. Kalidasa's music is lush with the beauty of the natural world — monsoons, mountains, rivers, and the longing of lovers separated by fate. His Meghaduta shimmers with imagery so vivid listeners swear they can feel the first drops of rain.", quote:'"Even a small gift presented with reverence exceeds a great gift offered with contempt." — Raghuvamsha', color:"#1a2a0a", tracks:[6] },
  { id:9, name:"Tansen", seed:"gandiva", role:"The Raga Master", genre:"Hindustani · Classical", listeners:"220M", followers:"55M", epics:10, description:"The legendary court musician of Emperor Akbar and one of the Navaratnas of his court. Tansen's mastery of ragas was so complete he could light lamps by singing Raga Deepak and summon rain with Raga Megh Malhar. His compositions bridged the divine and human, weaving Dhrupad traditions with Sufi mysticism.", quote:'"Music is the one art that connects the human soul directly to the divine."', color:"#2a0a3a", tracks:[5,8] },
  { id:10, name:"Mirabai", seed:"mira", role:"The Mystic Singer", genre:"Bhakti · Devotional", listeners:"160M", followers:"48M", epics:9, description:"The Rajput princess-saint who forsook royal life to become a wandering devotee of Lord Krishna. Mirabai's bhajans are among the most beloved compositions in Indian music — raw, fearless, ecstatic with divine love. Her poetry blends passionate longing with absolute surrender. She defied caste, gender, and convention alike.", quote:'"I have found my guru in love; I have drunk from the cup of the Infinite."', color:"#3a0a2a", tracks:[4,9] }
];

/* ── PLAYLIST (10 tracks) ── */
const PLAYLIST = [
  { id:1, title:"Bhishma's Oath", artist:"Kuru Kingdom", artistId:3, album:"Kurukshetra", duration:247, durationStr:"4:07", plays:"1,942,409,728", src:"", cover:"https://picsum.photos/seed/bhishma/200/200", category:"epic" },
  { id:2, title:"The Nights of Draupadi", artist:"Panchali", artistId:5, album:"Swayamvara", duration:218, durationStr:"3:58", plays:"1,429,204,958", src:"", cover:"https://picsum.photos/seed/draupadi/200/200", category:"devotional" },
  { id:3, title:"Waiting for Dharma", artist:"Yudhisthira", artistId:7, album:"Indraprastha", duration:212, durationStr:"3:32", plays:"1,184,221,135", src:"", cover:"https://picsum.photos/seed/yudhi/200/200", category:"devotional" },
  { id:4, title:"Levels of Kurukshetra", artist:"Arjuna feat. Krishna", artistId:1, album:"Gita Sessions", duration:239, durationStr:"3:59", plays:"779,519,486", src:"", cover:"https://picsum.photos/seed/arjuna/200/200", category:"epic" },
  { id:5, title:"Sudarshan Chakra", artist:"Vishnu", artistId:6, album:"Vaikuntha", duration:303, durationStr:"5:03", plays:"2,100,000,000", src:"", cover:"https://picsum.photos/seed/vishnu/200/200", category:"devotional" },
  { id:6, title:"Gandiva's Song", artist:"Arjuna", artistId:1, album:"Gita Sessions", duration:185, durationStr:"3:05", plays:"641,000,000", src:"", cover:"https://picsum.photos/seed/gandiva/200/200", category:"epic" },
  { id:7, title:"Shakuntala", artist:"Kalidasa", artistId:8, album:"Abhijnanashakuntalam", duration:270, durationStr:"4:30", plays:"388,000,000", src:"", cover:"https://picsum.photos/seed/shakuntala/200/200", category:"classical" },
  { id:8, title:"Karna's Lament", artist:"Radheya", artistId:4, album:"Forgotten Hero", duration:198, durationStr:"3:18", plays:"910,000,000", src:"", cover:"https://picsum.photos/seed/karna/200/200", category:"epic" },
  { id:9, title:"Raga Megh Malhar", artist:"Tansen", artistId:9, album:"Akbar's Court", duration:320, durationStr:"5:20", plays:"220,000,000", src:"", cover:"https://picsum.photos/seed/tansen/200/200", category:"classical" },
  { id:10, title:"Payo Ji Maine Ram Ratan", artist:"Mirabai", artistId:10, album:"Bhakti Sagara", duration:255, durationStr:"4:15", plays:"160,000,000", src:"", cover:"https://picsum.photos/seed/mira/200/200", category:"devotional" }
];

/* ── STATE ── */
const state = {
  currentIndex:0, isPlaying:false, progress:0,
  volume:0.7, isMuted:false, isShuffled:false,
  repeatMode:0, likedTracks:new Set(), elapsed:0, timer:null
};

function $  (s) { return document.querySelector(s); }
function $$ (s) { return document.querySelectorAll(s); }

/* ════════════════════════════════
   INIT
════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  initParticles();
  initScrollButtons();
  renderPlayerBar();
  renderTrackList();
  renderCards();
  renderArtistGrid();
  bindEvents();
  bindKeyboard();
  initSidebar();
  initSearch();
  updateGreeting();
  showToast("🕉  Dharma Player · स्वागतम्");
});

/* ── GREETING BY TIME ── */
function updateGreeting() {
  const el = $(".greeting");
  if (!el) return;
  const h = new Date().getHours();
  const msg = h < 5  ? "Good Night, Warrior 🌙"
            : h < 12 ? "Good Morning, Warrior ⚔"
            : h < 17 ? "Good Afternoon, Warrior 🏹"
            : h < 21 ? "Good Evening, Warrior 🔥"
            :           "Good Night, Warrior 🌙";
  el.textContent = msg;
}

/* ════════════════════════════════
   PARTICLES (star field)
════════════════════════════════ */
function initParticles() {
  const canvas = document.createElement("canvas");
  canvas.id = "particleCanvas";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  let particles = [];
  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.3 + 0.05,
      alpha: Math.random() * 0.7 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      gold: Math.random() > 0.7
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.pulse += 0.025;
      p.y -= p.speed;
      if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
      const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.gold
        ? `rgba(232,184,75,${a})`
        : `rgba(200,184,220,${a * 0.5})`;
      ctx.fill();
    });
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
}

/* ════════════════════════════════
   SCROLL BUTTONS
════════════════════════════════ */
function initScrollButtons() {
  // Create scroll button container
  const wrap = document.createElement("div");
  wrap.className = "scroll-btns";
  wrap.innerHTML = `
    <button class="scroll-btn" id="scrollTopBtn" title="Scroll to top" onclick="scrollToTop()">
      <svg viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/></svg>
    </button>
    <button class="scroll-btn" id="scrollDownBtn" title="Scroll down" onclick="scrollDown()">
      <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
    </button>
  `;
  document.body.appendChild(wrap);

  // Show/hide scroll-top button based on scroll position
  const main = $(".main");
  if (main) {
    main.addEventListener("scroll", () => {
      const topBtn = $("#scrollTopBtn");
      if (topBtn) {
        topBtn.classList.toggle("visible", main.scrollTop > 300);
      }
    });
  }
}

window.scrollToTop = function() {
  const main = $(".main");
  if (main) main.scrollTo({ top: 0, behavior: "smooth" });
};
window.scrollDown = function() {
  const main = $(".main");
  if (main) main.scrollBy({ top: 300, behavior: "smooth" });
};

/* ════════════════════════════════
   LOAD / SAVE STATE
════════════════════════════════ */
function loadState() {
  try {
    const s = localStorage.getItem("dharmaPlayer");
    if (s) {
      const d = JSON.parse(s);
      state.currentIndex = d.currentIndex || 0;
      state.volume       = d.volume ?? 0.7;
      state.isShuffled   = d.isShuffled || false;
      state.repeatMode   = d.repeatMode || 0;
      state.likedTracks  = new Set(d.likedTracks || []);
    }
  } catch(e) {}
}
function saveState() {
  try {
    localStorage.setItem("dharmaPlayer", JSON.stringify({
      currentIndex:state.currentIndex, volume:state.volume,
      isShuffled:state.isShuffled, repeatMode:state.repeatMode,
      likedTracks:[...state.likedTracks]
    }));
  } catch(e) {}
}

function currentTrack() { return PLAYLIST[state.currentIndex]; }

/* ════════════════════════════════
   RENDER PLAYER BAR
════════════════════════════════ */
function renderPlayerBar() {
  const t = currentTrack();
  const thumb = $(".np-thumb"); if (thumb) { thumb.src = t.cover; thumb.alt = t.title; }
  const title  = $(".np-title");  if (title)  title.textContent  = t.title;
  const artist = $(".np-artist"); if (artist) artist.textContent = t.artist;
  const likeBtn = $(".np-like");
  if (likeBtn) { likeBtn.textContent = state.likedTracks.has(t.id) ? "♥" : "♡"; likeBtn.classList.toggle("liked", state.likedTracks.has(t.id)); }
  const timeEnd = $(".time-label.end"); if (timeEnd) timeEnd.textContent = t.durationStr;
  const shuf = $(".ctrl-btn.shuffle"); if (shuf) shuf.classList.toggle("active", state.isShuffled);
  const rep  = $(".ctrl-btn.repeat");
  if (rep) { rep.classList.toggle("active", state.repeatMode > 0); rep.title = ["Repeat off","Repeat all","Repeat one"][state.repeatMode]; }
  updateVolumeUI();
  state.elapsed = 0; state.progress = 0;
  updateProgressUI(0); updatePlayPauseUI();
  document.title = `${t.title} · ${t.artist} · Dharma Player`;
}

function updateProgressUI(ratio) {
  const fill  = $(".progress-fill");
  const label = $(".time-label.start");
  if (fill)  fill.style.width = (ratio * 100) + "%";
  if (label) label.textContent = formatTime(ratio * currentTrack().duration);
}
function updateVolumeUI() {
  const fill = $(".vol-fill"), icon = $(".vol-icon");
  if (fill) fill.style.width = (state.isMuted ? 0 : state.volume * 100) + "%";
  if (icon) {
    if (state.isMuted || state.volume === 0) icon.textContent = "🔇";
    else if (state.volume < 0.4) icon.textContent = "🔈";
    else if (state.volume < 0.7) icon.textContent = "🔉";
    else icon.textContent = "🔊";
  }
}
function updatePlayPauseUI() {
  const btn = $(".play-pause-btn"); if (!btn) return;
  btn.classList.toggle("playing", state.isPlaying);
}

/* ════════════════════════════════
   PLAYBACK
════════════════════════════════ */
function play() {
  state.isPlaying = true; updatePlayPauseUI(); highlightCurrentTrack();
  clearInterval(state.timer);
  state.timer = setInterval(() => {
    state.elapsed += 0.25;
    const t = currentTrack();
    state.progress = Math.min(state.elapsed / t.duration, 1);
    updateProgressUI(state.progress);
    if (state.elapsed >= t.duration) { clearInterval(state.timer); onTrackEnd(); }
  }, 250);
}
function pause() {
  state.isPlaying = false; clearInterval(state.timer);
  updatePlayPauseUI(); highlightCurrentTrack();
}
function togglePlay() { state.isPlaying ? pause() : play(); }

function onTrackEnd() {
  if (state.repeatMode === 2) { state.elapsed = 0; play(); }
  else next(true);
}
function next(auto = false) {
  if (state.isShuffled && !auto) {
    let idx; do { idx = Math.floor(Math.random() * PLAYLIST.length); } while (idx === state.currentIndex && PLAYLIST.length > 1);
    state.currentIndex = idx;
  } else {
    state.currentIndex = (state.currentIndex + 1) % PLAYLIST.length;
    if (state.repeatMode === 0 && auto && state.currentIndex === 0) { pause(); return; }
  }
  renderPlayerBar(); renderTrackList(); saveState(); showTrackToast();
  if (state.isPlaying) play(); else { state.isPlaying = true; play(); }
}
function prev() {
  if (state.elapsed > 3) { state.elapsed = 0; updateProgressUI(0); if (state.isPlaying) play(); }
  else {
    state.currentIndex = (state.currentIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
    renderPlayerBar(); renderTrackList(); saveState(); showTrackToast();
    if (state.isPlaying) play(); else { state.isPlaying = true; play(); }
  }
}
function playTrack(index) {
  if (index < 0 || index >= PLAYLIST.length) return;
  state.currentIndex = index;
  renderPlayerBar(); renderTrackList(); saveState(); showTrackToast();
  state.isPlaying = true; play();
}
function seekTo(ratio) {
  state.progress = ratio; state.elapsed = ratio * currentTrack().duration;
  updateProgressUI(ratio);
  if (state.isPlaying) { clearInterval(state.timer); play(); }
}
function toggleShuffle() {
  state.isShuffled = !state.isShuffled;
  const btn = $(".ctrl-btn.shuffle"); if (btn) btn.classList.toggle("active", state.isShuffled);
  saveState(); showToast(state.isShuffled ? "🔀 Shuffle: ON" : "🔀 Shuffle: OFF");
}
function cycleRepeat() {
  state.repeatMode = (state.repeatMode + 1) % 3;
  const btn = $(".ctrl-btn.repeat");
  if (btn) { btn.classList.toggle("active", state.repeatMode > 0); btn.title = ["Repeat off","Repeat all","Repeat one"][state.repeatMode]; }
  saveState(); showToast(["⏹ Repeat: OFF","🔁 Repeat: ALL","🔂 Repeat: ONE"][state.repeatMode]);
}
function setVolume(v) { state.volume = Math.max(0, Math.min(1, v)); state.isMuted = false; updateVolumeUI(); }
function toggleMute() { state.isMuted = !state.isMuted; updateVolumeUI(); }
function toggleLike(trackId) {
  if (state.likedTracks.has(trackId)) { state.likedTracks.delete(trackId); showToast("💔 Removed from favourites"); }
  else { state.likedTracks.add(trackId); showToast("💛 Added to favourites"); }
  renderPlayerBar(); renderTrackList(); saveState();
}

/* ════════════════════════════════
   RENDER TRACK LIST
════════════════════════════════ */
function renderTrackList() {
  $$(".track-list-body").forEach(list => {
    list.innerHTML = "";
    PLAYLIST.forEach((t, i) => {
      const playing = i === state.currentIndex;
      const liked   = state.likedTracks.has(t.id);
      const row = document.createElement("div");
      row.className = `track-row${playing ? " playing" : ""}`;
      row.style.animationDelay = (i * 0.04) + "s";
      row.innerHTML = `
        <div class="track-num">${playing && state.isPlaying ? `<div class="eq-icon"><span></span><span></span><span></span></div>` : (i+1)}</div>
        <img class="track-thumb" src="${t.cover}" alt="${t.title}" loading="lazy">
        <div class="track-info">
          <div class="track-name">${t.title}</div>
          <div class="track-artist">${t.artist} · ${t.album}</div>
        </div>
        <div class="track-plays">${t.plays}</div>
        <div class="track-dur">${t.durationStr}</div>
        <button class="track-like${liked ? " liked" : ""}" data-id="${t.id}" title="Like">${liked ? "♥" : "♡"}</button>
      `;
      row.addEventListener("click", e => { if (!e.target.closest(".track-like")) playTrack(i); });
      row.querySelector(".track-like").addEventListener("click", e => { e.stopPropagation(); toggleLike(t.id); });
      list.appendChild(row);
    });
  });
}

/* ── RENDER CARDS ── */
function renderCards() {
  $$(".cards-grid[data-render]").forEach(grid => {
    const filter = grid.dataset.render;
    const tracks = filter === "all" ? PLAYLIST : PLAYLIST.filter(t => t.category === filter);
    grid.innerHTML = "";
    tracks.slice(0, 10).forEach((t, i) => {
      const card = document.createElement("div");
      card.className = "music-card";
      card.style.animationDelay = (i * 0.06) + "s";
      card.innerHTML = `
        <img src="${t.cover}" alt="${t.title}" loading="lazy">
        <div class="card-name">${t.title}</div>
        <div class="card-sub">${t.artist}</div>
        <div class="card-play-overlay"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
      `;
      card.addEventListener("click", () => { const idx = PLAYLIST.indexOf(t); if (idx !== -1) playTrack(idx); });
      grid.appendChild(card);
    });
  });
}

/* ── RENDER ARTIST GRID ── */
function renderArtistGrid() {
  $$(".artists-grid[data-render='artists']").forEach(grid => {
    grid.innerHTML = "";
    ARTISTS.forEach((a, i) => {
      const card = document.createElement("div");
      card.className = "artist-card-full";
      card.style.animationDelay = (i * 0.05) + "s";
      card.innerHTML = `
        <div class="acf-img-wrap">
          <img src="https://picsum.photos/seed/${a.seed}/300/300" alt="${a.name}" loading="lazy">
          <div class="acf-overlay">
            <button class="acf-play" data-aid="${a.id - 1}">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </button>
          </div>
        </div>
        <div class="acf-name">${a.name}</div>
        <div class="acf-role">${a.role}</div>
        <div class="acf-genre">${a.genre}</div>
        <div class="acf-listeners">🎧 ${a.listeners}</div>
      `;
      card.querySelector(".acf-play").addEventListener("click", e => { e.stopPropagation(); playArtist(a.id - 1); });
      card.addEventListener("click", () => window.location.href = `artist.html?id=${a.id}`);
      grid.appendChild(card);
    });
  });
}

function playArtist(idx) {
  const a = ARTISTS[idx]; if (!a || !a.tracks.length) return;
  playTrack(a.tracks[0]);
}

/* ── HIGHLIGHT CURRENT ── */
function highlightCurrentTrack() {
  $$(".track-row").forEach((row, i) => {
    row.classList.toggle("playing", i === state.currentIndex);
    const num = row.querySelector(".track-num"); if (!num) return;
    if (i === state.currentIndex && state.isPlaying) num.innerHTML = `<div class="eq-icon"><span></span><span></span><span></span></div>`;
    else num.textContent = i + 1;
  });
}

/* ── SEARCH ── */
function initSearch() {
  $$("input[type='text']").forEach(inp => {
    inp.addEventListener("input", e => {
      const q = e.target.value.toLowerCase().trim(); if (!q) return;
      const r = PLAYLIST.filter(t => t.title.toLowerCase().includes(q) || t.artist.toLowerCase().includes(q) || t.album.toLowerCase().includes(q));
      if (r.length) showToast(`🔍 ${r.length} result${r.length > 1 ? "s" : ""} for "${e.target.value}"`);
    });
    inp.addEventListener("keydown", e => {
      if (e.key !== "Enter") return;
      const q = e.target.value.toLowerCase().trim(); if (!q) return;
      const idx = PLAYLIST.findIndex(t => t.title.toLowerCase().includes(q) || t.artist.toLowerCase().includes(q));
      if (idx !== -1) { playTrack(idx); e.target.value = ""; e.target.blur(); }
      else showToast("🔍 No matching tracks found");
    });
  });
}

/* ── BIND EVENTS ── */
function bindEvents() {
  document.addEventListener("click", e => {
    if (e.target.closest(".play-pause-btn")) togglePlay();
    if (e.target.closest(".ctrl-btn.next-btn")) next();
    if (e.target.closest(".ctrl-btn.prev-btn")) prev();
    if (e.target.closest(".ctrl-btn.shuffle"))  toggleShuffle();
    if (e.target.closest(".ctrl-btn.repeat"))   cycleRepeat();
    if (e.target.closest(".vol-icon"))           toggleMute();
    if (e.target.closest(".np-like"))            toggleLike(currentTrack().id);
    if (e.target.closest(".play-btn-large")) { state.isPlaying ? togglePlay() : (state.isPlaying = true, play()); }
    const vbar = e.target.closest(".vol-bar");
    if (vbar) { const r = vbar.getBoundingClientRect(); setVolume((e.clientX - r.left) / r.width); }
  });

  // Progress drag
  let dragging = false;
  const getSeekRatio = (clientX) => { const bar = $(".progress-bar"); if (!bar) return 0; const r = bar.getBoundingClientRect(); return Math.max(0, Math.min(1, (clientX - r.left) / r.width)); };
  document.addEventListener("mousedown", e => { if (e.target.closest(".progress-bar")) { dragging = true; seekTo(getSeekRatio(e.clientX)); } });
  document.addEventListener("mousemove", e => { if (dragging) seekTo(getSeekRatio(e.clientX)); });
  document.addEventListener("mouseup", () => { dragging = false; });
  document.addEventListener("touchstart", e => { if (e.target.closest(".progress-bar")) seekTo(getSeekRatio(e.touches[0].clientX)); }, { passive:true });
}

/* ── KEYBOARD ── */
function bindKeyboard() {
  document.addEventListener("keydown", e => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    switch(e.code) {
      case "Space":      e.preventDefault(); togglePlay(); break;
      case "ArrowRight": e.altKey ? (e.preventDefault(), next()) : (e.preventDefault(), seekTo(Math.min(1, state.progress + 0.05))); break;
      case "ArrowLeft":  e.altKey ? (e.preventDefault(), prev()) : (e.preventDefault(), seekTo(Math.max(0, state.progress - 0.05))); break;
      case "ArrowUp":    e.preventDefault(); setVolume(state.volume + 0.1); showToast(`🔊 ${Math.round(state.volume * 100)}%`); break;
      case "ArrowDown":  e.preventDefault(); setVolume(state.volume - 0.1); showToast(`🔉 ${Math.round(state.volume * 100)}%`); break;
      case "KeyM": toggleMute(); showToast(state.isMuted ? "🔇 Muted" : "🔊 Unmuted"); break;
      case "KeyS": if (!e.ctrlKey && !e.metaKey) toggleShuffle(); break;
      case "KeyR": cycleRepeat(); break;
      case "KeyL": toggleLike(currentTrack().id); break;
    }
  });
}

/* ── SIDEBAR ── */
function initSidebar() {
  const sidebar = $(".sidebar"), overlay = $(".sidebar-overlay");
  $$(".menu-toggle-btn").forEach(btn => btn.addEventListener("click", () => { sidebar?.classList.toggle("open"); overlay?.classList.toggle("show"); }));
  overlay?.addEventListener("click", () => { sidebar?.classList.remove("open"); overlay?.classList.remove("show"); });
  $$(".nav-item").forEach(item => item.addEventListener("click", () => { if (window.innerWidth <= 768) { sidebar?.classList.remove("open"); overlay?.classList.remove("show"); } }));
}

/* ── TOAST ── */
let toastTimer;
function showToast(msg) {
  let toast = $(".toast");
  if (!toast) { toast = document.createElement("div"); toast.className = "toast"; document.body.appendChild(toast); }
  toast.textContent = msg; toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function showTrackToast() { const t = currentTrack(); showToast(`♪ ${t.title} · ${t.artist}`); }

function formatTime(secs) {
  if (isNaN(secs)) return "0:00";
  return `${Math.floor(secs / 60)}:${String(Math.floor(secs % 60)).padStart(2,"0")}`;
}

/* ── EXPOSE ── */
window.DP = { playTrack, togglePlay, next, prev, toggleLike, showToast, playArtist };
window.ARTISTS = ARTISTS; window.PLAYLIST = PLAYLIST; window.state = state;
