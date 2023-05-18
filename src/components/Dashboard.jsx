import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import { Form } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearchResult from './TracksSearchResult';
import SpotifySDK from './SpotifySDK';

const spotifyApi = new SpotifyWebApi({
    cliendID: "db3fb3b60f7c44cf843733eb2c0976bf",
})

export default function Dashboard({code}) {
    console.log(code);
    const accessToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()

    function chooseTrack (track) {
        setPlayingTrack(track)
        setSearch('')
    }

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if(!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return
            setSearchResults(res.body.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce(
                (smallest, image) => {
                    if (image.height < smallest.height) return image
                    return smallest
                }, track.album.images[0])
                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url
                }
            }))
        })
        return () => cancel = true
    }, [search, accessToken])

    // export const SpotifyThing = (props) => {
    //     return (
    //         <SpotifySDK accessToken={ props.accessToken } trackUri={ props.track?.uri}/>
    //     )
    // }

    return (
    <div>
    <div id="detail">
        <Form.Control
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={e => setSearch(e.target.value)}
        />
        <div className="flex-grow-1 my-2" style={{ overFlowY: "auto"}}>
            {searchResults.map(track => (
                <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
            ))}
        </div>
        
    </div>
    <footer><SpotifySDK accessToken={ accessToken } trackUri={playingTrack?.uri} /></footer>
    </div>
    
    )
}

