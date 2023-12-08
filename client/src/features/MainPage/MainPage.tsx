import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../../store';

function MainPage(): JSX.Element {
  const user = useSelector((store: RootState) => store.authReducer.user);
  return (
    <div className="w-full max-w-xs mx-auto mt-5">
      MainPage
      <Link to="/users"> Users</Link>
      { user && <Link to="/myCard"> MyCard</Link>}
    </div>
  );
}

export default MainPage;
