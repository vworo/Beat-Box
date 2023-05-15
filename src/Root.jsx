import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <React.Fragment>
      <div id="sidebar">
        <nav id="topbar">
          <ul>
            <li>
              <Link to={'/home'}>Home</Link>
            </li>
            <li >
              <Link to={'/home'}>Search</Link>
            </li>
          </ul>
        </nav>
        <nav id="bottombar">
          <ul>
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
    <div id="container">
    <div id="detail">
      <Outlet />
    </div>
    </div>
    <footer>
      <div id="current" className="panel">
        <img id="currentimg" src="http://via.placeholder.com/50x50" alt="" />
        <div id="songplaying">
          <p>current song title</p>
          <p>artist</p>
        </div>
      </div>
      <div id="controls" className="panel">
          <button id="shuffle"> Shuffle </button>
          <button id="previous"> Previous </button>
          <button id="play"> Play/Pause </button>
          <button id="next"><img src="https://i.imgur.com/X6zEghw.jpg" alt="" /></button>
          <button id="repeat"> repeat </button>
      </div>
      <div id="sound" className="panel">
        <button id="lyrics">lyrics</button>
        <button id="queue">queue</button>
        <button id="mute">mute</button>
        <button id="volume">volume</button>
      </div>
    </footer>
    </React.Fragment>
  );
};