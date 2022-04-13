import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { authSelectors } from '@store/slices/auth';
import { payment } from '@store/actions';

import Header from '@components/Header';
import ProfileSettings from '@components/ProfileSettings';
import SavedMessage from '@components/SavedMessage';
import css from './Profile.module.scss';

const Profile = () => {
  const dispatch = useDispatch();
  const [isSaved, setSaved] = useState(false);
  const token = useSelector(authSelectors.tokenSelector);

  const handleFormSubmit = (data, e) => {
    e.preventDefault();

    setTimeout(() => setSaved((prev) => !prev), 500);
    dispatch(payment({ method: 'post', token, payment: data }));
  };

  return (
    <div className={css.Profile}>
      <Header />
      <main className={css.main}>
        {!isSaved && <ProfileSettings onSubmit={handleFormSubmit} />}
        {isSaved && <SavedMessage />}
      </main>
    </div>
  );
};

export default Profile;
