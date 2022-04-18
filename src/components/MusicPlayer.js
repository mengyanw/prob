import React from "react";
import ReactPlayer from "react-player";
import { useState } from "react";
import CoverImage from "./CoverImage";
import ProgressBar from "./ProgressBar";
import MusicPlayerController from "./MusicPlayerController";


const MusicPlayer = () => {
  const musicSrc = "music/pfzl.mp3";
  const coverSrc = "music/pfzl.jpeg";
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicPlayed, setMusicPlayed] = useState(0);
  return (
    <div>
      <CoverImage coverSrc={coverSrc} /> 
      <ReactPlayer
        url={musicSrc}
        playing={isPlaying}
        loop={false} // to add state
        controls={true}
        volume={0.5}
        played={musicPlayed}
        width="100%"
        height="100%"
        onProgress={(process) => setMusicPlayed(process.playedSeconds)}
        onSeek={(seconds) => {process.playedSeconds=seconds}}
        
      />
      <ProgressBar 
        musicPlayed={musicPlayed}
        setMusicPlayed={setMusicPlayed}
      />
      <MusicPlayerController 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};

export default MusicPlayer;
