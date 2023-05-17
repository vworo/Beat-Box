import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Searcher = (props) => {
  const [searchKey, setSearchKey] = useState("");
  const [results, setResults] = useState({});

  const search = async () => {
    if (searchKey.length > 0) {
      const data = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${props.token}`
        },
        params: {
          q: searchKey,
          type: "track,album,artist,playlist"
        }
      });

      setResults(data.data);
    } else {
      setResults({});
      
    }
  };

  return (
    <>
      <div className="SearchForm">
        <input
          className="Name"
          type="text"
          placeholder="Search ..."
          onChange={(e) => {
            setSearchKey(e.target.value);
            search();
          }}
        />
      </div>
      {results.tracks && (
        <div>
          <h2>Tracks</h2>
          {results.tracks.items.slice(0, 5).map(track => (
            <div key={track.id} className="Track" onClick={() => handlePlay(track.uri)}>
              <div className="Track-title">{track.name}</div>
              <div className="Track-artist">{track.artists[0].name}</div>
              <div className="Track-album">{track.album.name}</div>
            </div>
          ))}
        </div>
      )}
      {results.albums && (
        <div>
          <h2>Albums</h2>
          {results.albums.items.slice(0, 5).map(album => (
            <div key={album.id} className="Album">
              <div className="Album-name">{album.name}</div>
              <div className="Album-artist">{album.artists[0].name}</div>
            </div>
          ))}
        </div>
      )}
      {results.artists && (
        <div>
          <h2>Artists</h2>
          {results.artists.items.slice(0, 5).map(artist => (
            <div key={artist.id} className="Artist">
              <div className="Artist-name">{artist.name}</div>
            </div>
          ))}
        </div>
      )}
      {results.playlists && (
        <div>
          <h2>Playlists</h2>
          {results.playlists.items.slice(0, 5).map(playlist => (
            <div key={playlist.id} className="Playlist">
              <div className="Playlist-name">{playlist.name}</div>
              <div className="Playlist-owner">{playlist.owner.display_name}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}


export default Searcher;

// const handlePlay = (uri) => {
// // This function will handle playing the selected track
// // You can call your player component here and pass the uri of the selected track as a prop
// return <Players uri={uri} />;
// }
