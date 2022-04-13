import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { register as registerAction } from '../../store/actions';
import { registrationInputs } from '@helper/inputs.config.js';

import Input from '@components/Input';
import styles from './RegistrationForm.module.scss';

const RegistrationForm = ({ onFormSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [email, name, password] = registrationInputs.map((input) => {
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
    
    const { email, password } = data;
    const [name, surname] = data.name.split(' ');
    const payload = { email, name, surname, password };
    console.log(payload);
    dispatch(registerAction(payload));
    onFormSubmit();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input {...email} />
      <Input {...name} />
      <Input {...password} />
      <button className={styles.helpButton}>Забыли пароль?</button>
      <input
        type="submit"
        value="Войти"
        {...register('submit')}
        className={styles.button}
      />
      <div className={styles.link}>
        Уже зарегистрированны?{' '}
        <button onClick={() => navigate('../login')}>Войти</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
