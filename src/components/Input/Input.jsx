import PropTypes from 'prop-types';

import css from './Input.module.scss';

const Input = ({
  type,
  name,
  placeholder,
  text,
  required = false,
  onChange = () => {},
  value = '',
  pattern,
  testId = ''
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className={css.label}
        data-testid={testId}
      >
        {text}
      </label>
      <input
        required={required}
        pattern={pattern}
        type={type}
        name={name}
        placeholder={placeholder}
        className={css.input}
        onChange={(e) => onChange(e)}
        defaultValue={value}
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  text: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
