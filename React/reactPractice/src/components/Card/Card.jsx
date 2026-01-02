import Button from "./Button.jsx";
import goldenImage from "./assets/goldenRetriever.jpeg";
import "./Card.css"
export default function Card(){
    return <div className="card">
        <h1>Dog Shelter</h1>
        <img src={goldenImage} alt="golden retriever" />
        <h2>Each $1 counts</h2>
        <Button/>
    </div>
}