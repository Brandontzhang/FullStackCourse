import React from 'react';
import PropTypes from 'prop-types';

const Display = ({persons, newFilter, deletePerson}) => {
  const filterArray = (persons) => (
    persons.filter((p) =>
      p.name.toUpperCase().includes(newFilter.toUpperCase()))
  );

  return (
    <ul>
      {filterArray(persons).map((p) => (
        <li key={p.name}>
          {p.name} {p.number}
          <button onClick={() => deletePerson(p._id)}>Delete</button>
        </li>),
      )}
    </ul>
  );
};

Display.propTypes = {
  persons: PropTypes.array,
  newFilter: PropTypes.string,
  deletePerson: PropTypes.func,
};

export default Display;
