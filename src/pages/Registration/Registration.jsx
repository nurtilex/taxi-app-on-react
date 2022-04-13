import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { register } from '@store/actions';
import {
  isAuthenticatedSelector,
  registrationErrorSelector,
} from '@store/selectors';
import { layoutActions } from '@store/slices/layout';
import { errorsActions } from '@store/slices/errors';

import Logo from '@components/Logo';
import RegistrationForm from '@components/RegistrationForm';
import css from './Registration.module.scss';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const errorMessage = useSelector(registrationErrorSelector);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (errorMessage || isAuthenticated) setLoading(false);
    if (errorMessage) alert(errorMessage);
    if (isAuthenticated) navigate(`../map`);
  }, [isAuthenticated, errorMessage, navigate]);

  const handleBtnClick = (e, page) => {
    e.preventDefault();
    dispatch(layoutActions.setCurrentPage(page));
    dispatch(errorsActions.setRegistrationErrorMessage(null));
    navigate('../login', { replace: true });
  };
  const onFormSubmit = () => {
    setLoading(true);
  };
  const loader = <div>...Загрузка</div>;
  const form = (
    <>
      <h2>Регистрация</h2>
      <RegistrationForm onFormSubmit={onFormSubmit} />
    </>
  );

  return (
    <div className={css.Registration}>
      <aside className={css.aside}>
        <Logo direction={'column'} />
      </aside>

      <main className={css.main}>
        <div className={css.formWrapper}>{isLoading ? loader : form}</div>
      </main>
    </div>
  );
};

export default Registration;
