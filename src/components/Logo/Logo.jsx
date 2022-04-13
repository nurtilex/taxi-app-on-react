import PropTypes from 'prop-types';
import { ReactComponent as RLogo } from '@assets/y-icon.svg';
import { ReactComponent as TaxiLogo } from '@assets/lofttaxi.svg';

import css from './Logo.module.scss';

const Logo = ({ direction = 'row', id = '' }) => (
  <div
    className={css.Logo}
    style={{ flexDirection: direction }}
    data-testid={id}
  >
    <RLogo />
    <TaxiLogo />
  </div>
);

Logo.propTypes = {
  direction: PropTypes.string,
};

export default Logo;
