import { useSelector, useDispatch } from 'react-redux';
// import { currentPageSelector, inputsSelector } from '@store/selectors';
import { layoutSelectors, layoutActions } from '@store/slices/layout';
import { inputsSelectors } from '@store/slices/inputs';
import * as actions from '@store/actions';
import { useNavigate } from 'react-router-dom';
import css from './NavBar.module.scss';

const NavBar = () => {
  const currentPage = useSelector(layoutSelectors.currentPageSelector);
  const inputs = useSelector(inputsSelectors.navbarSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavClick = (toWhere) => {
    if (toWhere === 'login') {
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
                currentPage === link && css.active
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
