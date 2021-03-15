import React, { useState } from "react";

import "./add-todo-list-item.css";

const AddTodoListItem = ({ onAdded }) => {
  const [label, setLabel] = useState("");

  const onLabelChange = (e) => {
    setLabel((label) => {
      return (label = e.target.value);
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLabel((label) => {
      onAdded(label);
      return (label = "");
    });
  };

  return (
    <div className="add-todo-list-item">
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          onChange={onLabelChange}
          value={label}
        />
        <button className="add">Add Item</button>
      </form>
    </div>
  );
};

export default AddTodoListItem;
