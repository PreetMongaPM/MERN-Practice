
import css from "./MainScreen.module.css";
const MainScreen = ({mainScreen})=>{

    return <>
    <input className={css.calcDisplay}type="text" readOnly value={mainScreen}/>
    </>
}

export default MainScreen;