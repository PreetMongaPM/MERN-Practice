import MainScreen from "./components/MainScreen/MainScreen";
import AddRow from "./components/AddRow/AddRow";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
const keys = [
  "C",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];

const App = () => {
  return (
    <center>
      <div className="calc">
        <MainScreen />
        <AddRow keys={keys} />
      </div>
    </center>
  );
};

export default App;
