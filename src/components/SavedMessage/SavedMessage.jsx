import { useDispatch } from 'react-redux';
import * as actions from '@store/actions';
import { useNavigate } from 'react-router-dom';

import Button from '@components/Button';

import css from './SavedMessage.module.scss';

const SavedMessage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moveToMap = (e) => {
    e.preventDefault();
    dispatch(actions.setPage('map'));
    navigate('../map', { replace: true });
  };
  return (
    <div className={css.SavedMessage}>
      <h2>Профиль</h2>
      <p className={css.subtitle}>
        Платёжные данные обновлены. Теперь вы можете заказывать такси.
      </p>
      <Button
        text={'Перейти на карту'}
        type="button"
        onClick={(e) => moveToMap(e)}
      />
    </div>
  );
};

export default SavedMessage;
