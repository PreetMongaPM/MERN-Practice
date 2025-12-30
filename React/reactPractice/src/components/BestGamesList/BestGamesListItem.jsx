import styles from "./BestGamesListItem.module.css"

function BestGamesListItem({game}) {
  return(<li className={`${styles["list-item"]}`}>{game}</li>);
}

export default BestGamesListItem;
