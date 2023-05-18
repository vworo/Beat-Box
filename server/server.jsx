const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');


const app = express();
app.use(cors());
app.use(bodyParser.json())
// app.use(express.static('dist'));

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:5173',
        clientId: 'db3fb3b60f7c44cf843733eb2c0976bf',
        clientSecret: 'cdfb228fe09841ef863840d271a8d739',
        refreshToken,
    });

    spotifyApi.refreshAccessToken().then((data) => {
        res.json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn
        })
    }).catch(() => {
        res.sendStatus(400);
    });
})

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:5173',
        clientId: 'db3fb3b60f7c44cf843733eb2c0976bf',
        clientSecret: 'cdfb228fe09841ef863840d271a8d739'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    }).catch((err) => {
        console.log(err)
        res.sendStatus(400);
    })
})

app.listen(5174)