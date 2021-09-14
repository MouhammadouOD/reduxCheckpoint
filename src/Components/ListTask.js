import React from "react";
import Task from "./Task";
import { useState , useEffect} from "react";
import { useSelector } from 'react-redux';


function ListTask() {

    const todos = useSelector( state => state.todo);
    const [gtodo , setGtodo] = useState(todos);
    const [selectedtodo , setSelectedtodo] = useState(todos);
    
    useEffect(() => {
      setGtodo(todos);
    }, [todos])

    var donetodo = gtodo.filter((todo) => todo.isDone === 'yes');
    var notdonetodo = gtodo.filter((todo) => todo.isDone === 'no');

    
    const filter = (e) =>{
      e.preventDefault();
      e.target.value === 'done' ? setSelectedtodo(donetodo) 
      : e.target.value === 'all'? setSelectedtodo(gtodo)
      :setSelectedtodo(notdonetodo);
    }
    

  var display = selectedtodo.map((todo) => 
    <Task id={todo.id} description={todo.description} isDone={todo.isDone}/>
  )

  return (
    <>
      <select
        className="form-select mt-5 w-25"
        onChange={(e)=>filter(e)}
        name="filter"
        aria-label="Default select example"
      >
        <option>Filter Tasks</option>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notDone">Not Done</option>
      </select>

      <div className="container border m-4 p-3 d-flex">
        {display}
      </div>
    </>
  );
}

export default ListTask;
