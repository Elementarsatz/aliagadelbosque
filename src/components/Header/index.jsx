import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styles from './header.module.css';
import MenuIcon from '../../assets/menu-light.svg';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <nav id={styles['header-nav']} className="container-fluid py-2 navbar">
      <h6 className="text-left"><span className={styles.name}>Juan Carlos&nbsp;</span>Aliaga Del Bosque</h6>
      <button className={styles['menu-btn']}>
        <img src={MenuIcon} onClick={() => setSidebarOpen(!sidebarOpen)} />
      </button>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </nav>
  )
};

export default Header;
