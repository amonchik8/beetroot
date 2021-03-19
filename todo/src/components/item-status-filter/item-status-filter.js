import React from "react";

import "./item-status-filter.css";

const ItemStatusFilter = ({ filter, onFilterChange }) => {
  const button = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  const buttons = button.map((btn) => {
    const { label, name } = btn;
    const isActive = filter === name;
   
    const clazz = isActive ? 'button-active' : 'button'
      
    return (
      <button type="button" className={clazz} key={name} onClick={() => onFilterChange(name)}>
        {label}
      </button>
    );
  });

  return <div className="filter-panel">{buttons}</div>;
};

export default ItemStatusFilter;
