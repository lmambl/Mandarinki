import { User } from './usersType';

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
