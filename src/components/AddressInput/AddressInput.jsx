import { useRef } from 'react';
import PropTypes from 'prop-types';

import css from './AddressInput.module.scss';
import Arrow from '@assets/arrow-down.svg';

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
        list={`${name}-suggestions`}
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
