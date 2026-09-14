import React from 'react';
import { AppStateProvider } from './state/AppState.jsx';
import Scene from './components/Scene.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import DiscoveryPanel from './components/DiscoveryPanel.jsx';
import Pages from './components/Pages.jsx';
import Nav from './components/Nav.jsx';
import Cursor from './components/Cursor.jsx';
import Player from './components/Player.jsx';

export default function App() {
  return (
    <AppStateProvider>
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', background: '#0A0D18' }}>
        <Scene />
        <Header />
        <Home />
        <DiscoveryPanel />
        <Pages />
        <Nav />
        <Cursor />
        <Player />
      </div>
    </AppStateProvider>
  );
}
