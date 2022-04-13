import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { isAuthenticatedSelector, loginErrorSelector } from '@store/selectors';

import Logo from '@components/Logo';
import LoginForm from '@components/LoginForm';
import styles from './Login.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const error = useSelector(loginErrorSelector);

  useEffect(() => {
    if (error || isAuthenticated) setLoading(false);
    if (error) alert(error);
    if (isAuthenticated) navigate(`../map`);
  }, [isAuthenticated, error, navigate]);
  
  const onFormSubmit = () => {
    setLoading(true);
  };
  const loader = <p>...Загрузка</p>;
  const form = (
    <>
      <h2>Войти</h2>
      <LoginForm onFormSubmit={onFormSubmit} />
    </>
  );
  return (
    <div className={styles.Login}>
      <aside className={styles.aside}>
        <Logo direction={'column'} />
      </aside>

      <main className={styles.main}>
        <div className={styles.formWrapper}>{isLoading ? loader : form}</div>
      </main>
    </div>
  );
};

export default Login;
