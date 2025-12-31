import css from "./InputGame.module.css"

const InputGame = ({handleOnKeyDown})=>{
    return <input className={css.inputGame} type="text" onKeyDown={handleOnKeyDown} placeholder="Enter your fav game here"/>
}

export default InputGame;