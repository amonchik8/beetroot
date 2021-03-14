import React from "react";
import "./todo-list-item.css";

const TodoListItem = ({
  label,
  onDeleted,
  onToggleDone,
  onToggleImportant,
  done,
  important,
}) => {
  let classNames = "";

  if (done) {
    classNames += "on-label-click ";
  }

  if (important) {
    classNames += "on-mark-important ";
  }

  return (
    <div className="todo-list-items">
      <span className={classNames} onClick={onToggleDone}>
        {label}
      </span>
      <div>
        <button className="del" onClick={onDeleted}>
          Delete
        </button>
        <button className="imp" onClick={onToggleImportant}>
          Make Important
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
