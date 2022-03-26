import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticationTokenSelector } from '@store/selectors';
import { payment } from '@store/actions';
import css from './Profile.module.scss';

import Header from '@components/Header';
import ProfileSettings from '@components/ProfileSettings';
import SavedMessage from '@components/SavedMessage';

const Profile = () => {
  const dispatch = useDispatch();
  const [isSaved, setSaved] = useState(false);
  const authToken = useSelector(authenticationTokenSelector);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, cardNumber, period, cvc } = e.target;
    const formData = {
      cardName: name.value,
      cardNumber: cardNumber.value,
      expiryDate: period.value,
      cvc: cvc.value,
    };
    setTimeout(() => setSaved((prev) => !prev), 500);
    dispatch(payment({ method: 'post', token: authToken, payment: formData }));
  };

  const form = <ProfileSettings onSubmit={handleFormSubmit} />;
  const message = <SavedMessage />;

  return (
    <div className={css.Profile}>
      <Header />
      <main className={css.main}>{!isSaved ? form : message}</main>
    </div>
  );
};

export default Profile;
