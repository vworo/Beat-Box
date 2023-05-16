import React from "react";
import { useEffect } from "react";

export default function Playlists(props) {
  useEffect(() => {
    console.log('props', props);
  });

  let playlistSongs =
    props.playlists &&
    props.playlists.map((playlist, i) => (
      <li id="playlistSongs" key={i}>
        <div>
          <h3>{playlist.name}</h3>
          <p>Total Tracks: {playlist.tracks.total}</p>
          <ul>
            {playlist.tracks.items.map((item, index) => (
              <li key={index}>
                <span>{item.track.name}</span> -{" "}
                <span>{item.track.artists[0].name}</span>
              </li>
            ))}
          </ul>
        </div>
      </li>
    ));

  return (
    <div>
      <ul>
        {playlistSongs}
      </ul>
    </div>
  );
};
