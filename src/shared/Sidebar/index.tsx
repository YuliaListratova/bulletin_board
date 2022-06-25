import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarConfig } from './sidebarConfig';
import style from './Sidebar.module.scss';
import { SvgSelector } from '../Svg.Selector';
import icon_ads from '../../img/icon_ads.svg';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.sidebar_wrapper}>
      <div className={style.super_admin_block}>
        <SvgSelector id="a_icon" />
        <div className={style.super_admin_text}>
          <p className={style.super_admin}>Super admin</p>
          <p className={style.admin}>Админ-меню</p>
        </div>
      </div>
      <ul className={style.sidebar_menu}>
        {sidebarConfig.map((menuItem) => {
          const isActiveClassName = pathname.includes(menuItem.path) ? style.active : '';
          return (
            <Link
              key={menuItem.id}
              to={menuItem.path}
              className={`${isActiveClassName} ${style.sidebar_menu_item}`}>
              <div className={style.icon}>
                <svg className={style.some_css_class}>
                  <use xlinkHref={`${icon_ads}#${menuItem.img}`} />
                </svg>
              </div>
              <li className={style.sidebar_menu_name}>{menuItem.name}</li>
            </Link>
          );
        })}
      </ul>
      <div className={style.exit}>
        <SvgSelector id="exit_icon" />
        <p className={style.exit_text}>Выход</p>
      </div>
    </div>
  );
};

export default Sidebar;
