// Core
import { FC } from 'react';

import { NavLink } from '../../elements/NavLink';
import { ThemeToggle } from '../ThemeToggle';
import { useChangeLocale } from '../../helpers/changeLocale';

// Styles
import Styles from './styles/index.module.scss';

type NavbarType = {
  theme: string;
};

export const Navbar: FC<NavbarType> = ({ theme }) => {
  const { changeLocale } = useChangeLocale();

  return (
    <header className = { Styles.container }>
      <div className={Styles.logoWrapper}>
        <p>
          ST
        </p>
      </div>
      <nav className={Styles.mainMenu}>
        <ul>
          <li>
            <NavLink href='/customers' activeClassName={Styles.active}>Customers</NavLink>
          </li>
          <li>
            <NavLink href='/products' activeClassName={Styles.active}>Products</NavLink>
          </li>
          <li>
            <NavLink href='/about' activeClassName={Styles.active}>About</NavLink>
          </li>
        </ul>
      </nav>
      <div className={Styles.switchersWrapper}>
        <div className={Styles.langSwitcher}>
          <button onClick = { changeLocale('uk') }>UK</button>
          <button onClick = { changeLocale('en') }>EN</button>
        </div>
        <div className={Styles.themeSwitcher}>
          <ThemeToggle theme = { theme } />
        </div>
      </div>
    </header>
  );
};
