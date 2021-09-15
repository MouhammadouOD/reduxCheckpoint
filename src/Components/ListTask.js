import React from "react";
import Task from "./Task";
import { useState , useEffect} from "react";
import { useSelector } from 'react-redux';


function ListTask() {

    const todos = useSelector( state => state.todo);
    const [selectedtodo , setSelectedtodo] = useState(todos);

    var donetodo = todos.filter((todo) => todo.isDone === 'yes');
    var notdonetodo = todos.filter((todo) => todo.isDone === 'no');
    
    useEffect((e) => {
      setSelectedtodo(todos);
    }, [todos])

    

    
    const filter = (e) =>{
      e.preventDefault();
      e.target.value === 'done' ? setSelectedtodo(donetodo) 
      : e.target.value === 'all'? setSelectedtodo(todos)
      :setSelectedtodo(notdonetodo);
    }
    

  var display = selectedtodo.map((todo) => 
    <Task id={todo.id} description={todo.description} isDone={todo.isDone}/>
  )

  const style ={
    display : 'flex' ,
    flexWrap : 'wrap',
    border : '1px solid black',
    margin : '30px',
    padding : '15px'
  }

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

      <div className="" style={style}>
        {display}
      </div>
    </>
  );
}

export default ListTask;
