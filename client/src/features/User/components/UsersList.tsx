import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import { useAppDispatch } from '../../../store';
import UserCard from './UserCard';
import * as api from '../api';

function UserList(): JSX.Element {
  const dispatch = useAppDispatch();
  const users = useSelector((store: RootState) => store.userReducer.users);
  const user = useSelector((store: RootState) => store.authReducer.user);

  useEffect(() => {
    api
      .userFethInit()
      .then((data) => {
        console.log(data);

        dispatch({ type: 'users/init', payload: data.users });
      })
      .catch((err) => console.log(err));
  }, []);



  

  return (
    <>
      {user &&
        (user.isAdmin ? (
          <>
            <button type="button" className="hover:text-gray-200" onClick={()=> api.gamesFethInit()}>
              Разыграть
            </button>
            <p>{users.length}</p>
          </>
        ) : (
          ''
        ))}
      <div className="flex flex-wrap justify-center gap-4">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>{' '}
    </>
  );
}

export default UserList;
