// import Card from "./Card.jsx";
// export default function App(){
//   return<>
//   <Card/>
//   <Card/>
//   </>
// }

// import React from "react";
import BestGamesList from "./components/BestGamesList/BestGamesList";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"
// import
//let games = ["Valorant", "GTA V", "COD MW"];
let games = [];


function App() {
  return (
    <>
      <h1>Best Games</h1>
      <ErrorMessage games={games}/>
      <BestGamesList games={games}/>
    </>
  );
}

export default App;



