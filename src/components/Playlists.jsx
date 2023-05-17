import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Playlists(props) {
  const [displaySongs, setDisplaySongs] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    const loadSongs = (token, playlistId) => {
      axios
        .get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setDisplaySongs(response.data.items);
        });
    };

    if (state && state.displayPlaylist) {
      loadSongs(state.token, state.displayPlaylist.id);
    }
  }, [state?.token, state?.displayPlaylist]);

  let playlistSongs =
    displaySongs &&
    displaySongs.map((item, index) => (
      <li key={index}>
        <span>{item.track.name}</span> - <span>{item.track.artists[0].name}</span>
      </li>
    ));

  if (state && state.displayPlaylist) {
    return (
      <div>
        <h1>{state.displayPlaylist.name}</h1>
        <ul>{playlistSongs}</ul>
      </div>
    );
  } else {
    return <div>There is no playlist.</div>;
  }
}
