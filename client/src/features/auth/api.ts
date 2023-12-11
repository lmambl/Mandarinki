/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { Rega ,User,Avatar} from "./types/authType";


export const registrationFetch = async (obj:Rega): Promise<{success:boolean,message:string}> => {
    const data = await (await  fetch('/api/auth/register',{
      method:'POST',
      headers: { 'Content-Type': 'Application/json' },
      body:JSON.stringify(obj)
  })).json();
  return data
  };

  export const loginFetch = async (obj:{password:string,email:string}): Promise<{message:string,user:User}> => {
    const data = await (await  fetch('/api/auth/login',{
      method:'POST',
      headers: { 'Content-Type': 'Application/json' },
      body:JSON.stringify(obj)
  })).json();
  return data
  };

  export const checkFetch = async (): Promise<{user:User,message:string}> => {
    const data:{user:User,message:string} = await (await  fetch('/api/auth/check')).json();
    return data
  };

  export const avatarsFetch = async (): Promise<Avatar[]> => {
    const data= await (await  fetch('/api/auth/avatars')).json();
  return data.avatars
  };