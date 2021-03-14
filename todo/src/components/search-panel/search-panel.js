import React, { useState } from "react";
import ItemStatusFilter from "../item-status-filter";
import "./search-panel.css";

const SearchPanel = () => {
  return (
    <div className="search">
      <input className="search-panel" placeholder="search" type="text" />

      <ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;
