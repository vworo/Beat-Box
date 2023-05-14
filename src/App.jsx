import { useState, useEffect } from 'react';
import NavigationSidebar from "./components/NavigationSidebar";
import { Outlet, Link } from "react-router-dom";
import React from "react";


// Spotify OAuth URLs/redirects
const client_id = 'db3fb3b60f7c44cf843733eb2c0976bf';
const redirect_uri = 'http://localhost:5173';
let server_url = 'https://accounts.spotify.com/authorize';
server_url += '?response_type=token';
server_url += '&client_id=' + encodeURIComponent(client_id);
server_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

function App() {

  // Create usestate to keep track of token across all components within App, use token in subsequent calls
  const [accessToken, setAccessToken] = useState(null);

  // Changes current URL the server_url where user will login to Spotify
  const authorize = () => {
    window.location.href = server_url;
  };

  // Add this effect to extract the token from the URL after the user is redirected back to the app
  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.substr(1));
    const token = params.get('access_token');
    if (token) {
      setAccessToken(token);
    }
  }, []);

  return (
    <React.Fragment>
      <NavigationSidebar />

      <div id="detail">
        <div className="top-navbar">
          <button onClick={ authorize }>Login</button>
          <p>Access Token: {accessToken}</p>
        </div>
        <Outlet />
      </div>
    </React.Fragment>

  )
}

export default App

// client id : db3fb3b60f7c44cf843733eb2c0976bf