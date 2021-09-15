import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { edittodo } from "../redux/actions";

function EditTask({ match }) {
  var id = Number(match.params.id);
  console.log(id);
  const todos = useSelector((state) => state.todo);
  console.log(todos);

  const dispatch = useDispatch();

  const stask = todos.filter((item) => {
    return item.id === id;
  });
  console.log(stask);

  const [description, setDescription] = useState(stask[0].description);
  const [isDone, setIsDone] = useState(stask[0].isDone);

  useEffect(() => {
    setDescription(description);
    setIsDone(isDone);
  }, [description, isDone]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(edittodo([id, description, isDone]));
  };

  return (
    <div className="container m-3 p-3 ">
      <Link to="/">HOME</Link>
      <hr />
      <br></br>

      <form className="container p-5" onSubmit={(e) => handleSubmit(e)}>
        <h6>ID : {stask[0].id}</h6>
        <h6>Description:</h6>
        <div className="form-group">
          <label htmlFor="description" className="text-white">
            Description:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="enter task description"
            id=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <h6>isDone :</h6>
        <div className="form-group">
          <select
            className="form-select"
            name="isDone"
            value={isDone}
            aria-label="Default select example"
            onChange={(e) => setIsDone(e.target.value)}
            required
          >
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
        <br />

        <button type="submit" className="btn btn-primary">
          Apply Changes
        </button>
      </form>

      
    </div>
  );
}

export default EditTask;
