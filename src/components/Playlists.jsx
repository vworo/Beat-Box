import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Playlists() {
    const [displaySongs, setDisplaySongs] = useState([]);
    const { state } = useLocation();

    useEffect(() => {
        const loadSongs = (token) => {
            axios
                .get(`https://api.spotify.com/v1/playlists/${state.displayPlaylist.id}/tracks`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    setDisplaySongs(response.data.items);
                })
                .catch((error) => {
                    console.log("Error retrieving playlist songs:", error);
                });
        };

        if (state && state.token && state.displayPlaylist) {
            loadSongs(state.token);
        }
    }, [state]);

    if (state && state.displayPlaylist) {
        return (
            <div id="playlistSongs">
                <h1>{state.displayPlaylist.name}</h1>
                <ul>
                    {displaySongs.map((item, index) => (
                        <li key={index}>
                            <button>
                                <span>{item.track.name}</span> -{" "}
                                {item.track.artists.map((artist, artistIndex) => (
                                    <span key={artistIndex}>{artist.name}</span>
                                ))}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return <div>There is no playlist.</div>;
    }
}
