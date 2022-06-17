import React, { FC, useState } from 'react';
import { IUsers } from '../../../interfaces/IUsers';
import Button from '../../../shared/Button';
import Pagination from '../../../shared/Pagination';
import Search from '../../../shared/Search';
import style from '../UsersPage.module.scss';
import UserCard from './UserCard';

interface IProps {
  usersDataAttr: IUsers[];
}

const UsersPageComponent: FC<IProps> = ({ usersDataAttr }) => {
  const [chartItemsAmount, setChartItemsAmount] = useState(0);

  const handleAddItemToChart = () => {
    if (chartItemsAmount < 5) {
      setChartItemsAmount(chartItemsAmount + 1);
    }
  };

  return (
    <div>
      <div className={style.head}>
        <div>
          <h1>Объявления</h1>
          <p>Всего: 145</p>
        </div>
        <Button btnText="Добавить +" handleClick={handleAddItemToChart} />
      </div>
      <div className={style.block_search}>
        <Search text="Найти объявление" />
        <Pagination limit={3} itemsAmount={usersDataAttr.length} />
      </div>
      <div className={style.user_list}>
        {usersDataAttr.length ? (
          usersDataAttr.map((user) => {
            const { id, name, email } = user;
            return (
              <React.Fragment key={`UserId:${id}`}>
                <UserCard id={id} name={name} email={email} />
              </React.Fragment>
            );
          })
        ) : (
          <div>Пользователи не найдены.</div>
        )}
      </div>
    </div>
  );
};

export default UsersPageComponent;
