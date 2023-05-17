import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = (props) => {
    const [tracks, setTracks] = useState([])
    axios("https://api.spotify.com/v1/browse/categories", {
            headers: {
                'Authorization': `Bearer ${props.token}`
            },
            params: {
                country: "AU",
            }
        }).then(response => {const categoryId =(response.data.categories.items[1].id);
            axios(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
                headers: {
                    'Authorization': `Bearer ${props.token}`
                }
            })
            .then(response => {const playlistId = (response.data.playlists.items[0].id);
                    console.log(playlistId)
                    axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                        headers: {
                            'Authorization': `Bearer ${props.token}`
                        }
                    }).then (response => { 
                        console.log(response)
                        setTracks(response.data.items)
                        
                    })
            })
            })

    return (
        <>
            {
            tracks.slice(0, 5).map(track => (
            <div key={track.id} className="Track">
                <div className="Track-title">{track.track.name}</div>
                <div className="Track-artist">{track.track.artists[0].name}</div>  
            </div>
            ))
            }
        </> 
    )   

}
         
        


   
    


function shuffle(array) {
    const shuffledArray = [...array];
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }
  
    return shuffledArray;
  }

export default Categories