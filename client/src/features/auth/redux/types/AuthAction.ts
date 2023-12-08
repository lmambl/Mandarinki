import type User from './User';

type AuthAction =
  | {
      type: 'user/login';
      payload: User;
    }
  | {
      type: 'user/logout';
    }
  | {
      type: 'user/addavatar';
      payload: string;
    };

export default AuthAction;
