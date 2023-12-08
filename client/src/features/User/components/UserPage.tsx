import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  useAppDispatch, type RootState } from '../../../store';

function UserPage(): JSX.Element {
  const user = useSelector((store: RootState) => store.authReducer.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(user);
    
    fetch(`/api/users/avatar/${user!.avatarId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'ok'){
          dispatch({ type: 'user/addavatar', payload: data.avatar.url });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    
    <div className="container">
    {user &&
      <div className="mt-8 w-full sm:w-1/3 lg:w-1/5 xl:w-1/8 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 ">
        <div className="flex items-center justify-center h-40">
          <img
            className="w-30 h-30  object-cover rounded-full border-4 border-red-200"
            src={`${user.avatarId}`}
            alt="User Avatar"
          />
        </div>
        <div className="p-4">
          <div className="text-center mt-1">
            <p className="text-lg font-semibold text-gray-800 mb-2">{`Name: ${user.name} ${user.lastName}`}</p>
            <p className="text-lg font-semibold text-gray-800 mb-2">{`email: ${user.email}`}</p>
            <p>{`Моя хотелка: ${user.dreams}`}</p>
          </div>
        </div>
        <button type='button'>Редактировать</button>
      </div>
}
    </div>
    
  );
}

export default UserPage;
