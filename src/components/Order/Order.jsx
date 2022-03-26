import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layoutSelectors } from '@store/slices/layout';

import * as actions from '@store/actions';

import Button from '@components/Button';
import AddressInput from '@components/AddressInput';
import TariffCard from '@components/TariffCard';

import DotSvg from '@assets/dot.svg';
import NavSvg from '@assets/nav-icon.svg';
import css from './Order.module.scss';

const Order = () => {
  const dispatch = useDispatch();
  const addresses = useSelector(layoutSelectors.addressesSelector);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const filterValues = (val) => addresses.filter(({ value }) => value !== val);
  const listForFromInput = useMemo(() => filterValues(to), [to, addresses]);
  const listForToInput = useMemo(() => filterValues(from), [from, addresses]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { from: fromInput, to: toInput } = e.target;
    const payload = { address1: fromInput.value, address2: toInput.value };
    dispatch(actions.route(payload));
  };
  const handleFromChange = (value) => setFrom(value);
  const handleToChange = (value) => setTo(value);

  return (
    <form className={css.Order} onSubmit={(e) => handleFormSubmit(e)}>
      <div className={css.inputs}>
        <AddressInput
          svgComponent={DotSvg}
          placeholder={'Откуда'}
          name="from"
          onValueChange={handleFromChange}
          options={listForFromInput}
        />
        <hr />
        <AddressInput
          svgComponent={NavSvg}
          placeholder={'Куда'}
          name="to"
          onValueChange={handleToChange}
          options={listForToInput}
        />
      </div>
      <div className={css.confirming}>
        <div className={css.rates}>
          <TariffCard type="standard" price="150 ₽" />
          <TariffCard type="premium" price="150 ₽" />
          <TariffCard type="business" price="150 ₽" />
        </div>
        <Button text="Заказать" type="submit" />
      </div>
    </form>
  );
};

export default Order;
