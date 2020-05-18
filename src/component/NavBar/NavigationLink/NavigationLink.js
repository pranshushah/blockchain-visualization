import React from 'react';
import Styles from './NavigationLink.module.css';

function NavigationLink({ children }) {
  return <li className={Styles.linkContainer}>{children}</li>;
}

export default NavigationLink;
