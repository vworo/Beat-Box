import React, { useState, useEffect } from 'react';

const LikedSongs = () => {
  const [likedSongs, setLikedSongs] = useState([]);

  useEffect(() => {
    // Fetch liked songs data here
    // For example, you can call an API to get the liked songs data
    // Replace the following example data with the actual data fetched from the API
    const exampleLikedSongsData = [
      { id: 1, title: 'Song 1', artist: 'Artist 1' },
      { id: 2, title: 'Song 2', artist: 'Artist 2' },
      { id: 3, title: 'Song 3', artist: 'Artist 3' },
    ];

    setLikedSongs(exampleLikedSongsData);
  }, []);

  return (
    <div>
      <h2>Liked Songs</h2>
      <ul>
        {likedSongs.map((song) => (
          <li key={song.id}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedSongs;
