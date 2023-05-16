import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Searcher from "./Searcher";

export default function NavigationTopbar(props) {
//   useEffect(() => {
//     console.log('props', props);
//   }, [])

    // Changes current URL the server_url where user will login to Spotify
    const authorize = () => {
        props.authorize();
    };

    return (
      <div className="top-navbar">
        <Searcher token={ props.token }/>
        
        { props.token ? (
          <img className="login" src="http://placekitten.com/50/50" alt="" />
        ) : (
          <button className="login" onClick={ authorize }>Login</button>
        )}
      </div>
  );
}
