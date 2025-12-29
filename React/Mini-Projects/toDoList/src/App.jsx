import AddTask from "./components/AddTask";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import AppName from "./components/AppName";
import "./App.css";

function App() {
  return (
    <center className="main-container">
      <AppName />
      <div className="items-container">
        <AddTask />
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
