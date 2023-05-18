import { useState, useEffect } from 'react';
import NavigationSidebar from "./components/NavigationSidebar";
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Footer';
import { Outlet, Link } from "react-router-dom";
import React from "react";
import axios from 'axios';
import Searcher from "./components/Searcher";
import NavigationTopbar from './components/NavigationTopbar';
import Playlists from "./components/Playlists";
import WebPlayback from './components/WebPlayback';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SpotifySDK from './components/SpotifySDK'

// Spotify OAuth URLs/redirects
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// const client_id = 'db3fb3b60f7c44cf843733eb2c0976bf';
// const redirect_uri = 'http://localhost:5173';
// let server_url = 'https://accounts.spotify.com/authorize';
// server_url += '?response_type=token'; // token maybe replaced with code
// server_url += '&client_id=' + encodeURIComponent(client_id);
// server_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
// const placeHolder = '&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';
// server_url += placeHolder;

const code = new URLSearchParams(window.location.search).get('code')
console.log(code);

/*
function App () {
  return code ? <Dashboard code={code} /> : <NavigationTopBar />
}
*/

// function App() {

//   // Create usestate to keep track of token across all components within App, use token in subsequent calls
//   const [accessToken, setAccessToken] = useState(null);
//   const [displayPlaylists, setDisplayPlaylists] = useState([]);

//   const [searchResults, setSearchResults] = useState([]);
//   const [currentPlaylist, setCurrentPlaylist] = useState(null);
//   // Changes current URL the server_url where user will login to Spotify
//   const authorize = () => {
//     window.location.href = server_url;
//   };

//   const getPlaylists = (token) => {
//     axios.get('https://api.spotify.com/v1/me/playlists',
//       {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then((response) => {
//         // set displayPlaylists to response items 
//         setDisplayPlaylists(response.data.items);
//         console.log(displayPlaylists)
//       })
//   };
  
//   const loadPlaylist = (playlist) => {
//     setCurrentPlaylist(playlist);
//   }


//   // Add this effect to extract the token from the URL after the user is redirected back to the app
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.hash.substr(1));
//     const token = params.get('access_token');
//     if (token) {
//       setAccessToken(token);
//       getPlaylists(token);
//     }
//   }, []);

function App () {
  const [accessToken, setAccessToken] = useState(null);
  const [displayPlaylists, setDisplayPlaylists] = useState([]);

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

  if (code) {
    console.log(code)
    return (
      <React.Fragment>

      <NavigationSidebar playlists={ displayPlaylists } onPlaylistClicked={ loadPlaylist } token={ accessToken }/>
      <div id="container">
        <div id="detail">
          <header>
          {/* <NavigationTopbar authorize={ authorize } token={ accessToken }/> */}
          </header>
          <Outlet displayPlaylist={ currentPlaylist } />
          <Dashboard code={code} />
        </div>

      </div>
      {/* <SpotifySDK accessToken={ accessToken } trackUri={playingTrack?.uri} /> */}
      {/* <Footer /> */}

    </React.Fragment>
    
    )
  }
  else  {
    console.log(code)
    return ( 
      <React.Fragment>

      <NavigationSidebar playlists={ displayPlaylists } onPlaylistClicked={ loadPlaylist } token={ accessToken }/>
      <div id="container">
        <div id="detail">
          <header>
          <Login />
          {/* <NavigationTopbar authorize={ authorize } token={ accessToken }/> */}
          </header>
          <Outlet displayPlaylist={ currentPlaylist } />
        </div>

      </div>
      
      {/* <Footer /> */}

    </React.Fragment>
    
    )
  }

  return (
    <React.Fragment>

      {/* <NavigationSidebar playlists={ displayPlaylists } onPlaylistClicked={ loadPlaylist } token={ accessToken }/> */}
      code ? <Dashboard code={code} /> : <NavigationTopBar />
      <div id="container">
        <div id="detail">
          <header>
          <NavigationTopbar authorize={ authorize } token={ accessToken }/>
          </header>
          <Outlet displayPlaylist={ currentPlaylist } />
        </div>

      </div>
      
      <Footer />

    </React.Fragment>
  )
}

export default App

// client id : db3fb3b60f7c44cf843733eb2c0976bf