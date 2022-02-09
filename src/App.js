import React, { useState } from 'react';
import './style.css';
import Header from './components/main/Header';
import ToDoList from './components/todo/ToDoList';
import AddEdit from './components/todo/AddEdit';

const data = [
  buildToDoItem('Design ToDo list', 'Create mock up design', true),
  buildToDoItem('Create Simple ToDo list', 'Develop simple application', true),
  buildToDoItem('Add Item', 'Add functionality to add ToDo item', true),
  buildToDoItem('Toggle Item', 'Add functionality to toggle ToDo item', true),
  buildToDoItem('Delete Item', 'Add functionality to remove ToDo item', true),
  buildToDoItem('Update Item', 'Add functionality to update ToDo item', true),
  buildToDoItem('Add Empty Item', 'Fix bug when you can add empty item', true),
  buildToDoItem('Refactoring', 'Simple Code Refactoring'),
  buildToDoItem('Make it user friendly', 'Add some css styles'),
];

export default function App() {
  const [toDoList, setToDoList] = useState(data);
  const [toDoInput, setToDoInput] = useState(buildAddState());

  const handleToggle = (index) => setToDoList(toggleItem(toDoList, index));
  const handleDelete = (index) => setToDoList(removeItem(toDoList, index));
  const handleChange = (index) =>
    setToDoInput(
      buildUpdateState(
        toDoList[index].title,
        toDoList[index].description,
        index
      )
    );
  const handleSubmit = () => {
    setToDoList(
      toDoInput.isAdd
        ? addItem(
            toDoList,
            buildToDoItem(toDoInput.title, toDoInput.description)
          )
        : updateItem(
            toDoList,
            toDoInput.index,
            buildToDoItem(toDoInput.title, toDoInput.description)
          )
    );
    setToDoInput(buildAddState());
  };

  return (
    <div className="container">
      <div className="app">
        <Header />
        <AddEdit
          onSubmit={handleSubmit}
          input={toDoInput}
          onInputChange={setToDoInput}
        />
        <ToDoList
          toDoList={toDoList}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

function removeItem(list, index) {
  let copy = [...list];
  copy.splice(index, 1);
  return copy;
}

function toggleItem(list, index) {
  let copy = [...list];
  copy.splice(index, 1, { ...list[index], completed: !list[index].completed });
  return copy;
}

function addItem(list, item) {
  return [item, ...list];
}

function updateItem(list, index, item) {
  let copy = [...list];
  copy.splice(index, 1, { ...item, completed: list[index].completed });
  return copy;
}

function buildToDoItem(title, description, completed = false) {
  return {
    title: title,
    description: description,
    completed: completed,
  };
}

function buildAddState() {
  return {
    title: '',
    description: '',
    isAdd: true,
    index: null,
  };
}

function buildUpdateState(title, description, index) {
  return {
    title: title,
    description: description,
    isAdd: false,
    index: index,
  };
}
