import React from "react";
import ReactPlayer from "react-player";
import { useState, useRef } from "react";
import CoverImage from "./CoverImage";
import ProgressBar from "./ProgressBar";
import MusicPlayerController from "./MusicPlayerController";
import MusicInfo from "./MusicInfo";
import defaultPlayList from "../music-config";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [musicPlayed, setMusicPlayed] = useState(0);
  const [musicDuration, setMusicDuration] = useState(0);
  const [playList, setPlayList] = useState(defaultPlayList);
  const [playListIndex, setPlayListIndex] = useState(0);
  const ref = useRef(null);

  const onProgressHandler = (process) => {
    if (isSeeking === false) {
      setMusicPlayed(process.playedSeconds);
    }
  };

  const onPrevTrackHandler = () => {
    if (playListIndex == 0) {
      setPlayListIndex(playList.length - 1);
    } else {
      setPlayListIndex(playListIndex - 1);
    }
  };

  const onNextTrackHandler = () => {
    if (playListIndex == playList.length - 1) {
      setPlayListIndex(0);
    } else {
      setPlayListIndex(playListIndex + 1);
    }
  };

  return (
    <div className="music-player">
      <CoverImage 
      coverSrc={playList[playListIndex].coverSrc}
       />
      <MusicInfo
        musicName={playList[playListIndex].musicName}
        artist={playList[playListIndex].artist}
      />
      <ReactPlayer
        ref={ref}
        url={playList[playListIndex].musicSrc}
        playing={isPlaying}
        loop={false} // to add state
        volume={0.5}
        played={musicPlayed}
        width="100%"
        height="100%"
        onProgress={onProgressHandler}
        onDuration={(duration) => setMusicDuration(duration)}
        onEnded={onNextTrackHandler}
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
        onPrevTrackHandler={onPrevTrackHandler}
        onNextTrackHandler={onNextTrackHandler}
      />
    </div>
  );
};

export default MusicPlayer;
