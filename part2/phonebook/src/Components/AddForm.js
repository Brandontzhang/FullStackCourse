import React from 'react';
import PropTypes from 'prop-types';

const AddForm = ({addName, newName, setNewName, newNumber, setNewNumber}) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={(e) => {
          setNewName(e.target.value);
        }} />
      </div>
      <div>
        number: <input value={newNumber} onChange={(e) => {
          setNewNumber(e.target.value);
        }} />
      </div>
      <div>
        <button type="submit">
          add
        </button>
      </div>
    </form>
  );
};

AddForm.propTypes = {
  addName: PropTypes.func,
  newName: PropTypes.string,
  setNewName: PropTypes.func,
  newNumber: PropTypes.string,
  setNewNumber: PropTypes.func,
};

export default AddForm;
