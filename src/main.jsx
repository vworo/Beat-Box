import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Search from "./components/Search";
import App from "./App";
import Playlists from "./components/Playlists";
import Categories from "./components/Categories";


console.log("You are at the following location:", window.location);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Categories />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "playlist",
        element: <Playlists />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
