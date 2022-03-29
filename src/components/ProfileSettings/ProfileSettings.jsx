import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { userSelectors } from '@store/slices/user';
import { profileInputs } from '@helper/inputs.config.js';

import Input from '@components/Input';
import Button from '@components/Button';
import './ProfileSettings.scss';


const ProfileSettings = ({ onSubmit }) => {
  const card = useSelector(userSelectors.paymentSelector);

  const [period, setPeriod] = useState(card?.expiryDate || '');
  const [cardNumber, setCardNumber] = useState(card?.cardNumber || '');

  const handleInputsUpdate = (e) => {
    const { name, value } = e.target;
    if (name === 'expiryDate') setPeriod(value);
    if (name === 'cardNumber') setCardNumber(value);
  };

  const mappedInputs = profileInputs.map((input, index) => {
    return (
      <div className={`${input.name} inp-wrapper`} key={index}>
        <Input
          {...input}
          onChange={handleInputsUpdate}
          value={card?.[input.name] || ''}
        />
      </div>
    );
  });

  return (
    <div className="ProfileSettings" data-testid="ProfileSettings">
      <h2>Профиль</h2>
      <p className="subtitle">Введите платежные данные</p>
      <form className="form" data-testid="form" onSubmit={(e) => onSubmit(e)}>
        <div className="wrapper">
          <div className="inputs">{mappedInputs}</div>
          <div className="card">
            <div>
              <div className="card__icon card__icon--y"></div>
              <div className="card__period">{period}</div>
            </div>
            <div className="card__number">{cardNumber}</div>
            <div>
              <div className="card__icon card__icon--chip"></div>
              <div className="card__icon card__icon--masterCard"></div>
            </div>
          </div>
        </div>
        <Button text={'Сохранить'} type={'submit'} />
      </form>
    </div>
  );
};

ProfileSettings.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProfileSettings;
