import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { usersUrl } from '../../api/constats';
import { IUsers } from '../../interfaces/IUsers';
import UsersPageComponent from './components/UsersPageComponent';

const UsersPage = () => {
  const [usersData, setUsersData] = useState<IUsers[] | null>(null);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const getData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setUsersData(data);
  };

  useEffect(() => {
    if (pathname === '/') {
      navigate('/users_page');
    }
    if (!search) {
      navigate('?page1');
    }
  }, [pathname, navigate, search]);

  useEffect(() => {
    setTimeout(() => {
      getData(usersUrl);
    }, 1000);
  }, []);

  return !usersData ? <div>Загрузка...</div> : <UsersPageComponent usersDataAttr={usersData} />;
};

export default UsersPage;
