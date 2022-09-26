
import "./App.css";
//import Activity from "./components/Activity";
//import FormActivity from "./components/FormActivity";
import ListActivities from "./components/ListActivities";

function App() {
  return (
    <div className="To-do-list-app">
      <div className="TitleApp">
        <h1>ToDo-List-App</h1>
      </div>
       <div className="ContainerList">
        <h3>Activities</h3>
       <ListActivities/>
      </div>
    </div>
  );
}

export default App;
