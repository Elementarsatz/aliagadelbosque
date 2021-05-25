import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styles from './header.module.css';
import MenuIcon from '../../assets/menu-light.svg';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = (toggleValue) => {
    const body = document.getElementsByTagName('body')[0];
    if (sidebarOpen) {
      body.classList.remove('no-scroll');
    } else {
      body.classList.add('no-scroll');
    }
    setSidebarOpen(toggleValue);
  }
  return (
    <nav id={styles['header-nav']} className="container-fluid py-2 navbar">
      <h6 className="text-left"><span className={styles.name}>Juan Carlos&nbsp;</span>Aliaga Del Bosque</h6>
      <button className={styles['menu-btn']}>
        <img src={MenuIcon} onClick={() => toggleSidebar(!sidebarOpen)} />
      </button>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={toggleSidebar} />
    </nav>
  )
};

export default Header;
