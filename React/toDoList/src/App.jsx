import AddTask from "./AddTask";
import ShowTask from "./ShowTask";

function App(){
  return(
  <div className="main">
  <h1 style={{textAlign:"center", marginLeft:"10px"}}>ToDo App</h1> 
  <div className="main-container">
      <AddTask/>
      <ShowTask/>
      <ShowTask/>
  </div>
  </div>
  );
}

export default App;