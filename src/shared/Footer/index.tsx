import React from 'react';
import style from './Footer.module.scss';
import logo from '../../img/logo.svg';
import profile from '../../img/profile.svg';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.page_footer}>
        <div className={style.footer_text}>
          <img src={logo} alt="My logo" className={style.footer_text_img} />
          <div className={style.footer_text_item}>Доска объявлений </div>
        </div>
        <div className={style.copyright_sign}>© ООО «Доска диджитал», 2022</div>
      </div>
    </div>
  );
};

export default Footer;
