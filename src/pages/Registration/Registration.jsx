import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  inputsSelector,
  isAuthenticatedSelector,
  errorMessagesSelector,
} from '@store/selectors';
import * as actions from '@store/actions';
import { useNavigate } from 'react-router-dom';
import { resetInputs } from '@helper';
import css from './Registration.module.scss';

import Logo from '@components/Logo';
import Button from '@components/Button';
import Input from '@components/Input/Input';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { registration: inputs } = useSelector(inputsSelector);
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const { registrationErrorMessage } = useSelector(errorMessagesSelector);

  useEffect(() => {
    if (registrationErrorMessage) alert(registrationErrorMessage);
    if (isAuthenticated) navigate(`../map`);
  }, [isAuthenticated, registrationErrorMessage, navigate]);

  const mappedInputs = inputs.map((input) => (
    <Input {...input} key={input.id} />
  ));

  const handleBtnClick = (e, page) => {
    e.preventDefault();
    dispatch(actions.setPage(page));
    navigate('../login', { replace: true });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, name: nameInput, password } = e.target;
    const [name, surname] = nameInput.value.split(' ');
    const payload = {
      email: email.value,
      name,
      surname,
      password: password.value,
    };

    dispatch(actions.register(payload));
    resetInputs([email, nameInput, password]);
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
