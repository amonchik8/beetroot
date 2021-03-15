import React from "react";
import ItemStatusFilter from "../item-status-filter";
import "./search-panel.css";

const SearchPanel = ({ onSearchChange, term }) => {
  return (
    <div className="search">
      <input
        className="search-panel"
        placeholder="search"
        type="text"
        value={term}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;
