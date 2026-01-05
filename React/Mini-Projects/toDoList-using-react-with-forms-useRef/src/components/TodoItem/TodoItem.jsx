import css from "./TodoItem.module.css"

function TodoItem({index, todoItem, dueDate,handleDeleteOnCLick}){
    return (
        <div className="container">
        <div className={`row ${css["pm-row"]}`}>
          <div className="col-6">{todoItem}</div>
          <div className="col-4">{dueDate}</div>
          <div className="col-2">
            <button type="button" onClick={()=>handleDeleteOnCLick(index)} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
}

export default TodoItem;