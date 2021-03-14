import React, { useState } from "react";

import "./item-status-filter.css";

const ItemStatusFilter = () => {
  const button = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  const buttons = button.map((btn) => {
    const { label, name } = btn;
    return (
      <button type="button" className="button" key={name}>
        {label}
      </button>
    );
  });

  return (
    <div>
      {buttons}
    </div>
  );
};

export default ItemStatusFilter;
