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

let gamename = ["valo"];
function App() {
  let [games, setGameName] = useState(gamename);
  const handleOnKeyDown = (event)=>{
     if(event.key === "Enter" && event.target.value.length !== 0)
      {
        console.log(event);
        let newGames = [...games, event.target.value];
        event.target.value = "";
        setGameName(newGames);
      }
  }

  // const handleOnMouseEnter = ()=>{ //Aise nhi karna chaiye, agar module use kar rhe hai toh use it properly
  //   setMouseEnterClass("mouseEnterClass");
  //   console.log(mouseEnterClass);
  // }
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



