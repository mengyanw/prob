import React from "react";
import "./App.less";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  
  return (
    <>
      <header>PROB</header>
      <main className="music-player-container">
        <MusicPlayer />
      </main>
      <footer>
        <p>&copy; Designed & Coded by Mengyan Wu</p>
      </footer>
    </>
  );
}

export default App;
