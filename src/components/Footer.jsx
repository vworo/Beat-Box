import React from 'react';

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
    )
}
