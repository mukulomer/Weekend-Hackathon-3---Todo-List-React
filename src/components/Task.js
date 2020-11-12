import React from "react";
import "./../styles/App.css";
import Edittask from "./Edittask";

export default function Task({ tasks, handleDelete, handleEdit, setChange1 }) {
  return (
    <>
      {tasks.map((task, index) => (
        <li className="list" key={index}>
          <input type="text" id="task" value={task.name} disabled onChange="" />
          <button className="edit" onClick={() => handleEdit(index)}>
            Edit{" "}
          </button>
          <button className="delete" onClick={() => handleDelete(index)}>
            {" "}
            delete
          </button>{" "}
        </li>
      ))}
    </>
  );
}
