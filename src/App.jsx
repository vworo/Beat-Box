import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const client_id = "db3fb3b60f7c44cf843733eb2c0976bf";
const redirect_uri = "http://localhost:5173";
let SERVER_URL = "https://accounts.spotify.com/authorize";
SERVER_URL += "?response_type=token";
SERVER_URL += "&client_id=" + encodeURIComponent(client_id);
SERVER_URL += "&redirect_uri=" + encodeURIComponent(redirect_uri);

function App() {
  const authorize = () => {
    axios(SERVER_URL).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authorize={authorize} />} />
          {/* We can Add more routes here yurrrrrrrr*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
