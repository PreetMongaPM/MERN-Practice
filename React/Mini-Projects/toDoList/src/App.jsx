import AppName from "./components/AppName/AppName";
import InputRow from "./components/InputRow/InputRow";
import TodoItems from "./components/TodoItems/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const todoItems = [
  {
    todoItem: "Revise Javascript",
    dueDate: "19/11/2026",
  },
  {
    todoItem: "Revise React",
    dueDate: "19/11/2026",
  },
];
//Passing an array of objects - having two fields todoItem and dueDate
function App() {
  return (
    <center className="main-container">
      <AppName />
      <InputRow />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
