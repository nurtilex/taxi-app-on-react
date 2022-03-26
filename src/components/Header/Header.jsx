import css from './Header.module.scss';
import Logo from '@components/Logo';
import NavBar from '@components/NavBar';

const Header = () => {
  return (
    <div className={css.Header}>
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
