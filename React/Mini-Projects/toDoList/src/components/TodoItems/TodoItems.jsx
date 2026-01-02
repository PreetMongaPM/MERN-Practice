import TodoItem from "../TodoItem/TodoItem";

const TodoItems = ({ todoItems, handleDeleteOnCLick }) => {
  //gets an object which is an array of objects
  return (
    <>
      {todoItems.map((item, index) => {
        return <TodoItem index={index} todoItem={item.todoItem} dueDate={item.dueDate} handleDeleteOnCLick={handleDeleteOnCLick}/>;
      })}
    </>
  );
};

export default TodoItems;
