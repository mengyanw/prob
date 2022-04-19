import React from "react";
import "./App.less";
import MusicPlayer from "./components/MusicPlayer";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

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
      {/* <Footer>
       <p>&copy; Designed & Coded by Mengyan Wu</p> 
      </Footer> */}
    </>
  );
}

export default App;
