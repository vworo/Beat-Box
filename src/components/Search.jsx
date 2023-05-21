import { useOutletContext } from "react-router-dom";

const Search = () => {

   const {searchResults} = useOutletContext();
   const context = useOutletContext();

   const _onSongClicked = (song) => {
      context.onSearchSongClicked(song);
   }

    return (
        <div id="playlistSongs">
            <h1>Search Results</h1>
            <ul>
                {searchResults.map((item, index) => (
                     <li key={index}>
                        <div className="song-item" onClick={ () => _onSongClicked(item) }>
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
export default Search;
