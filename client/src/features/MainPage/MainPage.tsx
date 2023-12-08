import React from 'react';
import { Link } from 'react-router-dom';

function MainPage(): JSX.Element {
  return (
    <div className="w-full max-w-xs mx-auto mt-5">
      MainPage
      <Link to="/users"> Users</Link>
      <Link to="/myCard"> MyCard</Link>
    </div>
  );
}

export default MainPage;
