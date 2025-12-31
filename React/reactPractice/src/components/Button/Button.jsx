import "./Button.css";

export default function Button({game, handleOnClick }) {
  
  return (
    <button className="button" onClick={handleOnClick}>
      Vote
    </button>
  );
}
