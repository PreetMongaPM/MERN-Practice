import { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoItemsContext } from "../../store/todo-items-context";

const TodoItems = () => {
  //gets an object which is an array of objects

  const { items } = useContext(TodoItemsContext);
  return (
    <>
      {items.map((item, index) => {
        return (
          <TodoItem
            index={index}
            todoItem={item.todoItem}
            dueDate={item.dueDate}
          />
        );
      })}
    </>
  );
};

export default TodoItems;
