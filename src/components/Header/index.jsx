import React from 'react';
// import { Grid } from '@material-ui/core';

import styles from './header.module.css';
import MenuIcon from '../../assets/menu-light.svg';

const Header = () => {
  return (
    <>
      <nav id={styles['header-nav']} className="container-fluid py-2">
        <h6 className="text-left"><span className={styles.name}>Juan Carlos&nbsp;</span>Aliaga Del Bosque</h6>
        <button className="btn small">
          <img src={MenuIcon}/>
        </button>
      </nav>
      {/* <nav id="header" className="container-fluid py-2 navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand header-h1"><span>JUAN CARLOS&nbsp;</span>ALIAGA DEL BOSQUE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Work</a>
              <a className="nav-link" href="#">Media</a>
              <a className="nav-link" href="#">News</a>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  )
};

export default Header;
