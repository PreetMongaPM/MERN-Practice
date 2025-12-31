// import Card from "./Card.jsx";
// export default function App(){
//   return<>
//   <Card/>
//   <Card/>
//   </>
// }

// import React from "react";

import InputGame from "./components/InputGame/InputGame";
import BestGamesList from "./components/BestGamesList/BestGamesList";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"
import Container from "./components/Container/Container";
import { useEffect, useState } from "react";
let games = ["Valorant", "GTA V", "COD MW"];
// let games = [];

const handleOnKeyDown = (event)=>{
  
  let [gameName, setGameName] = useState(games);
  console.log(event.target.value);
}


function App() {
  return (
    <>
    <Container>
      <h1 style={{textAlign:"center"}}>Best Games</h1>
    <InputGame handleOnKeyDown={handleOnKeyDown}></InputGame>
      <ErrorMessage games={games}/>
      <BestGamesList games={games} handleOnKeyDown={handleOnKeyDown}/>
    </Container>
    </>

    
  );
}

export default App;



