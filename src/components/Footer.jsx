import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBackward, faForward, faRepeat, faShuffle, faVolumeHigh, faEject, faMicrophone } from '@fortawesome/free-solid-svg-icons';

export default function Footer () {
    return (
    <footer>
        <div id="current" className="panel">
        <img id="currentimg" src="https://picsum.photos/60" alt="" />
        <div id="songplaying">
            <p>current song title</p>
            <p id="grayp">artist</p>
        </div>
        </div>
        <div id="controls" className="panel">
            <button id="shuffle" className="blackicons"><FontAwesomeIcon icon={faShuffle} style={{color: "#c0c0c0",}} /></button>
            <button id="previous" className="blackicons"><FontAwesomeIcon icon={faBackward} style={{color: "#c0c0c0",}} /></button>
            <button id="play"><FontAwesomeIcon icon={faPlay} style={{color: "#000000",}} /></button>
            <button id="next" className="blackicons"><FontAwesomeIcon icon={faForward} style={{color: "#c0c0c0",}} /></button>
            <button id="repeat" className="blackicons"><FontAwesomeIcon icon={faRepeat} style={{color: "#c0c0c0",}} /></button>
            <div id="soundbar"><img src="https://i.imgur.com/85nnHjB.png" alt="" /></div>
        </div>
        <div id="sound" className="panel">
        <button id="lyrics" className="blackicons sound"><FontAwesomeIcon icon={faMicrophone} style={{color: "#c0c0c0",}} /></button>
        <button id="queue" className="blackicons sound"><FontAwesomeIcon icon={faEject} style={{color: "#c0c0c0",}} /></button>
        <button id="mute" className="blackicons sound"><FontAwesomeIcon icon={faVolumeHigh} style={{color: "#c0c0c0",}} /></button>
        <button id="volume" className="blackicons"><img src="https://i.imgur.com/ipw7Tww.png" alt="" /></button>
        </div>
    </footer>
    )
}
