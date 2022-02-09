import React, { useState } from 'react';
import './AddEdit.css';

export default function AddEdit({ onSubmit, input, onInputChange }) {
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const onClick = () => {
    if (input.title.length == 0) setTitleError(true);
    else if (input.description.length == 0) setDescriptionError(true);
    else {
      onSubmit();
      setTitleError(false);
      setDescriptionError(false);
    }
  };
  return (
    <div className="add-edit">
      <div className="add-edit-fields">
        <input
          type="Text"
          className={'todo-input ' + (titleError && 'input-error')}
          value={input.title}
          placeholder="Title"
          onChange={(e) => onInputChange({ ...input, title: e.target.value })}
        />
        <input
          type="Text"
          className={'todo-input ' + (descriptionError && 'input-error')}
          value={input.description}
          placeholder="Description"
          onChange={(e) =>
            onInputChange({ ...input, description: e.target.value })
          }
        />
      </div>
      <input
        className="add-btn"
        type="button"
        value={input.isAdd ? 'Add' : 'Save'}
        onClick={onClick}
      />
    </div>
  );
}
