import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function NavigationSidebar() {
  return (
    <div id="sidebar">
      <h1>Spotify</h1>
      <nav>
        <ul>
          <li>
            <Link to={'/home'}>Home</Link>
          </li>
          <li className="link-border">
            <Link to={'/home'}>Search</Link>
          </li>
          <h2 className="library">Your Library</h2>
          <li>
            <Link to={'/app'}>Liked Songs</Link>
          </li>
          <li>
            <Link to={'/home'}>Playlist 1</Link>
          </li>
          <li>
            <Link to={'/home'}>Playlist 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
