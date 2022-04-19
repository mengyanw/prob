import React from "react";
import ReactPlayer from "react-player";
import { useState, useRef } from "react";
import CoverImage from "./CoverImage";
import ProgressBar from "./ProgressBar";
import MusicPlayerController from "./MusicPlayerController";
import "./MusicPlayer.css"

const MusicPlayer = () => {
  const musicSrc = "music/pfzl.mp3";
  const coverSrc = "music/pfzl.jpeg";
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [musicPlayed, setMusicPlayed] = useState(0);
  const [musicDuration, setMusicDuration] = useState(0);
  const ref = useRef(null);

  const onProgressHandler = process => {
    if (isSeeking === false) {
      setMusicPlayed(process.playedSeconds)
    }
  }

  return (
    <div className="music-player">
      <CoverImage coverSrc={coverSrc} /> 
      <ReactPlayer
        ref={ref}
        url={musicSrc}
        playing={isPlaying}
        loop={true} // to add state
        controls={true}
        volume={0.5}
        played={musicPlayed}
        width="100%"
        height="100%"
        onProgress={onProgressHandler}
        onDuration={(duration) => setMusicDuration(duration)}
      />
      <ProgressBar 
        ref={ref}
        min={0}
        max={musicDuration}
        musicPlayed={musicPlayed}
        setMusicPlayed={setMusicPlayed}
        setIsSeeking={setIsSeeking}
      />
      <MusicPlayerController 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};

export default MusicPlayer;
