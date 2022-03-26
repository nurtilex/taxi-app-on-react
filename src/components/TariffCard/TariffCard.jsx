import PropTypes from 'prop-types';

import css from './TariffCard.module.scss';

const TariffCard = ({ type, price, onClick }) => {
  const names = {
    standard: 'Стандарт',
    premium: 'Премиум',
    business: 'Бизнес',
  };
  const img = require(`../../assets/order-${type}.png`);
  return (
    <div className={css.TariffCard} onClick={onClick}>
      <div className={css.type}>{names[type]}</div>
      <span className={css.priceSpan}>Стоимость</span>
      <div className={css.price}>{price}</div>
      <div className={css.carImg}>
        <img src={img} alt="car" />
      </div>
    </div>
  );
};

TariffCard.propTypes = {
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default TariffCard;
