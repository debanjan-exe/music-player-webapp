import React from 'react'

const LibrarySong = ({ 
        song, 
        songs, 
        setCurrentSong, 
        audioRef, 
        isPlaying, 
        setSongs
    }) => {

    const songSelectHandler = async () => {
        // const selectedSong = songs.filter((state) => state.id === song.id);
        // console.log(selectedSong);
        await setCurrentSong(song);
        //Add active state
        const newSongs = songs.map((s) => {
            if(s.id === song.id){
                return{...s, active : true}
            }else{
                return{...s, active : false}
            }
        })
        setSongs(newSongs);
        //check if the song is playing or not
        if(isPlaying) audioRef.current.play();
    }
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? "selected" : ""}`}>
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong
