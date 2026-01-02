// import { useState } from "react";
import Button from "../Button/Button";
// import css from "./BestGamesListItem.module.css";

function BestGamesListItem({ game, bought, handleOnClick}) {
  // let [mouseEnterClass, setMouseEnterClass] = useState('');
  // const handleOnMouseEnter = ()=>{
  //   setMouseEnterClass(css.onMouseEnter)
  // }
  // const handleOnMouseLeave = ()=>{
  //   setMouseEnterClass('');
  // }

  return (
    <li className={`list-group-item ${bought && 'active'}`}>
      {game}
      <Button handleOnClick={handleOnClick}/>
    </li>
  );
}

export default BestGamesListItem;
