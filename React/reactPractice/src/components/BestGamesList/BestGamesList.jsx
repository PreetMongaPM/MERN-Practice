// let games = ["Valorant", "GTA V", "COD MW"];

import { useState } from "react";
import BestGamesListItem from "./BestGamesListItem";

function BestGamesList({ games, onKeyDown}) {
  let [boughtItems, setBoughtItems] = useState([]);
  
  const handleOnClick = (event, item)=>{
    
    let newBoughtItems = [...boughtItems, item];
    setBoughtItems(newBoughtItems);
    console.log(item);
  }
  return (
    <>
      <ul className="list-group">
        {games.map((item) => (
          <BestGamesListItem
            key={item}
            game={item}
            handleOnClick={(event)=>handleOnClick(event, item)}
            bought={boughtItems.includes(item)}
          />
        ))}
      </ul>
    </>
  );
}

export default BestGamesList;
