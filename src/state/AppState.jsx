import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { PHASES, SONGS, TOPICS, STAGE_IMAGE, IMG_SIZE, PINS } from '../data.js';

const AppContext = createContext(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppStateProvider');
  return ctx;
}

function fmt(v) {
  v = Math.floor(v || 0);
  return Math.floor(v / 60) + ':' + String(v % 60).padStart(2, '0');
}

function artGrad(a) {
  return `radial-gradient(circle at 34% 26%, ${a[1]}, ${a[0]} 72%)`;
}

function resolvePhase(override, now) {
  if (override) return PHASES.find((p) => p.key === override) || PHASES[2];
  const h = now.getHours();
  return PHASES.find((p) => (p.from < p.to ? h >= p.from && h < p.to : h >= p.from || h < p.to)) || PHASES[2];
}

function resolveQueue(pinned, phaseKey) {
  if (pinned) return SONGS;
  const list = SONGS.filter((x) => x.times.includes(phaseKey));
  return list.length ? list : SONGS;
}

export function AppStateProvider({ children }) {
  const [page, setPage] = useState('home');
  const [override, setOverride] = useState(null);
  const [now, setNow] = useState(() => new Date());
  const [topic, setTopic] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const [realDuration, setRealDuration] = useState(0);
  const [i, setI] = useState(0);
  const [pinned, setPinned] = useState(false);
  const [vol, setVol] = useState(70);
  const [muted, setMuted] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [loop, setLoop] = useState(false);
  const [ytReady, setYtReady] = useState(false);
  const playerRef = useRef(null);

  const [devoteeCount, setDevoteeCount] = useState(8921);
  const devoteeCountedRef = useRef(false);
  useEffect(() => {
    if (devoteeCountedRef.current) return; // guard against React StrictMode's double-invoke in dev
    devoteeCountedRef.current = true;
    fetch('/api/devotees', { method: 'POST' })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => { if (data && typeof data.count === 'number') setDevoteeCount(data.count); })
      .catch(() => {});
  }, []);

  const [viewport, setViewport] = useState(() => ({
    vw: typeof window !== 'undefined' ? window.innerWidth : 1440,
    vh: typeof window !== 'undefined' ? window.innerHeight : 900,
  }));

  const ph = resolvePhase(override, now);
  const q = resolveQueue(pinned, ph.key);
  const song = q[Math.min(i, q.length - 1)] || SONGS[0];

  // Reads latest queue/loop/shuffle via a ref so the YouTube event handler
  // (registered once) always sees current values without being re-bound.
  const stateRef = useRef();
  stateRef.current = { q, i, loop, shuffle };

  function advance() {
    const cur = stateRef.current;
    setI((v) => (cur.shuffle ? Math.floor(Math.random() * cur.q.length) : (v + 1) % cur.q.length));
    setT(0);
  }

  // Load the YouTube IFrame API once and create a hidden player.
  const playerCreatedRef = useRef(false);
  useEffect(() => {
    if (playerCreatedRef.current) return; // guard against React StrictMode's double-invoke in dev
    playerCreatedRef.current = true;
    function createPlayer() {
      playerRef.current = new window.YT.Player('yt-audio-player', {
        height: '0', width: '0',
        playerVars: { autoplay: 0, controls: 0, disablekb: 1, playsinline: 1 },
        events: {
          onReady: () => setYtReady(true),
          onStateChange: (e) => {
            if (e.data === window.YT.PlayerState.ENDED) {
              if (stateRef.current.loop) {
                playerRef.current.seekTo(0, true);
                playerRef.current.playVideo();
              } else {
                advance();
                setPlaying(true);
              }
            }
          },
        },
      });
    }
    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      const prevCb = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { prevCb && prevCb(); createPlayer(); };
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }
  }, []);

  // Clock tick, plus polling the real player for elapsed time / duration
  // (the YouTube API pushes state changes but not a running clock).
  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
      const p = playerRef.current;
      if (!ytReady || !p || typeof p.getCurrentTime !== 'function') return;
      setT(p.getCurrentTime() || 0);
      setRealDuration(p.getDuration() || 0);
    }, 250);
    return () => clearInterval(id);
  }, [ytReady]);

  // Swap the loaded video whenever the current song changes.
  useEffect(() => {
    const p = playerRef.current;
    if (!ytReady || !p || !song.yt || typeof p.cueVideoById !== 'function') return;
    if (playing) p.loadVideoById(song.yt);
    else p.cueVideoById(song.yt);
    setRealDuration(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [song.id, ytReady]);

  // Play/pause the current video when the user toggles playback.
  useEffect(() => {
    const p = playerRef.current;
    if (!ytReady || !p || typeof p.playVideo !== 'function') return;
    if (playing) p.playVideo();
    else p.pauseVideo();
  }, [playing, ytReady]);

  // Keep the player's volume in sync.
  useEffect(() => {
    const p = playerRef.current;
    if (!ytReady || !p || typeof p.setVolume !== 'function') return;
    p.setVolume(muted ? 0 : vol);
  }, [vol, muted, ytReady]);

  useEffect(() => {
    const onResize = () => setViewport({ vw: window.innerWidth, vh: window.innerHeight });
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  function goPage(next) {
    setPage(next);
    setMenuOpen(false);
    setTopic(null);
    requestAnimationFrame(() => {
      const p = document.querySelector('[data-page-scroll]');
      if (p) p.scrollTop = 0;
    });
  }

  const onHome = page === 'home';
  const activeTopic = topic ? TOPICS[topic] : null;

  const { vw, vh } = viewport;
  const img = IMG_SIZE[ph.img] || IMG_SIZE.night;
  const boxW = vw * 1.04, boxH = vh * 1.04, ox = -vw * 0.02, oy = -vh * 0.02;
  const k = Math.max(boxW / img.w, boxH / img.h);
  const dw = img.w * k, dh = img.h * k;
  const px = (fx) => Math.round(ox + (boxW - dw) / 2 + fx * dw) + 'px';
  const py = (fy) => Math.round(oy + (boxH - dh) / 2 + fy * dh) + 'px';

  const roomForPins = vw >= 900 && vh >= 520;
  const roomForDhol = vw >= 1020 && vh >= 660;
  const narrow = vw < 720;
  const mid = vw < 860;

  const hotspots = onHome && roomForPins
    ? [
        ...PINS.filter((p) => !p.minVh || vh >= p.minVh).map((p) => ({
          key: p.k,
          x: px(p.fx), y: py(p.fy), label: TOPICS[p.k].label,
          open: () => setTopic(p.k),
        })),
        ...(ph.key === 'morning' && roomForDhol
          ? [{ key: 'dhol', x: px(0.19), y: py(0.755), label: TOPICS.dhol.label, open: () => setTopic('dhol') }]
          : []),
      ]
    : [];

  const stageLayers = PHASES.map((p) => {
    const active = p.key === ph.key;
    return {
      key: p.key,
      image: `url(/assets/${STAGE_IMAGE[p.img]})`,
      pos: p.bgPos || '50% 50%',
      opacity: active ? 1 : 0,
      filter: onHome ? p.filter : `${p.filter === 'none' ? '' : p.filter} blur(9px) saturate(.7) brightness(.42)`,
      scale: onHome ? (active ? 1 : 1.015) : 1.04,
    };
  });

  const value = {
    now, ph, q, song, page, onHome, menuOpen, topic, activeTopic,
    playing, t, i, pinned, vol: muted ? 0 : vol, muted, shuffle, loop,
    vw, vh, narrow, mid,

    clock: ((now.getHours() % 12) || 12) + ':' + String(now.getMinutes()).padStart(2, '0') + (now.getHours() < 12 ? 'am' : 'pm'),
    devotees: devoteeCount.toLocaleString('en-US'),
    pillOpacity: onHome ? 1 : 0.55,

    headerPad: narrow ? '12px 12px' : '16px clamp(14px,2.2vw,26px)',
    headerCols: mid ? 'minmax(0,1fr) auto' : 'minmax(0,1fr) auto minmax(0,1fr)',
    centreCol: narrow ? '1 / -1' : '2',
    centreRow: mid ? '2' : '1',
    centreJustify: mid ? 'start' : 'center',
    rightCol: mid ? '2' : '3',
    overlayTop: mid ? '124px' : '78px',
    centreCreditDisplay: mid ? 'inline-flex' : 'none',
    festivalDisplay: vw < 430 ? 'none' : 'inline',
    creditDisplay: mid ? 'none' : 'flex',
    rightPillPad: mid ? '0 6px' : '0 10px 0 14px',

    playerCols: narrow ? 'minmax(0,1fr)' : 'minmax(140px,1fr) auto',
    playerRowGap: narrow ? '12px' : '6px',
    playerPad: narrow ? '13px 16px 12px' : '15px 24px 13px',
    artSize: narrow ? '44px' : '54px',
    nowTitleSize: narrow ? '18px' : '21px',
    transportJustify: narrow ? 'center' : 'flex-start',
    extraCtlDisplay: narrow ? 'none' : 'flex',
    volumeDisplay: mid ? 'none' : 'block',
    noteDisplay: mid ? 'none' : 'block',
    noteCol: narrow ? '1' : '2',
    noteJustify: narrow ? 'center' : 'end',

    heroRight: narrow ? 'clamp(18px,4.5vw,72px)' : 'auto',
    heroBottom: narrow ? 'max(196px,26vh)' : 'max(150px,18vh)',
    heroMaxH: narrow ? 'calc(100vh - 290px)' : 'calc(100vh - 240px)',
    playerFilter: onHome ? 'blur(0px)' : 'blur(8px) saturate(.75) brightness(.55)',
    playerOpacity: onHome ? 1 : 0.5,
    playerZIndex: onHome ? 45 : 30,
    playerEvents: onHome ? 'auto' : 'none',

    tint: ph.tint,
    stageLayers,
    vignetteOpacity: onHome ? (ph.light ? 0.4 : 0.35) : 1,
    topScrim: ph.light
      ? 'linear-gradient(rgba(6,6,10,.72),rgba(6,6,10,.34) 16%,rgba(6,6,10,.1) 30%,transparent 42%)'
      : 'linear-gradient(rgba(6,8,14,.6),rgba(6,8,14,.14) 22%,transparent 40%)',
    leftScrim: onHome ? (ph.light ? 0.62 : 0.14) : 0,
    bottomScrim: onHome ? (ph.light ? 1 : 0.45) : 0.35,
    sceneFx: onHome ? 1 : 0,
    homeOpacity: onHome ? 1 : 0,

    phaseOptions: PHASES.map((p) => ({ key: p.key, label: p.label })),
    phaseValue: override || 'auto',
    setPhase: (val) => setOverride(val === 'auto' ? null : val),

    hotspots,
    topicEyebrow: activeTopic ? activeTopic.eyebrow : '',
    topicTitle: activeTopic ? activeTopic.title : '',
    topicBody: activeTopic ? activeTopic.body : [],
    panelOpacity: activeTopic ? 1 : 0,
    panelEvents: activeTopic ? 'auto' : 'none',
    panelSlide: activeTopic ? '0px' : '24px',
    closePanel: () => setTopic(null),

    isMusic: page === 'music', isStory: page === 'story', isAbout: page === 'about',
    pageOpacity: onHome ? 0 : 1,
    pageEvents: onHome ? 'none' : 'auto',
    pageY: onHome ? '14px' : '0px',
    pageKicker: page === 'music' ? ph.label + ' set' : page === 'story' ? 'Ganesh Chaturthi' : 'This website',
    goHome: () => goPage('home'),
    goMusic: () => goPage('music'),
    goStory: () => goPage('story'),
    goAbout: () => goPage('about'),
    goPage,

    navX: menuOpen ? '0%' : '100%',
    toggleMenu: () => setMenuOpen((v) => !v),
    closeMenu: () => setMenuOpen(false),

    musicLede: pinned
      ? 'You picked this one yourself, so the clock has stopped choosing. Anything below can be played now.'
      : `The ${ph.label.toLowerCase()} set is playing — ${ph.moods ? ph.moods.join(', ') : 'chosen for this hour'}. Anything below can be played now.`,
    pinnedDisplay: pinned ? 'block' : 'none',
    followClock: () => { setPinned(false); setI(0); setT(0); },
    groups: PHASES.map((p) => ({
      key: p.key,
      label: p.label,
      range: `${p.from}:00 – ${p.to}:00`,
      color: p.key === ph.key ? '#E9A93C' : 'rgba(242,227,198,.62)',
      songs: SONGS.filter((x) => x.times.includes(p.key)).map((x) => ({
        id: x.id, title: x.title, artist: x.artist, moods: x.moods.join(' · '), len: fmt(x.dur),
        art: artGrad(x.art),
        active: x.id === song.id,
        play: () => {
          setPinned(true);
          setI(SONGS.findIndex((y) => y.id === x.id));
          setT(0);
          setPlaying(true);
        },
      })),
    })),

    nowTitle: song.title, nowArtist: song.artist, nowArt: artGrad(song.art),
    progress: (t / (realDuration || song.dur) * 100).toFixed(2) + '%',
    elapsed: fmt(t), duration: fmt(realDuration || song.dur),
    shuffleColor: shuffle ? '#E0662A' : 'rgba(242,227,198,.75)',
    loopColor: loop ? '#E0662A' : 'rgba(242,227,198,.75)',
    togglePlay: () => setPlaying((v) => !v),
    prev: () => {
      if (t > 4) {
        setT(0);
        if (playerRef.current) playerRef.current.seekTo(0, true);
        return;
      }
      setI((v) => (v - 1 + q.length) % q.length);
      setT(0);
    },
    next: advance,
    toggleShuffle: () => setShuffle((v) => !v),
    toggleLoop: () => setLoop((v) => !v),
    toggleMute: () => setMuted((v) => !v),
    setVolume: (val) => { setVol(val); setMuted(false); },
    seek: (ratio) => {
      const nt = Math.max(0, Math.min(1, ratio)) * (realDuration || song.dur);
      setT(nt);
      if (playerRef.current) playerRef.current.seekTo(nt, true);
    },
  };

  return (
    <AppContext.Provider value={value}>
      {children}
      <div id="yt-audio-player" style={{ position: 'fixed', width: 1, height: 1, left: -9999, top: -9999, overflow: 'hidden' }} />
    </AppContext.Provider>
  );
}
