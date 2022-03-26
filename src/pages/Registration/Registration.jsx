import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetInputs } from '@helper';

import { register } from '@store/actions';
import { inputsSelectors } from '@store/slices/inputs';
import { authSelectors } from '@store/slices/auth';
import { layoutActions } from '@store/slices/layout';
import { errorsSelectors, errorsActions } from '@store/slices/errors';

import Logo from '@components/Logo';
import Button from '@components/Button';
import Input from '@components/Input/Input';
import css from './Registration.module.scss';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputs = useSelector(inputsSelectors.registrationSelector);
  const isAuthenticated = useSelector(authSelectors.isAuthenticatedSelector);
  const errorMessage = useSelector(errorsSelectors.registrationErrorSelector);

  useEffect(() => {
    if (errorMessage) alert(errorMessage);
    if (isAuthenticated) navigate(`../map`);
  }, [isAuthenticated, errorMessage, navigate]);

  const mappedInputs = inputs.map((input) => (
    <Input {...input} key={input.id} />
  ));

  const handleBtnClick = (e, page) => {
    e.preventDefault();
    dispatch(layoutActions.setCurrentPage(page));
    dispatch(errorsActions.setRegistrationErrorMessage(null));
    navigate('../login', { replace: true });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, name, password } = e.target;
    const payload = {
      email: email.value,
      name: name.value.split(' ')[0],
      surname: name.value.split(' ')[1],
      password: password.value,
    };

    dispatch(register(payload));
    resetInputs([email, name, password]);
  };

  return (
    <div className={css.Registration}>
      <aside className={css.aside}>
        <Logo direction={'column'} />
      </aside>

      <main className={css.main}>
        <div className={css.formWrapper}>
          <h2>Регистрация</h2>
          <form
            action="#"
            className={css.form}
            onSubmit={(e) => handleFormSubmit(e)}
          >
            {mappedInputs}
            <Button text={'Зарегистрироваться'} type={'submit'} />
            <div className={css.link}>
              Уже зарегистрированны?&nbsp;
              <button
                type={'button'}
                onClick={(e) => handleBtnClick(e, 'login')}
              >
                Войти
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Registration;
