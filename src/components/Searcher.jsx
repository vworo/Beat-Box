import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Searcher = (props) => {
  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([]);

  const searchArtist = async () => {
    if (searchKey.length > 0) {
      const data = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${props.token}`
        },
        params: {
          q: searchKey,
          type: "artist"
        }
      });
      // window.location.href = "http://localhost:5173/home";
      // navigate("http://localhost:5173/home");

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
          placeholder="Search By Artist Name ..."
          onChange={(e) => {
            setSearchKey(e.target.value);
            searchArtist();
          }}
        />
      </div>
    </>
  );
}

// const handlePlay = (uri) => {
// // This function will handle playing the selected track
// // You can call your player component here and pass the uri of the selected track as a prop
// return <Players uri={uri} />;
// }

export default Searcher;
