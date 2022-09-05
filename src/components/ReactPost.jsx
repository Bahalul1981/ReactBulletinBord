import React, { useState } from 'react'
import PostLiked from './PostLiked'

function ReactPost({bulle}) {
  const[likepost,setLikepost]=useState(false)



 
  return (
    <div className='maindiv' key={bulle.id}>
      
      <h3>Fråga: {bulle.fråga}</h3>
      <p>Svar: {bulle.svar} </p> 
      
      

     
      {likepost===false && <button onClick={()=>{setLikepost(!likepost)}}>Like</button>}
      {likepost? <PostLiked />:null}
      
      
    
    
    </div>
  )
}

export default ReactPost
