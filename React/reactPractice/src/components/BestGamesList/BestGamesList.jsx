// let games = ["Valorant", "GTA V", "COD MW"];

import BestGamesListItem from "./BestGamesListItem";
function BestGamesList({games}){
    return (
        <>
        <ul className="list-group"> 
          {games.map((item)=> <BestGamesListItem key={item} game={item}/>)  }
        </ul>
        </>
    );
}

export default BestGamesList;