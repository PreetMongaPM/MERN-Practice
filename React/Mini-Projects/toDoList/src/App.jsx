
import AppName from "./components/AppName";
import InputRow from "./components/InputRow";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const todoItems = [
  {
    todoItem : "Revise Javascript", 
    dueDate : "19/11/2026",
  },
  {
    todoItem : "Revise React", 
    dueDate : "19/11/2026",
  },
]

function App() {
  return (
    <center className="main-container">
      <AppName  />
      <InputRow />
      <TodoItems item={todoItems}/>
    </center>
  );
}

export default App;
