import React, { useState } from 'react';
import Button from '../../shared/Button';
import style from './ItemList.module.scss';

const ItemsList = () => {
  const [chartItemsAmount, setChartItemsAmount] = useState(0);
  const [name, setName] = useState('');

  const handleAddItemToChart = () => {
    if (chartItemsAmount < 5) {
      setChartItemsAmount(chartItemsAmount + 1);
    }
  };

  const chartInfo = chartItemsAmount ? `Количество товаров: ${chartItemsAmount}` : 'Корзина пуста';
  const isChartFull = chartItemsAmount === 5;

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className={style.items_list__wrapper}>
      <div>
        <p>{chartInfo}</p>

        {isChartFull && <p>Корзина заполнена</p>}
        {/* <button type="button" onClick={handleAddItemToChart}>
          Добавить в корзину
        </button> */}
        <Button btnText="Добавить в корзину" handleClick={handleAddItemToChart} />
      </div>

      <div>
        <p>{name || 'Укажите имя'}</p>
        <input type="text" onChange={handleNameInput} />
      </div>
    </div>
  );
};

export default ItemsList;
