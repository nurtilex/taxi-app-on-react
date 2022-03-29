import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetInputs } from '@helper';

import { register } from '@store/actions';
import { registrationInputs as inputs } from '@helper/inputs.config.js';
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

  const isAuthenticated = useSelector(authSelectors.isAuthenticatedSelector);
  const errorMessage = useSelector(errorsSelectors.registrationErrorSelector);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (errorMessage || isAuthenticated) setLoading(false);
    if (errorMessage) alert(errorMessage);
    if (isAuthenticated) navigate(`../map`);
  }, [isAuthenticated, errorMessage, navigate]);

  const mappedInputs = inputs.map((input) => (
    <Input {...input} key={input.id} />
  ));
  const loader = <div>...Загрузка</div>;

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
    setLoading(true);
  };

  return (
    <div className={css.Registration}>
      <aside className={css.aside}>
        <Logo direction={'column'} />
      </aside>

      <main className={css.main}>
        <div className={css.formWrapper}>
          {isLoading ? (
            loader
          ) : (
            <>
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
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Registration;
