import "./Button.css";

export default function Button({handleOnClick,handleOnMouseEnter, handleOnMouseLeave }) {
  
  return (
    <button className="button" onClick={handleOnClick} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} >
      Vote
    </button>
  );
}
