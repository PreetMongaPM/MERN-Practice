import TodoItem from "./TodoItem"

const TodoItems = ({todoItems})=>{

    
    return (<>
    todoItems.map((item)=> <TodoItem key={TodoItem.TodoItem} todoItem={TodoItem.TodoItem}/>

    )
    </>);

export default TodoItems;