import React from "react";
import "./MusicInfo.css"

const MusicInfo = ({ musicName, artist }) => {
  return (
    <div>
      <p className="music-name">{musicName}</p>
      <p className="artist">{artist}</p>
    </div>
  );
};

export default MusicInfo;
