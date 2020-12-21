import React, { useState, useRef } from "react";
//Adding componenets
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//util
import data from "./data";
//styles
import "./styles/App.scss";
function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef: any = useRef();
  const timeUpdateHandler = (e: any) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate percentage
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
    });
  };
  const autoPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  const skipTrackHandler = (direction: any) => {
    let currentIndex = songs.findIndex(
      (song: any) => song.id === currentSong.id
    );
    if (direction === "back") {
      if (currentIndex !== 0) {
        setCurrentSong(songs[currentIndex - 1]);
      }
    } else {
      if (currentIndex !== songs.length - 1)
        setCurrentSong(songs[currentIndex + 1]);
    }
  };
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [color, setColor] = useState(false);
  const colorSwitcher = () => {
    setColor(!color);
    if (color === false) {
      {
        document.body.style.backgroundColor = "rgb(27, 27, 27)";
      }
    } else {
      document.body.style.backgroundColor = "rgb(239, 239, 253)";

      console.log(document.getElementById("dark")?.style.color);
    }
  };
  return (
    <div className="App" id={color ? "dark" : ""}>
      <Nav
        color={color}
        setColor={setColor}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        colorSwitcher={colorSwitcher}
      />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        skipTrackHandler={skipTrackHandler}
        songs={songs}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
      />
      <Library
        libraryStatus={libraryStatus}
        songs={songs}
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        IsPlaying={isPlaying}
      />
      <audio
        onLoadedData={autoPlayHandler}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={() => skipTrackHandler("skip-forward")}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
