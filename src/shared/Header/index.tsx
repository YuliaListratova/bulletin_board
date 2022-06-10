import React from 'react';
import style from './Header.module.scss';
import logo from '../../img/logo.svg';
import profile from '../../img/profile.svg';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.page_header}>
        <img src={logo} alt="My logo" />
        <div className={style.btn_profile}>
          <img src={profile} alt="profile" />
          <p className={style.profile}>Профиль</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
