import { useRef } from "react";
import css from "./InputRow.module.css";
import { useState } from "react";

function InputRow({ addTaskOnClick }) {
  const todoItemInput = useRef("");
  const dueDateInput = useRef("");

  //Used the forms to create the same functionality as of simple button

  // const [todoItem, setTodoItem] = useState('');
  // const [dueDate, setDueDate] = useState('');

  // const handleInputOnChange = (event) =>{
  //   let newTodoItem = event.target.value;
  //   setTodoItem(newTodoItem);
  // }
  // const handleDateOnChange = (event) =>{
  //   let newDueDate = event.target.value;
  //   setDueDate(newDueDate);
  // }

  // const handleOnSubmit = (e)=>{
  //   e.preventDefault();
  //   addTaskOnClick({todoItem, dueDate});
  //   setDueDate('');
  //   setTodoItem('');
  // }

  //Now using useRef with Forms to implement the same functionality

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const todoItem = todoItemInput.current.value;
    const dueDate = dueDateInput.current.value;
    addTaskOnClick({ todoItem, dueDate });
    todoItemInput.current.value = "";
    dueDateInput.current.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="container">
        <div className={`${css["pm-row"]} row`}>
          <div className="col-6">
            <input
              type="text"
              ref={todoItemInput}
              placeholder="Enter your task here"
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateInput} name="date" id="date" />
          </div>
          <div className="col-2">
            <button className="btn btn-primary add-button">Add</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default InputRow;
