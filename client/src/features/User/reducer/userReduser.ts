import type { Action } from './action';
import type { State } from './reducerType';

export const init: State = { users: [], people: null };

const userReducer = (state: State = init, action: Action): State => {
  switch (action.type) {
    case 'users/init':
      return {
        ...state,
        users: action.payload,
      };
    case 'people/init':
      return {
        ...state,
        people: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
