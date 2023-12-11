import React from 'react';

import type { User } from '../usersType';

function GiftCard({ people }: { people: User }): JSX.Element {
  

  return (
    <div className="cont">
        <div >
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
  );
}

export default GiftCard;
