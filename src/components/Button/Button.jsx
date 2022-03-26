import React from 'react';
import PropTypes from 'prop-types';

import css from './Button.module.scss';

const Button = ({ text, type = 'button', onClick }) => {
  return (
    <button type={type} className={css.Button} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
