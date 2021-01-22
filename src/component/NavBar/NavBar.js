import React, { useState } from 'react';
import Styles from './NavBar.module.css';
import NavigationLink from './NavigationLink/NavigationLink';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [burgerClicked, setBurgerClicked] = useState(false);

  return (
    <nav className={Styles.nav}>
      <div
        className={Styles.humburgercontainer}
        onClick={() => {
          setBurgerClicked((val) => !val);
        }}
      >
        <div
          className={
            burgerClicked
              ? [Styles.bar, Styles.changeLine].join(' ')
              : Styles.bar
          }
        />
        <div className={Styles.bar} />
        <div
          className={
            burgerClicked
              ? [Styles.bar, Styles.changeLine].join(' ')
              : Styles.bar
          }
        />
      </div>
      <ul
        className={
          burgerClicked
            ? [Styles.navLinks, Styles.showInmobile].join(' ')
            : Styles.navLinks
        }
      >
        <NavigationLink>
          <NavLink
            className={Styles.link}
            to='/hash'
            exact
            activeClassName={Styles.active}
          >
            HASH
          </NavLink>
        </NavigationLink>
        <NavigationLink>
          <NavLink
            to='/block'
            className={Styles.link}
            exact
            activeClassName={Styles.active}
          >
            BLOCK
          </NavLink>
        </NavigationLink>
        <NavigationLink>
          <NavLink
            className={Styles.link}
            to='/blockchain'
            exact
            activeClassName={Styles.active}
          >
            BLOCKCHAIN
          </NavLink>
        </NavigationLink>
        <NavigationLink>
          <NavLink
            className={Styles.link}
            to='/distributed'
            exact
            activeClassName={Styles.active}
          >
            DISTRIBUTED BLOCKCHAIN
          </NavLink>
        </NavigationLink>
        <NavigationLink>
          <NavLink
            className={Styles.link}
            to='/coinbase'
            exact
            activeClassName={Styles.active}
          >
            COINBASE
          </NavLink>
        </NavigationLink>
      </ul>
    </nav>
  );
}

export default Navbar;
