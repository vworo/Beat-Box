import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Root from "./Root";

console.log("You are at the following location:", window.location);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
