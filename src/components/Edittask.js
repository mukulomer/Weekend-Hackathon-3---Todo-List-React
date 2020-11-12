import React, { useState } from "react";
import "./../styles/App.css";

export default function Edit({ value, EditChange, SaveEdit }) {
  return (
    <>
      {" "}
      <input
        type="text"
        id="task"
        className="editTask"
        value={value}
        required
        onChange={(ev) => {
          EditChange(ev);
        }}
      />
      <button id="btn" onClick={SaveEdit} className="saveTask">
        {" "}
        Save Changes
      </button>
    </>
  );
}
