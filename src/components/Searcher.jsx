import React, { useState } from 'react';
import axios from 'axios';


const Searcher = (props) => {
  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState({});

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

      let artistID = data.data.artists.items[0].id;

      let artistTracks = await axios.get(`https://api.spotify.com/v1/artists/${artistID}/top-tracks`, {
        headers: {
          Authorization: `Bearer ${props.token}`
        },
        params: {
          limit: 10,
          market: 'US'
        }
      });

      props.onSearchResults(artistTracks.data.tracks);

      setTracks(artistTracks.data.tracks);
    } else {
      setTracks([]);
      
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
    </>
  );
}

export default Searcher;