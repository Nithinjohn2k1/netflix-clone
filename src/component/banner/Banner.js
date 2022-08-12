import React, { useEffect, useState } from 'react'
import './Banner.css';
import {API_KEY,imgurl} from '../../constants/constants'
import axios from '../../axios'

function Banner() {
    const [movie, setMovie] = useState()
   useEffect(() => {
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[2])
      setMovie(response.data.results[Math.floor(Math.random()*response.data.result.lenth)])//new poster every sing refresh
    })
   }, [])
   
   
  return (
    <div style={{backgroundImage: `url(${movie ?imgurl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My Playlist</button>
            </div>
            <h1 className='description'>{movie ? movie.overview:""}</h1>
         <div className="fade"></div>
        </div>
    </div>
  )
}
export default Banner