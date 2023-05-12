import axios from "axios";
import { useState, useEffect } from 'react'

// Spotify OAuth URLs/redirects
const client_id = 'db3fb3b60f7c44cf843733eb2c0976bf';
const client_secret = 'cdfb228fe09841ef863840d271a8d739';
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

  // Call api to get token
  const getToken = () => {

    // Create URL for axios with the relevant headers and client data
    const url = 'https://accounts.spotify.com/api/token';
    const data = 'grant_type=client_credentials';
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
      }
    };

    // Make request to server with above data
    axios.post(url, data, config)
    .then((response) => {
      setAccessToken(response.data.access_token);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // ??? Not sure but correctly updates the usestate 
  //TODO: Check why this is executing twice upon page load
  useEffect(() => {
    console.log('Access token changed:', accessToken);
  }, [accessToken]);

  return (
    <div>
      <button onClick={ authorize }>Login</button>
      <button onClick={ getToken }>Get Token</button>
    </div>
  )
}

export default App

// client id : db3fb3b60f7c44cf843733eb2c0976bf
// client secret: cdfb228fe09841ef863840d271a8d739