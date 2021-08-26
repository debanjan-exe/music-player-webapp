import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
        faPlayCircle, 
        faPauseCircle, 
        faCaretRight, 
        faCaretLeft 
    } from '@fortawesome/free-solid-svg-icons'
// import Song from './Song'

const Player = ({
        audioRef, 
        currentSong, 
        isPlaying, 
        setIsPlaying, 
        songs, 
        setSongInfo, 
        songInfo, 
        setCurrentSong,
        setSongs
    }) => {

    //states
    

    //event-handers
    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((s) => {
            if(s.id === nextPrev.id){
                return{...s, active : true}
            }else{
                return{...s, active : false}
            }
        })
        setSongs(newSongs);
    }

    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    const skipTrackHandler = async(direction) => {
        let currentIndex = songs.findIndex((s) => s.id === currentSong.id );
        if(direction === "skip-forward"){
            await setCurrentSong(songs[(currentIndex+1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex+1) % songs.length]);
        }

        if(direction === "skip-back"){
            if((currentIndex - 1) % songs.length === -1){
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                if(isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex-1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex-1) % songs.length]);
        }

        if(isPlaying) audioRef.current.play();
    }

    const trackAnimation = {
        transform : `translateX(${songInfo.animationPercentage}%)`
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
                    <input 
                        min={0} 
                        max={songInfo.duration || 0} 
                        value={songInfo.currentTime} 
                        onChange={dragHandler}
                        type="range" 
                    />
                    <div style={trackAnimation} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon 
                size = "2x" 
                onClick={() => {skipTrackHandler("skip-back")}} 
                className="skip-back" 
                icon={faCaretLeft}/>
                
                <FontAwesomeIcon 
                size = "2x" 
                onClick={playSongHandler} 
                className="play" 
                icon={isPlaying ? faPauseCircle : faPlayCircle}/>
                
                <FontAwesomeIcon 
                size = "2x" 
                onClick={() => {skipTrackHandler("skip-forward")}} 
                className="skip-forward" 
                icon={faCaretRight}/>
            </div>
            
        </div>
    )
}

export default Player
