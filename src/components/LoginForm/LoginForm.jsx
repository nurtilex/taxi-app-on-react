import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { loginInputs } from '@helper/inputs.config.js';
import { auth } from '../../store/actions';

import Input from '@components/Input';
import styles from './LoginForm.module.scss';

const LoginForm = ({ onFormSubmit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, password] = loginInputs.map((input) => {
    return {
      name: input.name,
      label: input.label,
      register,
      type: input.type,
      required: input.required,
      error: errors[input.name],
      placeholder: input.placeholder,
    };
  });
  const onSubmit = (data) => {
    dispatch(auth(data));
    onFormSubmit();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input {...email} />
      <Input {...password} />
      <button className={styles.helpButton} onClick={() => {}}>
        Забыли пароль?
      </button>
      <input
        type="submit"
        value="Войти"
        {...register('submit')}
        className={styles.button}
      />
      <div className={styles.link}>
        Новый пользователь?{' '}
        <button onClick={() => navigate('../registration')}>Регистрация</button>
      </div>
    </form>
  );
};

export default LoginForm;
