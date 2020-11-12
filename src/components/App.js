import React, { useState } from "react";
import "./../styles/App.css";
import Task from "./Task";
import Edittask from "./Edittask";

function App() {
  const tasks = [
    {
      name: "buy milk"
    }
  ];

  const [value, setValue] = useState("");
  const [task, setTask] = useState(tasks);
  const [open, setOpen] = useState(false);
  const [value1, setValue1] = useState("");
  const [editId, setEditId] = useState(0);

  const handleCLick = () => {
    let taskcopy = [...task];
    if (value === "") {
      return;
    } else {
      let obj = {
        name: value
      };
      taskcopy.push(obj);
      setTask(taskcopy);
      setValue("");
    }
  };

  const handleDelete = (index) => {
    const taskCopy = [...task];
    taskCopy.splice(index, 1);
    setTask(taskCopy);
  };

  const handleEdit = (index) => {
    setOpen(true);
    setEditId(index);
  };

  const SaveEdit = () => {
    let taskCopy = [...task];

    if (value1 !== "") {
      taskCopy[editId].name = value1;
    }
    setTask(taskCopy);
    setOpen(false);
    setValue1("");
    console.log(taskCopy);
  };

  return (
    <div id="main">
      <input
        type="text"
        id="task"
        value={value}
        required
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button id="btn" onClick={handleCLick}>
        {" "}
        click
      </button>
      <Task
        tasks={task}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        open={open}
      />
      {open ? (
        <div>
          <textarea
            value={value1}
            onChange={(ev) => {
              setValue1(ev.target.value);
            }}
          />
          <button
            onClick={(id) => {
              SaveEdit(id);
            }}
          >
            Save
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
