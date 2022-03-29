import { useRef } from 'react';
import PropTypes from 'prop-types';

import Arrow from '@assets/arrow-down.svg';
import css from './AddressInput.module.scss';

const AddressInput = ({
  svgComponent,
  placeholder = '',
  name,
  options = [],
  testId = '',
  onValueChange = () => {
    console.log('onValueChange parameter is empty');
  },
}) => {
  const inputRef = useRef(null);
  const mappedOptions = options.map(({ id, value }) => (
    <option key={id}>{value}</option>
  ));
  const handleClearButton = () => {
    inputRef.current.value = '';
    onValueChange('');
  };

  const handleInputChange = (e) => {
    const isValid = options.some((opt) => opt.value === e.target.value);
    if (!isValid) {
      e.target.value = '';
      return
    }
    onValueChange(e.target.value);
  };

  return (
    <div className={css.AddressInput} data-testid={testId}>
      <img src={svgComponent} alt="icon" className={css.icon} />
      <datalist id={`suggestions-for-${name}`}>{mappedOptions}</datalist>
      <input
        type="text"
        name={name}
        ref={inputRef}
        autoComplete="on"
        list={`suggestions-for-${name}`}
        className={css.input}
        placeholder={placeholder}
        onChange={(e) => handleInputChange(e)}
      ></input>
      <button
        type="button"
        className={`${css.btn} ${css.clearButton}`}
        onClick={handleClearButton}
      >
        +
      </button>

      <div className={css.separator}></div>
      <button type="button" className={`${css.btn} ${css.openButton}`}>
        <img src={Arrow} alt="icon " />
      </button>
    </div>
  );
};

AddressInput.propTypes = {
  svgComponent: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string,
  options: PropTypes.array,
  onValueChange: PropTypes.func,
};

export default AddressInput;
