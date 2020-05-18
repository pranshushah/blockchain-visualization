import React from 'react';
import Styles from './NavBar.module.css';
import NavigationLink from './NavigationLink/NavigationLink';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={Styles.navContainer}>
      <ul className={Styles.navLinks}>
        <NavigationLink>
          <NavLink to='/hash' exact activeClassName={Styles.active}>
            HASH
          </NavLink>
        </NavigationLink>
        <NavigationLink>
          <NavLink to='/block' exact activeClassName={Styles.active}>
            BLOCK
          </NavLink>
        </NavigationLink>
        <NavigationLink>
          <NavLink to='/blockchain' exact activeClassName={Styles.active}>
            BLOCKCHAIN
          </NavLink>
        </NavigationLink>
        <NavigationLink>
          <NavLink to='/distributed' exact activeClassName={Styles.active}>
            DISTRIBUTED BLOCKCHAIN
          </NavLink>
        </NavigationLink>
        <NavigationLink>
          <NavLink to='/coinbase' exact activeClassName={Styles.active}>
            COINBASE
          </NavLink>
        </NavigationLink>
      </ul>
    </nav>
  );
}

export default Navbar;
