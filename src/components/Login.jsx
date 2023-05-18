import React from 'react'

const client_id = 'db3fb3b60f7c44cf843733eb2c0976bf';
const redirect_uri = 'http://localhost:5173';
let server_url = 'https://accounts.spotify.com/authorize';
server_url += '?client_id=' + encodeURIComponent(client_id);
server_url += '&response_type=code'; // token maybe replaced with code
server_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
const placeHolder = '&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';
server_url += placeHolder;

const code = new URLSearchParams(window.location.search).get('code')

export default function Login() {
    return (
        <div>
            <a className="btn btn-success btn-lg" href={server_url} >Login</a>
        </div>
    )
}