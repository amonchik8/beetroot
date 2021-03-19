import React from "react";
import "./todo-list-item.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEraser } from "@fortawesome/free-solid-svg-icons";

const TodoListItem = ({
  label,
  onDeleted,
  onToggleDone,
  onToggleImportant,
  done,
  important,
}) => {
  let classNames = "";
  let iconStyle = " imp";
  if (done) {
    classNames += "on-label-click ";
  }

  if (important) {
    classNames += "on-mark-important ";
  }
  if (important) {
    iconStyle += " isImp ";
  }
  if (!important) {
    iconStyle += " icon ";
  }
  const favoriteIcon = <FontAwesomeIcon icon={faStar} />;
  const deleteIcon = <FontAwesomeIcon icon={faEraser} />;
  return (
    <div className="todo-list-items">
      <span className={classNames} onClick={onToggleDone}>
        {label}
      </span>
      <div>
        <button className="del icon" onClick={onDeleted}>
          {deleteIcon}
        </button>
        <button className={iconStyle} onClick={onToggleImportant}>
          {favoriteIcon}
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
