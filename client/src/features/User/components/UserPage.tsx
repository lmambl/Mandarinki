import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../store';
import GiftCard from './GiftCard';
import * as api from '../api';

function UserPage(): JSX.Element {
  const user = useSelector((store: RootState) => store.authReducer.user);
  const people = useSelector((store: RootState) => store.userReducer.people);

  const dispatch = useAppDispatch();

  useEffect(() => {
    api.peopleFethInit().then((data) => dispatch({ type: 'people/init', payload: data }))
    console.log(user);

  },[])
  return (
    <div className="container">
      {people && <GiftCard people={people} />}
      {user && (
        <div className="mt-8 w-full sm:w-1/3 lg:w-1/5 xl:w-1/8 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 ">
          <div className="flex items-center justify-center h-40">
            <img
              className="w-30 h-30  object-cover rounded-full border-4 border-red-200"
              src={`${user.Avatar.url}`}
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
          <button type="button">Редактировать</button>
        </div>
      )}
    </div>
  );
}

export default UserPage;
