import { Route, Switch } from "react-router-dom";
import "./App.css";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import EditTask from "./Components/EditTask";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <h1>TODO APP</h1>
          <hr />
          <AddTask />
          <ListTask />
        </Route>
        <Route path="/:id" component={EditTask} />
      </Switch>
    </div>
  );
}

export default App;
