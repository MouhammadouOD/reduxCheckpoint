import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo } from "../redux/actions";

function AddTask() {
  const dispatch = useDispatch();
  var nextId = useSelector((state) => Number(state.nextId));
  console.log(nextId);
  useEffect(() => {
    setId(nextId);
  }, [nextId]);

  const [id, setId] = useState(nextId);
  const [description, setDescription] = useState();
  const [isDone, setIsDone] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addtodo({ id: id, description: description, isDone: isDone }));
  };

  return (
    <>
      <h4>Add Task</h4>
      <form className="container mb-3" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description" className="text-white">
            Description:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="enter task description"
            id=""
            name=""
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <select
            className="form-select"
            name="isDone"
            value="select a status"
            aria-label="Default select example"
            onChange={(e) => setIsDone(e.target.value)}
          >
            <option >select a status</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </>
  );
}

export default AddTask;
