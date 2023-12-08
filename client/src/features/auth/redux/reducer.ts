import type AuthAction from './types/AuthAction';
import type AuthState from './types/AuthState';

export const initState: AuthState = {
  user: null,
};

// для каждого раздела сайта - свой редьюсер
function reducer(state: AuthState = initState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'user/login':
      return {
        ...state,
        user: action.payload,
      };
    case 'user/logout':
      return {
        ...state,
        user: null,
      };
    case 'user/addavatar':
      return (state.user ? {
        ...state,
        user: {...state.user, avatarId:action.payload},
      } : state);
    default:
      return state;
  }
}

export default reducer;
