import React from 'react';

import type { User } from '../usersType';

function GiftCard({ people }: { people: User }): JSX.Element {
  

  return (
    <div className="container">
      <div className="mt-8 w-full sm:w-1/3 lg:w-1/5 xl:w-1/8 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 ">
        <div className="flex items-center justify-center h-40">
          <img
            className="w-30 h-30  object-cover rounded-full border-4 border-red-200"
            src={`${people.Avatar.url}`}
            alt="User Avatar"
          />
        </div>
        <div className="p-4">
          <div className="text-center mt-1">
            <p className="text-lg font-semibold text-gray-800 mb-2">{`Name: ${people.name} ${people.lastName}`}</p>
            <p className="text-lg font-semibold text-gray-800 mb-2">{`email: ${people.email}`}</p>
            <p>{`Моя хотелка: ${people.dreams}`}</p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default GiftCard;
