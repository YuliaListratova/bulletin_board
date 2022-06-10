import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarConfig } from './sidebarConfig';
import style from './Sidebar.module.scss';
import a_icon from '../../img/a_icon.svg';
import exit_icon from '../../img/exit_icon.svg';
// import icon_ads from '../../img/icon_ads.svg';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.sidebar_wrapper}>
      <div className={style.super_admin_block}>
        <img src={a_icon} alt="a_icon" />
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
              <img src={menuItem.img} alt="icon" />
              <li className={style.sidebar_menu_name}>{menuItem.name}</li>
            </Link>
          );
        })}
      </ul>
      <div className={style.exit}>
        <img src={exit_icon} alt="" />
        <p className={style.exit_text}>Выход</p>
      </div>
    </div>
  );
};

export default Sidebar;
