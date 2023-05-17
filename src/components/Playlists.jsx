import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Playlists(props) {
    const [displaySongs, setDisplaySongs] = useState([]);
    const { state } = useLocation();

    useEffect(() => {
        const loadSongs = (token) => {
            axios.get("https://api.spotify.com/v1/playlists/4vaOiY36ujveTzcRGa9u5b/tracks",
                {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    setDisplaySongs(response.data);
                });
        };

        if (state) {
            loadSongs(state.token);
        }
    }, [state?.token]);

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
                                <span>{item.track.name}</span> - <span>{item.track.artists[0].name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </li>
        ));

    if (state && state.displayPlaylist) {
        return (
            <div>
                <h1>{state.displayPlaylist.name}</h1>
            </div>
        );
    } else {
        return <div>There is no playlist.</div>;
    }
}
