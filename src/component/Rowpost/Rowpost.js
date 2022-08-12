
import React,{useEffect,useState} from 'react'
import "./Rowpost.css"
import axios from '../../axios'
import {imgurl,API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'

function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
 useEffect(() => {
   axios.get(props.url).then(response=>{
    console.log(response.data)
    setMovies(response.data.results)
   }).catch(err=>{
   // alert('network ERror')
   })
 }, [])
 
 //youtube intergration
 const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
 
const handleMovie= (id)=>{
console.log(id)
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
  console.log(response.data)
  if(response.data.results.length!==0){
    setUrlId(response.data.results[0])
  }else{
    console.log('array not available')
  }
})
}
return (
    <div className='row'>
        <h2 className='title'>{props.title}</h2>
        <div className="posters">
          {movies.map((Obj)=>
            <img onClick={()=>handleMovie(Obj.id)} className={props.isSmall ?'smallPoster':'post'} alt='df' src={`${imgurl+Obj.backdrop_path}`} />
                
          )}
        
        
        </div>
           
       {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
        
      </div>

  )
}

export default Rowpost