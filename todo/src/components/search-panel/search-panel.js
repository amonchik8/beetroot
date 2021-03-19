import React from "react";
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
    </div>
  );
};

export default SearchPanel;
