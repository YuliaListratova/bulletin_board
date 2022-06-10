import React from 'react';
import style from './MainPage.module.scss';
import ItemsList from '../ItemsList';
import MainLayout from '../../shared/layouts/MainLayout';

const MainPage = () => {
  return (
    <MainLayout>
      <ItemsList />
    </MainLayout>
  );
};

export default MainPage;
