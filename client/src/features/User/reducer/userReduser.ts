import type { Action } from './action';
import type { State } from './reducerType';

export const init: State = { users: [] };

const userReducer = (state: State = init, action: Action): State => {
  switch (action.type) {
    case 'users/init':
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
