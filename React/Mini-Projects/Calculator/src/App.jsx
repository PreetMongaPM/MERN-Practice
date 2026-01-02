import MainScreen from "./components/MainScreen/MainScreen";
import AddRow from "./components/AddRow/AddRow";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { use, useState } from "react";
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
  let [mainScreen, setMainScreen] = useState("0");
  
  const handleOnClick = (event)=>{
    let buttonPressed = event.target.innerHTML;
    let newValue;

    switch(buttonPressed){
      case 'C':
        setMainScreen('0');
        break;
      case '=':
        if(mainScreen.length !== 0)
        {
          let currentValue = eval(mainScreen);
          setMainScreen(currentValue);
        }
        break;
      default:
        if(mainScreen.length === 1 && mainScreen === '0' && buttonPressed !== '.')
          {
            newValue = buttonPressed;
          }
          else{
            newValue = mainScreen + buttonPressed; 
          }
        setMainScreen(newValue);
    }
    
  }

  return (
    <center>
      <div className="calc">
        <MainScreen mainScreen={mainScreen}/>
        <AddRow keys={keys} handleOnClick={handleOnClick} />
      </div>
    </center>
  );
};

export default App;
