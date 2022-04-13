import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { paymentSelector } from '@store/selectors';
import { profileInputs } from '@helper/inputs.config.js';

import './ProfileSettings.scss';

const ProfileSettings = ({ onSubmit }) => {
  const card = useSelector(paymentSelector);

  const { register, handleSubmit, watch } = useForm();
  const period = watch('expiryDate');
  const cardNumber = watch('cardNumber');

  const mappedInputs = profileInputs.map((input, index) => {
    return (
      <div className={`${input.name} inp-wrapper`} key={index}>
        <label htmlFor={input.name}>{input.label}</label>
        <input
          type={input.type}
          placeholder={input.placeholder}
          {...register(input.name, {
            required: input.required,
            value: card[input.name],
          })}
        />
      </div>
    );
  });
  const handleFormSubmit = (data, e) => {
    onSubmit(data, e);
  };
  return (
    <div className="ProfileSettings" data-testid="ProfileSettings">
      <h2>Профиль</h2>
      <p className="subtitle">Введите платежные данные</p>
      <form
        className="form"
        data-testid="form"
        onSubmit={(e) => handleSubmit(handleFormSubmit)(e)}
      >
        <div className="wrapper">
          <div className="inputs">{mappedInputs}</div>
          <div className="card">
            <div>
              <div className="card__icon card__icon--y"></div>
              <div className="card__period">{card.expiryDate || period}</div>
            </div>
            <div className="card__number">{card.cardNumber || cardNumber}</div>
            <div>
              <div className="card__icon card__icon--chip"></div>
              <div className="card__icon card__icon--masterCard"></div>
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Сохранить"
          {...register('submit')}
          className="button"
        />
      </form>
    </div>
  );
};

ProfileSettings.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProfileSettings;
