import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NavigationSidebar(props) {
  useEffect(() => {
    console.log('props', props);
  })
  
  const listItems = props.playlists.map((playlist, i) => <li key={i}>{playlist.name}</li>)

//   return (
//     <div id="sidebar">
//       <h1>Spotify</h1>
//       <nav>
//         <ul>
//           <li>
//             <Link to={'/home'}>Home</Link>
//           </li>
//           <li className="link-border">
//             <Link to={'/home'}>Search</Link>
//           </li>
//           <h2 className="library">Your Library</h2>
//           <li>
//             <Link to={'/app'}>Liked Songs</Link>
//           </li>
//         </ul>
          
//         <ul>
//             {listItems}
//         </ul>
//       </nav>
//     </div>
//   );
// }

  return (
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
  );
}
