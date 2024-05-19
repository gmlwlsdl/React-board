import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ children, checked, onChange, disabled }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
        disabled={disabled}
      />
      {children}
    </label>
  );
}

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Checkbox;
