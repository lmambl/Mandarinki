import type AuthAction from '../types/authAction';
import type AuthState from '../types/authState';

export const initState: AuthState = {
  user: null,
  avatars:[],
  err:''
};

// для каждого раздела сайта - свой редьюсер
function reducer(state: AuthState = initState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'avatars/init':
      return {
        ...state,
        avatars:action.payload
      }
    case 'user/login':
      console.log(action.payload)
      if(action.payload.message){
        return {
          ...state,
          err: action.payload.message,
        };
      }
      return {
        ...state,
        err:'',
        user: action.payload.user,
      };
      case 'user/rega':
        return{
          ...state,
          err:action.payload.message
        }
    case 'user/logout':
      return {
        ...state,
        user: null,
      };
    case 'user/addavatar':
      return (state.user ? {
        ...state,
        user: {...state.user, avatarId:action.payload},
      } : state)

      case 'user/update':
        return (state.user ? {
          ...state,
          user: (state.user.id  === action.payload.id) ? {...state.user,dreams:action.payload.dreams} : state.user
        } : state)

    default:
      return state;
  }
}

export default reducer;
