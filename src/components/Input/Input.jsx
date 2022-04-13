import PropTypes from 'prop-types';

import css from './Input.module.scss';

const Input = ({
  name,
  label,
  register,
  type,
  required = true,
  error = {},
  placeholder = '',
  classes = null
}) => {
  return (
    <>
      <label htmlFor={name} className={classes || css.label}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={classes || css.input}
        {...register(name, { required })}
      />
      {error?.type === 'required' && (
        <p className={css.error}>Поле {name} обязательно</p>
      )}
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.object,
  placeholder: PropTypes.string,
};

export default Input;
