import { useOutletContext } from "react-router-dom";

const Home = () => {

    const {searchResults} = useOutletContext();

    return (
        <div id="playlistSongs">
            <h1>Search Results</h1>
            <ul>
                {searchResults.map((item, index) => (
                     <li key={index}>
                     <div className="song-item" onClick={() => console.log("Clicked!")}>
                        <img
                           src={item.album.images[0].url}
                           alt={item.album.name}
                        />
                        <div>
                           <div>{item.name}</div>
                           <div className="artist-names">
                              {item.artists.map((artist, artistIndex) => (
                                 <span key={artistIndex}>
                                    {artistIndex > 0 && ", "}
                                    {artist.name}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </div>
                  </li>
                ))}
            </ul>
            

            {

            }
        </div>
    );
};
export default Home;
