import "./Button.css";

export default function Button({handleOnClick}) {
  
  return (
    <button className="button" onClick={handleOnClick} >
      Vote
    </button>
  );
}
