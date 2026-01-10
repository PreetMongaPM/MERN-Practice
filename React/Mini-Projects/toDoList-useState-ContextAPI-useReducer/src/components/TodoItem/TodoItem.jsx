import css from "./TodoItem.module.css";
import { TodoItemsContext } from "../../store/todo-items-context";
import { useContext } from "react";

function TodoItem({ index, todoItem, dueDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div class="container">
      <div class={`row ${css["pm-row"]}`}>
        <div class="col-6">{todoItem}</div>
        <div class="col-4">{dueDate}</div>
        <div class="col-2">
          <button
            type="button"
            onClick={() => deleteItem(index)}
            class="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
