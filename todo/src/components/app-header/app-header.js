import React from "react";

import "./app-header.css";

const AppHeader = ({ todo, done }) => {
  return (
    <div className="app-header">
      <h1 className="title">Shopping List</h1>
      <h3 className="subtitle">
        {todo} to buy, {done} bought
      </h3>
    </div>
  );
};

export default AppHeader;
