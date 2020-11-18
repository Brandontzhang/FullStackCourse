import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({newFilter, setNewFilter}) => (
  <div>
        filter shown with <input value={ newFilter } onChange={(e) => {
      setNewFilter(e.target.value);
    }} />
  </div>
);

Filter.propTypes = {
  newFilter: PropTypes.string,
  setNewFilter: PropTypes.func,
};

export default Filter;
