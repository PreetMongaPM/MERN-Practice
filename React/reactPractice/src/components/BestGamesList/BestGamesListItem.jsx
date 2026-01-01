import { useState } from "react";
import Button from "../Button/Button";
import css from "./BestGamesListItem.module.css";

function BestGamesListItem({ game, onKeyDown}) {
  let [mouseEnterClass, setMouseEnterClass] = useState('');
  const handleOnMouseEnter = ()=>{
    setMouseEnterClass(css.onMouseEnter)
  }
  const handleOnMouseLeave = ()=>{
    setMouseEnterClass('');
  }
  return (
    <li className={`list-group-item ${mouseEnterClass}`}>
      {game}
      <Button onKeyDown={onKeyDown} handleOnMouseLeave={handleOnMouseLeave} handleOnMouseEnter={handleOnMouseEnter} />
    </li>
  );
}

export default BestGamesListItem;
