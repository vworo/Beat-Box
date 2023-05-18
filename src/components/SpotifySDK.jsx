import React, { useState, useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback'

export default function SpotifySDK({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false)
  // const [is_paused, setPaused] = useState(false);
  // const [is_active, setActive] = useState(false);
  // const [current_track, setTrack] = useState(track);



  useEffect(() => setPlay(true), [trackUri])
  
  if (!accessToken) return null
  return (
    <div>
    <SpotifyPlayer
    token={ accessToken }
    showSaveIcon
    callback={state => {
      if (!state.isPlaying) setPlay(false)
    }}
    play={play}
    uris={ trackUri ? [trackUri] : []} 
    styles={{
      activeColor: '#fff',
      bgColor: 'black',
      color: '#fff',
      loaderColor: '#fff',
      sliderColor: '#1cb954',
      trackArtistColor: '#ccc',
      trackNameColor: '#fff',
    }}
    />
    </div>
  )
}