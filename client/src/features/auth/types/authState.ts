import type { Avatar,User } from './authType';


type AuthState = {
  user: User | null;
  avatars:Avatar[];
  err:string
};

export default AuthState;
