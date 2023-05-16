import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBackward, faForward, faRepeat, faShuffle } from '@fortawesome/free-solid-svg-icons';

export default function Footer () {
    return (
    <footer>
        <div id="current" className="panel">
        <img id="currentimg" src="http://via.placeholder.com/50x50" alt="" />
        <div id="songplaying">
            <p>current song title</p>
            <p>artist</p>
        </div>
        </div>
        <div id="controls" className="panel">
            <button id="shuffle" className="blackicons"><FontAwesomeIcon icon={faShuffle} style={{color: "#ffffff",}} /></button>
            <button id="previous" className="blackicons"><FontAwesomeIcon icon={faBackward} style={{color: "#ffffff",}} /></button>
            <button id="play"><FontAwesomeIcon icon={faPlay} style={{color: "#000000",}} /></button>
            <button id="next" className="blackicons"><FontAwesomeIcon icon={faForward} style={{color: "#ffffff",}} /></button>
            <button id="repeat" className="blackicons"><FontAwesomeIcon icon={faRepeat} style={{color: "#ffffff",}} /></button>
        </div>
        <div id="sound" className="panel">
        <button id="lyrics">lyrics</button>
        <button id="queue">queue</button>
        <button id="mute">mute</button>
        <button id="volume">volume</button>
        </div>
    </footer>
    )
}
