import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { navbarInputs as inputs } from '@helper/inputs.config.js';
import { layoutActions } from '@store/slices/layout';
import * as actions from '@store/actions';

import css from './NavBar.module.scss';

const NavBar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavClick = (toWhere) => {
    if (toWhere === 'logout') {
      dispatch(actions.preLogout());
    } else {
      dispatch(layoutActions.setCurrentPage(toWhere));
    }

    navigate(`../${toWhere}`, { replace: true });
  };

  return (
    <ul className={css.list} data-testid="navbar ul">
      {inputs.map(({ name, link, id }) => {
        return (
          <li key={id}>
            <button
              className={`${css.listItemButton} ${
                pathname === `/${link}` && css.active
              }`}
              onClick={() => handleNavClick(link)}
            >
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
