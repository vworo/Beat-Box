import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import React from "react";
import axios from 'axios';
import NavigationTopbar from './components/NavigationTopbar';
import NavigationSidebar from "./components/NavigationSidebar";
import Footer from './components/Footer';

// Spotify OAuth URLs/redirects
const client_id = 'db3fb3b60f7c44cf843733eb2c0976bf';
const redirect_uri = 'https://monumental-youtiao-1bceaf.netlify.app/search';
// const redirect_uri = 'http://localhost:5173';
let server_url = 'https://accounts.spotify.com/authorize';
server_url += '?response_type=token';
server_url += '&client_id=' + encodeURIComponent(client_id);
server_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
server_url += '&scope=streaming%20user-read-email%20user-read-private%20user-read-playback-state%20user-modify-playback-state';

function App() {

  // Create usestate to keep track of token across all components within App, use token in subsequent calls
  const [accessToken, setAccessToken] = useState(null);
  const [displayPlaylists, setDisplayPlaylists] = useState([]);
  const [songsUriList, setSongsUriList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  // Changes current URL the server_url where user will login to Spotify
  const authorize = () => {
    window.location.href = server_url;
  };

  const getPlaylists = (token) => {
    axios.get('https://api.spotify.com/v1/me/playlists',
      {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        // set displayPlaylists to response items 
        setDisplayPlaylists(response.data.items);
        console.log(displayPlaylists)
      })
  };
  
  const loadPlaylist = (playlist) => {
    setCurrentPlaylist(playlist);
  }

  const loadSongsUriList = (song) => {
    setSongsUriList([song?.track?.uri]);
  }

  const loadSongUri = (song) => {
    setSongsUriList([song?.uri]);
  }

  // Add this effect to extract the token from the URL after the user is redirected back to the app
  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.substr(1));
    const token = params.get('access_token');
    if (token) {
      setAccessToken(token);
      getPlaylists(token);
    }
  }, []);

  return (
    <React.Fragment>

      <NavigationSidebar playlists={displayPlaylists} onPlaylistClicked={loadPlaylist} token={accessToken} />

      <div id="container">

        <div id="detail">

          <NavigationTopbar authorize={ authorize } token={ accessToken } onSearchResults={ setSearchResults }/>

          <Outlet context={{ searchResults, accessToken, onSongClicked: loadSongsUriList, onSearchSongClicked: loadSongUri }} />
          
        </div>

      </div>
      
      <Footer token={accessToken} songsUriList={songsUriList} />

    </React.Fragment>
  )
}

export default App

// client id : db3fb3b60f7c44cf843733eb2c0976bf