import React from "react";
import { idText } from "typescript";
import Song from "./Song";

const LibrarySong = ({
  song,
  setCurrentSong,
  currentSong,
  songs,
  id,
  isPlaying,
  audioRef,
}: any) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}
    >
      <img alt={Song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
