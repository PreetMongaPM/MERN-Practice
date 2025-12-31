// let games = ["Valorant", "GTA V", "COD MW"];

import BestGamesListItem from "./BestGamesListItem";

function BestGamesList({ games, onKeyDown }) {
  return (
    <>
      <ul className="list-group">
        {games.map((item) => (
          <BestGamesListItem
            key={item}
            game={item}
            onKeyDown={onKeyDown}
          />
        ))}
      </ul>
    </>
  );
}

export default BestGamesList;
