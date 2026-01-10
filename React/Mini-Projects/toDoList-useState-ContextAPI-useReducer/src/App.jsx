import AppName from "./components/AppName/AppName";
import InputRow from "./components/InputRow/InputRow";
import TodoItems from "./components/TodoItems/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-context";
//Passing an array of objects - having two fields todoItem and dueDate

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="main-container">
        <AppName />
        <InputRow />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
