import React from 'react';
import style from './Header.module.scss';
import { SvgSelector } from '../Svg.Selector';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.page_header}>
        <SvgSelector id="logo" />
        <div className={style.btn_profile}>
          <SvgSelector id="profile" />
          <p className={style.profile}>Профиль</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
