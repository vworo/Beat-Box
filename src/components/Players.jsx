import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStateProvider } from './StateProvider';

export default function Players() {
  const [{ token, dispatch }] = useStateProvider();
  const [song, setSong] = useState(null);

  useEffect(() => {
    const getPlaylistData = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: {
            Authorization: `Bearer ${props.token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log(response);
        setSong(response.data);
      } catch (error) {
        console.error('Error fetching currently playing song:', error);
      }
    };
    getPlaylistData();
  }, [token, dispatch]);

  return (
    <div>
      {song ? (
        <div>
          <h3>Now Playing:</h3>
          <p>
            {song.item.name} - {song.item.artists.map(artist => artist.name).join(', ')}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
