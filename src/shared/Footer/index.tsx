import React from 'react';
import style from './Footer.module.scss';
import { SvgSelector } from '../Svg.Selector';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.page_footer}>
        <div className={style.footer_text}>
          <div className={style.footer_text_img}>
            <SvgSelector id="logo" />
          </div>
          <div className={style.footer_text_item}>Доска объявлений </div>
        </div>
        <div className={style.copyright_sign}>© ООО «Доска диджитал», 2022</div>
      </div>
    </div>
  );
};

export default Footer;
