import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';

function App() {

  

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <hr/>
      <AddTask/>
      <ListTask/>
    </div>
  );
}

export default App;
