import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './Layout';
import LoginPage from '../features/Auth/LoginPage';
import RegisterPage from '../features/Auth/RegisterPage';
import { useAppDispatch } from '../store';
import MainPage from '../features/MainPage/MainPage';
import UserList from '../features/User/components/UsersList';
import UserPage from '../features/User/components/UserPage';
import * as api from '../features/Auth/api'

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    api.avatarsFetch()
    .then(data=>dispatch({type:'avatars/init',payload:data}))
    .catch((err) => console.log(err))

  api.checkFetch()
      .then((data) => {
        if (data.user) {
        
          dispatch({ type: 'user/login', payload: data });
        }
        else{
          console.log(data)
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='myCard' element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
