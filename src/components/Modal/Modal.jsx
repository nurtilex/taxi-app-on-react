import { useNavigate } from 'react-router-dom';

import Button from '@components/Button';
import css from './Modal.module.scss';

const Modal = () => {
  const navigate = useNavigate();

  return (
    <div className={css.modalWrapper}>
      <div className={css.Modal}>
        <h3 className={css.text}>Пожалуйста, заполните данные вашей карты</h3>
        <Button
          type="button"
          onClick={() => navigate('/profile', { replace: true })}
          text="Перейти"
        />
      </div>
    </div>
  );
};

export default Modal;
