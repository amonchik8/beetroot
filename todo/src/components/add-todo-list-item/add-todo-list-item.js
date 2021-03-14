import React, { useState } from "react";

import "./add-todo-list-item.css";

const AddTodoListItem = ({ onAdded }) => {
  const [label, setLabel] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setLabel((label) => {
      onAdded(label);
      return (label = "");
    });
  };
  const onChange = (e) => {
    setLabel((label) => {
      return (label = e.target.value);
    });
  };

  return (
    <div className="add-todo-list-item">
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          value={label}
          onChange={onChange}
        />
        <button className="add">Add Item</button>
      </form>
    </div>
  );
};

export default AddTodoListItem;
