import React, {useRef, useState } from 'react'
import './styles/App.scss';
//Adding Cmponents
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';

//Importing Utils
import data from "./data";

function App() {
  //ref
  const audioRef = useRef(null);

  //States
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
      currentTime: 0,
      duration: 0,
      animationPercentage:0
  })

  //event-handlers
  const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      // calculate percentage
      const roundedCurrent = Math.round(current);
      const roundedDuration = Math.round(duration);
      const animation = Math.round((roundedCurrent / roundedDuration) * 100)

      setSongInfo({
        ...songInfo, 
        currentTime: current, 
        duration, 
        animationPercentage: animation
      })
  }

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((s) => s.id === currentSong.id );
    await setCurrentSong(songs[(currentIndex+1) % songs.length])
    if(isPlaying) audioRef.current.play();
  }

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song currentSong={currentSong}/>
      <Player 
        audioRef={audioRef} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs} 
        setSongs={setSongs}
      />
      <Library 
        audioRef={audioRef}
        songs={songs} 
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio 
          onEnded={songEndHandler}
          onTimeUpdate={timeUpdateHandler} 
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef} 
          src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
