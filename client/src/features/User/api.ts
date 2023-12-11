/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { User } from './usersType';

export const userFethInit = async (): Promise<any> => {
  const users: any = await (await fetch('/api/users')).json();
  return users;
};

export const gamesFethInit = async (): Promise<any> => {
  const games: any = await (await fetch('/api/games')).json();
  return games;
};

export const peopleFethInit = async (): Promise<User> => {
  const people = await (await fetch('/api/people')).json();
  return people.User;
};

export const updateUserFetch = async (obj:{id:number,dream:string}): Promise<{dreams:string,id:number}> => {
  const data = await (await  fetch(`/api/users/${obj.id}`,{
    method:'PUT',
    headers: { 'Content-Type': 'Application/json' },
    body:JSON.stringify(obj)
})).json();
return data
};

