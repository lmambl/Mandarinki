import React from 'react';

function UserCard({ user }: { user: any }): JSX.Element {
  return (
      <div className="mt-8 w-full sm:w-1/3 lg:w-1/5 xl:w-1/8 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 ">
        <div className="flex items-center justify-center h-40">
          <img
            className="w-30 h-30  object-cover rounded-full border-4 border-red-200"
            src={user['Avatar.url']}
            alt="User Avatar"
          />
        </div>
        <div className="p-4">
          <div className="text-center mt-1">
            <p className="text-lg font-semibold text-gray-800 mb-2">{`${user.name} ${user.lastName}`}</p>
          </div>
        </div>
      </div>
  );
}

export default UserCard;

{
  /* <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <div className="flex justify-center items-center">
        <img
          className="w-20 h-20 object-cover rounded-full border-4 border-gray-200"
          src={user['Avatar.url']}
          alt="User Avatar"
        />
      </div>
      <div className="text-center mt-4">
        <p className="text-lg font-semibold text-gray-800 mb-2">{`${user.name} ${user.lastName}`}</p>
        <p className="text-sm text-gray-600 mb-2">Wishlist:</p>
        <ul className="text-xs text-gray-700 mb-2">
          <li className="mb-1">&#127873; {user.dreams}</li>
          <li className="mb-1">&#127873; Item 2</li>
          <li className="mb-1">&#127873; Item 3</li>
        </ul>
      </div>
    </div> */
  //   <div className="mt-4 flex justify-between">
  //   <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md text-sm font-semibold">
  //     Send Gift
  //   </button>
  //   <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm font-semibold">
  //     Remove
  //   </button>
  // </div>
}
