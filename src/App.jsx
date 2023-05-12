// import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react'

const client_id = 'db3fb3b60f7c44cf843733eb2c0976bf';
const redirect_uri = 'http://localhost:5173';
let server_url = 'https://accounts.spotify.com/authorize';
server_url += '?response_type=token';
server_url += '&client_id=' + encodeURIComponent(client_id);
server_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

function App() {

  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const hash = window.location.hash;
    const token = hash.split('&')[0].split('=')[1];
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const authorize = () => {
    window.location.href = server_url;
  };

  const showToken = () => {
    const client_id = 'db3fb3b60f7c44cf843733eb2c0976bf';
    const client_secret = 'cdfb228fe09841ef863840d271a8d739';

    const url = 'https://accounts.spotify.com/api/token';
    const data = 'grant_type=client_credentials';

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
      }
    };

    axios.post(url, data, config)
    .then((response) => {
      console.log(response.data.access_token);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <button onClick={ authorize }>Login</button>
      <button onClick={ showToken }>Show Token</button>

      {/* <BrowserRouter>
        <Routes>
          <Route  />
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

export default App

// client id : db3fb3b60f7c44cf843733eb2c0976bf
// client secret: cdfb228fe09841ef863840d271a8d739