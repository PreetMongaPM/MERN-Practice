import TodoItem from "../TodoItem/TodoItem";

const TodoItems = ({ todoItems }) => {
  //gets an object which is an array of objects
  return (
    <>
      {todoItems.map((item) => {
        return <TodoItem todoItem={item.todoItem} dueDate={item.dueDate} />;
      })}
    </>
  );
};

export default TodoItems;
