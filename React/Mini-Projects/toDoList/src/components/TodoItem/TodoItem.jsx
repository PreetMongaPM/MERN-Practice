import css from "./TodoItem.module.css"

function TodoItem({index, todoItem, dueDate,handleDeleteOnCLick}){
    return (
        <div class="container">
        <div class={`row ${css["pm-row"]}`}>
          <div class="col-6">{todoItem}</div>
          <div class="col-4">{dueDate}</div>
          <div class="col-2">
            <button type="button" onClick={()=>handleDeleteOnCLick(index)} class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
}

export default TodoItem;