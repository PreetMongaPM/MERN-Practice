
function TodoItem({todoItem, dueDate}){
    return (
        <div class="container">
        <div class="row pm-row">
          <div class="col-6">${todoItem}</div>
          <div class="col-4">${dueDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    );

}

export default TodoItem;