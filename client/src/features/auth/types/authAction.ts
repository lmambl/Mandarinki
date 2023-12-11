
import type { Avatar,User } from './authType';

type AuthAction =
  | {
      type: 'user/login';
      payload: {message:string,user:User};
    }
  | {
      type: 'user/logout';
    }
  | {
      type: 'user/addavatar';
      payload: string;
    }
    | {type:'avatars/init',payload:Avatar[]}
| {type:'user/rega',payload:{message:string}}
| {type:'user/update',payload:{id:number,dreams:string}}
export default AuthAction;
