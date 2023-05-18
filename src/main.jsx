import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import App from "./App";
import Playlists from "./components/Playlists";
import LikedSongs from './components/LikedSongs';
import Login from './components/Login';

console.log("You are at the following location:", window.location);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "search",
        element: <Home />,
      },
      {
        path: "playlist",
        element: <Playlists />,
      },
      {
        path: "liked-songs",
        element: <LikedSongs />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
