import css from "./ErrorMessage.module.css";

function ErrorMessage({games}){
    return (<>
     
     {(games.length === 0)?<p className={`${css["error-msg"]} list-group-item`}>Mind games are Best Games</p>:null}

    </>);
}
export default ErrorMessage;