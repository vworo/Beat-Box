import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStateProvider } from './StateProvider';

function Playlist({ name, description, imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Players() {
  const [{ token }] = useStateProvider();
  const [song, setSong] = useState(null);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const getPlaylistData = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: {
            Authorization: `Bearer ${props.token}`,
            'Content-Type': 'application/json',
          },
        });
        setSong(response.data);
      } catch (error) {
        console.error('Error fetching currently playing song:', error);
      }
    };
    getPlaylistData();

    const getPlaylistsData = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization: `Bearer ${props.token}`,
            'Content-Type': 'application/json',
          },
        });
        setPlaylists(response.data.items);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };
    getPlaylistsData();
  }, [props.token]);

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

      <h3>Playlists:</h3>
      <div>
        {playlists.map((playlist) => (
          <Playlist
            key={playlist.id}
            name={playlist.name}
            description={playlist.description}
            imageUrl={playlist.images[0]?.url} // Use optional chaining to avoid errors if the playlist has no images
          />
        ))}
      </div>
    </div>
  );
}
