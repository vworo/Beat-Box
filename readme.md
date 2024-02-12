# Beat Box (Spotify Clone)

Deployed site now available [here](https://boxbeats.netlify.app/)!

This project is a web application that mimics the functionality of Spotify using Spotify's OAuth system. Users can authenticate with their Spotify accounts and access features such as browsing playlists, searching for songs, and playing music (click on a song to listen).

## Features

- User authentication using Spotify OAuth system
  ![image](https://github.com/vworo/Beat-Box/assets/106173556/702daef1-e47e-482f-9b17-ce75d2fa004b)

- Browse and display saved playlists
  ![image](https://github.com/vworo/Beat-Box/assets/106173556/18fae508-3177-4338-8984-3ecd4a79613f)

- Discover new songs with trending playlists
  ![image](https://github.com/vworo/Beat-Box/assets/106173556/b280f65d-ad64-49f5-8660-96de1da365f1)
  
- Search for songs and artists
  ![image](https://github.com/vworo/Beat-Box/assets/106173556/e5a160be-c785-4641-ab95-1c4105ede737)

- Play music tracks
  ![image](https://github.com/vworo/Beat-Box/assets/106173556/ba103a13-8fe1-47f4-a293-fb762dbec58d)

- Responsive design for mobile and desktop devices

## Planned features/fixes

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

