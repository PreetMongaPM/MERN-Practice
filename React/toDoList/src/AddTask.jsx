function AddTask(){
    return (
    <div className="add-container">
        <input class="taskEnter field" type="text" placeholder="Enter your task"/>
        <input className="taskEnter field" type="date"/>
        <input class="taskEnter  field btn btn-primary" type="button" value="Add"/>
    </div>);
}

export default AddTask;