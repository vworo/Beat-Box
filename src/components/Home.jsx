import { useOutletContext } from "react-router-dom";

const Home = () => {

    const {searchResults} = useOutletContext();

    return (
        <div>
            <h2>Search Results</h2>
            
            {searchResults.slice(0, 5).map(track => (
                <div key={track.id} className="Track" onClick={() => handlePlay(track.uri)}>
                <div className="Track-title">{track.name}</div>
                <div className="Track-artist">{track.artists[0].name}</div>
                <div className="Track-album">{track.album.name}</div>
                </div>
            ))}
        </div>
    );
};
export default Home;
