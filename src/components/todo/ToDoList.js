import React from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList({
  toDoList,
  handleToggle,
  handleDelete,
  handleChange,
}) {
  return (
    <div>
      {toDoList.map((toDoItem, index) => (
        <ToDoItem
          id={index}
          toDoItem={toDoItem}
          handleToggle={handleToggle}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
