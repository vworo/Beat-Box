import React from 'react';
import { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay, faBackward, faForward, faRepeat, faShuffle, faVolumeHigh, faEject, faMicrophone } from '@fortawesome/free-solid-svg-icons';

export default function Footer (props) {
    const [play, setPlay] = useState(false)
    const [songsUriList, setSongsUriList] = useState([])

    useEffect(() => {
        setSongsUriList(props.songsUriList)
        setPlay(true)
    }, [props.songsUriList])

    useEffect(() => {
        console.log("props.token", props.token)
    }, [props.token])
    
    return (
        <footer>
            <SpotifyPlayer
                token={props.token}
                uris={songsUriList ? songsUriList : []}
                play={play}
                styles={{
                    activeColor: '#fff',
                    bgColor: 'black',
                    color: '#fff',
                    loaderColor: '#fff',
                    sliderColor: '#1cb954',
                    trackArtistColor: '#ccc',
                    trackNameColor: '#fff',
                }}
            />
        </footer>
    )
}
