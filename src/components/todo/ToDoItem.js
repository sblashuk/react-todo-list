import React from 'react';
import './ToDoItem.css';

export default function ToDoItem({
  id,
  toDoItem,
  handleToggle,
  handleDelete,
  handleChange,
}) {
  return (
    <div className="todo-item">
      <input
        className="todo-toggle"
        type="checkbox"
        checked={toDoItem.completed}
        onChange={() => handleToggle(id)}
      />
      <div className="todo-info">
        <div>{toDoItem.title}</div>
        <div>{toDoItem.description}</div>
      </div>
      {!toDoItem.completed && (
        <input
          className="todo-btn"
          type="button"
          value="i"
          onClick={() => handleChange(id)}
        />
      )}

      <input
        className="todo-btn"
        type="button"
        value="x"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}
