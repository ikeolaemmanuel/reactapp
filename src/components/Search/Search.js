// InputField.js
import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({ type, value, onChange, placeholder }) => {
  return (
    <input
    className='box'
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Search.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Search;