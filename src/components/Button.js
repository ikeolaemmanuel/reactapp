// Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, children, onClick, disabled }) => {
  const buttonStyle = {
    backgroundColor: color,
    padding: '10px 20px',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%'
  };

  if (disabled) {
    // Modify button style when disabled
    buttonStyle.opacity = 0.5;
    buttonStyle.cursor = 'not-allowed';
  }

  return (
    <button style={buttonStyle} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default Button;
