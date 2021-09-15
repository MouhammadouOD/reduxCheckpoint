import React from "react";
import { Link } from "react-router-dom";

function Task({ id, description, isDone }) {
  return (
    <div className="container w-25 border m-3 bg-secondary">
      <p>{id}</p>
      <hr />
      <h6>Description:</h6>
      <p>{description}</p>
      <hr />
      <h6>isDone :</h6>
      <p>{isDone}</p>
      <button type="submit" className="btn btn-light">
        <Link to={`/${id}`}>Modify</Link>
      </button>
    </div>
  );
}

export default Task;
