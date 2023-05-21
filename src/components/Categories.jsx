import React, { useEffect, useState } from 'react';
import { useOutletContext } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";
const Categories = () => {
    const { accessToken } = useOutletContext();
    const [trendingPlaylists, setTrendingPlaylists] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {

                // Make an HTTP GET request to retrieve featured playlists (toplists)
                const featuredPlaylistsResponse = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    },
                    params: {
                        limit: 50,
                        offset: 0,
                        country: 'AU'
                    }

                }
                );

                // Extract the trending playlists from the response data
                const trendingPlaylists = featuredPlaylistsResponse.data.playlists.items;

                // Fetch 5 tracks for each playlist
                const playlistsWithTracks = await Promise.all(trendingPlaylists.map(async (playlist) => {
                    const playlistTracksResponse = await axios.get(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        },
                        params: {
                            limit: 50
                        }
                    });

                    // Extract the tracks from the response data
                    const playlistTracks = playlistTracksResponse.data.items;

                    // Return the playlist object with its tracks
                    return {
                        ...playlist,
                        tracks: playlistTracks
                    };
                }));

                // Set the trending playlists with tracks in state
                setTrendingPlaylists(playlistsWithTracks);
            } catch (error) {
                console.error(`Error retrieving trending playlists: ${error.message}`);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className='header'>
                <h1>Trending Playlists</h1>
            </div>

                <div className="trendingList">
                    {trendingPlaylists.map(playlist => (
                        <div key={playlist.id}>
                            <div className="container">
                            <div className="playlist-card">
                            

                                <Link to="/playlist"
                                    state={{
                                        displayPlaylist: playlist,
                                        token: accessToken
                                    }}
                                >
                                    <img className="playlist-image" src={playlist.images[0].url} alt={playlist.name} />
                                    <span className="track-name">{playlist.name}</span>
                                </Link>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        
    );
};

export default Categories;