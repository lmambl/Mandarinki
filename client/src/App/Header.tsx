import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppDispatch, type RootState } from '../store';

export default function Header(): JSX.Element {
  const user = useSelector((store: RootState) => store.authReducer.user);

  const dispatch = useAppDispatch();

  const handleLogout = async (): Promise<void> => {
    const response = await fetch('/api/auth/logout');
    if (response.ok) {
      dispatch({ type: 'user/logout' });
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Happy New Year{user && `, ${user.name} ${user.lastName}`}!
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/users"> Users</Link>
            </li>
            <li>{user && <Link to="/myCard"> MyCard</Link>}</li>
          </ul>
        </nav>
        {user ? (
          <button
            onClick={handleLogout}
            type="button"
            className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white"
          >
            Logout
          </button>
        ) : (
          <div>
            <Link
              to="/register"
              className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white"
            >
              Register
            </Link>
            <Link to="/Login" className="ml-2 text-white hover:underline">
              login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
