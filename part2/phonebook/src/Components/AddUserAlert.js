import React from 'react';
import '../css/Alert.css';
import PropTypes from 'prop-types';

const AddUserAlert = ({name, error}) => {
  return (
    <div id={error ? 'alert' : 'error'}>
      {error ? <h1>Added {name} </h1> : <h1> {name} was already removed</h1> }
    </div>
  );
};

AddUserAlert.propTypes = {
  name: PropTypes.string,
  error: PropTypes.string,
};

export default AddUserAlert;
