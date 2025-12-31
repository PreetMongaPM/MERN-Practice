// import styles from "./BestGamesListItem.module.css";
import Button from "../Button/Button";
function BestGamesListItem({ game, onKeyDown }) {
  return (
    <li className={`list-group-item`}>
      {game}
      <Button game={game} onKeyDown={onKeyDown} />
    </li>
  );
}

export default BestGamesListItem;
