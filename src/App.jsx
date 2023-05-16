import { useState, useEffect } from 'react';
import NavigationSidebar from "./components/NavigationSidebar";
import Footer from './components/Footer';
import { Outlet, Link } from "react-router-dom";
import React from "react";
import axios from 'axios';
import Searcher from "./components/Searcher";
import NavigationTopbar from './components/NavigationTopbar';
import Playlists from "./components/Playlists";
import WebPlayback from './components/WebPlayback';

// Spotify OAuth URLs/redirects
// import { BrowserRouter, Routes, Route } from "react-router-dom";
const client_id = 'db3fb3b60f7c44cf843733eb2c0976bf';
const redirect_uri = 'http://localhost:5173';
let server_url = 'https://accounts.spotify.com/authorize';
server_url += '?response_type=token';
server_url += '&client_id=' + encodeURIComponent(client_id);
server_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

function App() {

  // Create usestate to keep track of token across all components within App, use token in subsequent calls
  const [accessToken, setAccessToken] = useState(null);

  const [displayPlaylists, setDisplayPlaylists] = useState([]);

  // Changes current URL the server_url where user will login to Spotify
  const authorize = () => {
    window.location.href = server_url;
  };

  const getPlaylist = (token) => {
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


  

  // Add this effect to extract the token from the URL after the user is redirected back to the app
  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.substr(1));
    const token = params.get('access_token');
    if (token) {
      setAccessToken(token);
      getPlaylist(token);
    }
  }, []);

  return (
    <React.Fragment>

      <NavigationSidebar playlists={ displayPlaylists } />

      <div id="container">

        <NavigationTopbar authorize={ authorize } token={ accessToken }/>

        <div id="detail">
          <NavigationTopbar authorize={ authorize } token={ accessToken }/>
          <Playlists />
          <WebPlayback />
          <Outlet />

        </div>

      </div>
      
      <Footer />

    </React.Fragment>
  )
}

export default App

// client id : db3fb3b60f7c44cf843733eb2c0976bf