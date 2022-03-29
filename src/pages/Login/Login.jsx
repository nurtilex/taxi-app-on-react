import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetInputs } from '@helper';

import { errorsSelectors, errorsActions } from '@store/slices/errors';
import * as actions from '@store/actions';
import { layoutActions } from '@store/slices/layout';
import { authSelectors } from '@store/slices/auth';
import { loginInputs } from '@helper/inputs.config.js';

import Logo from '@components/Logo';
import Button from '@components/Button';
import Input from '@components/Input/Input';
import css from './Login.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(authSelectors.isAuthenticatedSelector);
  const errorMessage = useSelector(errorsSelectors.loginErrorSelector);
  useEffect(() => {
    if (errorMessage) alert(errorMessage);
    if (isAuthenticated) navigate(`../map`);
  }, [isAuthenticated, errorMessage, navigate]);

  const mappedInputs = loginInputs.map((input) => (
    <Input {...input} key={input.id} />
  ));
  const handleRegisterClick = (e, page) => {
    e.preventDefault();
    dispatch(layoutActions.setCurrentPage(page));
    dispatch(errorsActions.setLoginErrorMessage(null));
    navigate('../registration', { replace: true });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    dispatch(actions.auth({ email: email.value, password: password.value }));

    setTimeout(() => resetInputs([email, password]), 500);
  };

  return (
    <div className={css.Login}>
      <aside className={css.aside}>
        <Logo direction={'column'} />
      </aside>

      <main className={css.main}>
        <div className={css.formWrapper}>
          <h2>Войти</h2>
          <form
            action="#"
            className={css.form}
            onSubmit={(e) => handleFormSubmit(e)}
          >
            {mappedInputs}
            <div className={css.helpWrapper}>
              <a href="##" className={css.helpButton}>
                Забыли пароль?
              </a>
            </div>
            <Button text={'Войти'} type={'submit'} />
            <div className={css.link}>
              Новый пользователь?{' '}
              <button onClick={(e) => handleRegisterClick(e, 'registration')}>
                Регистрация
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
