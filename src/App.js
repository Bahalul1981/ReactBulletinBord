import React, { useState } from 'react'
import "./App.css"
import ReactPost from './components/ReactPost'


function App() {

  const[bulletinboard,setBulletinboard]=useState([
    {
      fråga:"Vad är tre fördelar med att använda React?",
      svar:["# Gör JavaScript-kodning enklare,"," # Lätt att arbeta med komponenter,"," # Malldesign på ett enkelt sätt,"]
    },
    {
      fråga:"Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      svar:"En ensidig applikation är en app eller webbplats som fungerar i en webbläsare och som inte laddar om sidan medan man använder den."
    },
    {
      fråga:"Nämn tre skillnader mellan React och Angular",
      svar:["# UI Components,","# Dependency Injection,"," # Data Binding, "]
    },
  ])

  const addquestion=()=>{
    const newquestion=document.querySelector("#frågan").value;
    console.log(newquestion)

    const addedwuestion={
      fråga:newquestion,
      svar:null
    }
    setBulletinboard([...bulletinboard,addedwuestion])
  }
 


  return (
    <div>
      <h1 className='bulletinbord'> React Bulletin Board</h1>
      {bulletinboard.map((data)=>{
        return(<ReactPost  bulle={data}/>)
      })} <br />

      <h2>Lägg till frågor</h2>

<input type="text" id='frågan'/>
      <button onClick={addquestion}>Lägg till fråga</button>
     

     
    </div>
  )
}

export default App
