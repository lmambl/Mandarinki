import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../../store';

function MainPage(): JSX.Element {
  const user = useSelector((store: RootState) => store.authReducer.user);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="border border-gray-300 rounded-md p-4">
          <h2 className="text-xl font-semibold mb-2">MainPage</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="border border-gray-300 rounded-md p-4">
          <h2 className="text-xl font-semibold mb-2">
            {' '}
            <Link to="/users"> Users</Link>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="border border-gray-300 rounded-md p-4">
          <h2 className="text-xl font-semibold mb-2">
            {' '}
            {user && <Link to="/myCard"> MyCard</Link>}
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
