import AppName from "./components/AppName/AppName";
import InputRow from "./components/InputRow/InputRow";
import TodoItems from "./components/TodoItems/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

//Passing an array of objects - having two fields todoItem and dueDate
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const formatDateToDDMMYYYY = (isoDate) => {
    if (!isoDate) return "";
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
  };

  const addTaskOnClick = ({ todoItem, dueDate }) => {
    // console.log(todoItem, dueDate)
    console.log();
    if (todoItem.length !== 0 && dueDate.length !== 0) {
      dueDate = formatDateToDDMMYYYY(dueDate);
      let newTodoItems = [...todoItems, { todoItem, dueDate }];
      setTodoItems(newTodoItems);
    } else if (todoItem.length === 0) {
      alert("To do Item can't be empty");
    } else {
      alert("Date cannot be empty");
    }
  };

  const handleDeleteOnCLick = (index) => {
    let newTodoItems = todoItems.filter((item, itemIndex) => {
      return index !== itemIndex;
    });

    setTodoItems(newTodoItems);
  };

  return (
    <center className="main-container">
      <AppName />
      <InputRow addTaskOnClick={addTaskOnClick} />

      <TodoItems
        todoItems={todoItems}
        handleDeleteOnCLick={handleDeleteOnCLick}
      />
    </center>
  );
}

export default App;
