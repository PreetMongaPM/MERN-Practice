import { TodoItemsContext } from "../../store/todo-items-context";
import css from "./InputRow.module.css";
import { useContext, useState } from "react";

function InputRow() {
  const { addItem } = useContext(TodoItemsContext);

  const [todoItem, setTodoItem] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleInputOnChange = (event) => {
    let newTodoItem = event.target.value;
    setTodoItem(newTodoItem);
  };
  const handleDateOnChange = (event) => {
    let newDueDate = event.target.value;
    setDueDate(newDueDate);
  };

  return (
    <div class="container">
      <div class={`${css["pm-row"]} row`}>
        <div class="col-6">
          <input
            type="text"
            onChange={handleInputOnChange}
            placeholder="Enter your task here"
            value={todoItem}
          />
        </div>
        <div class="col-4">
          <input
            type="date"
            onChange={handleDateOnChange}
            name="date"
            id="date"
            value={dueDate}
          />
        </div>
        <div class="col-2">
          <button
            type="button"
            onClick={() => {
              addItem({ todoItem, dueDate });
              setDueDate("");
              setTodoItem("");
            }}
            class="btn btn-primary add-button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputRow;
