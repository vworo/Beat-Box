import React, { useEffect, useState } from 'react';

function SpotifySDK(props) {

  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // Load the Spotify Web Playback SDK script
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    // Callback fired when the Spotify Web Playback SDK is ready
    window.onSpotifyWebPlaybackSDKReady = () => {
      // Create a new instance of Spotify player
      const newPlayer = new window.Spotify.Player({
        name: 'My Spotify Player',
        getOAuthToken: cb => { cb(props.token) },
        volume: 0.5
      });
          // Call a function to retrieve and provide a valid Spotify access token
          // This function should handle obtaining the access token from your backend
          // and pass it to the callback (cb) function.
          // Make sure you have a valid access token before calling cb.

      // });

      // Store the player instance in the state
      setPlayer(newPlayer);

      // Connect to the Spotify player
      newPlayer.connect();
    };
  }, []);

  useEffect(() => {
    // After the player is set, you can add listeners for player events
    if (player) {
      // Ready event: called when the player is ready to play music
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      // Not Ready event: called when the player goes offline
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });
    }
  }, [player]);

  return <div>Spotify Player</div>;
}

export default SpotifySDK;
