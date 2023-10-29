import React from "react";

function Task() {

  function handleDelete() {
    Task.filter
  }
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
