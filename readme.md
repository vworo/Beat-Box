# Beat Box (Spotify Clone)

This project is a web application that mimics the functionality of Spotify using Spotify's OAuth system. Users can authenticate with their Spotify accounts and access features such as browsing playlists, searching for songs, and playing music (click on a song to listen).

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using 'npm install'
4. Install music player SDK using 'npm i react-spotify-web-playback'
5. 'npm run dev' and follow port number displayed in the console to test see what the app would look like.

## Features

- User authentication using Spotify OAuth system
- Browse and display playlists
- Search for songs and artists
- Play music tracks
- Responsive design for mobile and desktop devices

## Planned features/fixes

- Deployment to [netlify](https://www.netlify.com/)
- Redirect to Home page upon authorisation (above reliant)
- Correctly show Trending Playlist data if redirecting to Home page (possible cause due to storing token after axios request)
- Move the search field to the Search page (caused by oversight in design phase)
- Change search endpoint from artists data to all data and show more items from the response (extensive task, to be broken down across smaller items)
- Fix static position of Login/Auth button

## Technologies

- Vite: A fast build tool for modern web development. It provides an efficient development server and optimized build setup for React applications.
- React: JavaScript library for building user interfaces
- React Router: Library for routing and navigation in React applications
- Axios: Promise-based HTTP client for making API requests
- Spotify Web API: Used for authentication and accessing Spotify's API endpoints
- [React Spotify Web Playback](https://github.com/gilbarbara/react-spotify-web-playback): A React library that integrates the Spotify Web Playback SDK for playing music and controlling playback on the web.
- HTML5 and CSS3: Markup and styling of the application

## The Team

This app was a collaborative project made for our Software Engineering Immersive. The team is as follows:
- Tristan Bartolome - tristanbartolome@hotmail.com
- Josiah Debessay - josiahdebessay@gmail.com
- Howard Wang - howard.wtf@gmail.com
- James Holton - jamesholton2511@gmail.com
- Victor Worobec - victorworobec@gmail.com

# SpotifyClone
