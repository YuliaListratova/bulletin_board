import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from '../UsersPage.module.scss';

interface IProps {
  id: number;
  title: string;
  category: string;
}

const UserCard: FC<IProps> = ({ id, title, category }) => {
  return (
    <div className={style.user_card}>
      <p className={style.user_card_title}>{title}</p>
      <p className={style.user_card_category}>{category}</p>
      <p className={style.user_card_data}>12 апреля 2022</p>
      <p className={style.user_card_publication}>Да</p>
      <Link className={style.user_card_edit} to={`${id}`}>
        |||
      </Link>
    </div>
  );
};

export default UserCard;
