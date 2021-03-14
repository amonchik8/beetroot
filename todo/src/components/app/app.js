import React, { useState } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import AddTodoListItem from "../add-todo-list-item";

import "./app.css";

const App = () => {
  const createTodoItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: Math.floor(Math.random() * 10000),
    };
  };

  const [todoData, setTodoData] = useState([
    createTodoItem("drink"),
    createTodoItem("drink coffee"),
    createTodoItem("drink milk"),
  ]);

  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  };

  const filters = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  const visibleItems = filters(search(todoData, term), filter);



  const deleteItem = (id) => {
    const newArr = todoData.filter((el) => el.id !== id);
    setTodoData(newArr);
  };

  const addItem = (text) => {
    const newItem = createTodoItem(text);

    const newArr = [...todoData, newItem];
    setTodoData(newArr);
  };

  const onToggleProp = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  const onToggleDone = (id) => {
    setTodoData((todoData) => {
      return onToggleProp(todoData, id, "done");
    });
  };
  const onToggleImportant = (id) => {
    setTodoData((todoData) => {
      return onToggleProp(todoData, id, "important");
    });
  };


  const doneCount = todoData.filter((el) => el.done === true).length;
  const todoCount = todoData.length - doneCount;

  return (
    <div className="app">
      <AppHeader todo={todoCount} done={doneCount} />
      <SearchPanel />
      <TodoList
        todos={visibleItems}
        onDeleted={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
      />
      <AddTodoListItem onAdded={addItem} />
    </div>
  );
};

export default App;
