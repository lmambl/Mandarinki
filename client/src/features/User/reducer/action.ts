import type { Game } from '../gamesType';
import type { User } from '../usersType';

export type Action =
  | { type: 'users/init'; payload: User[] }
  | { type: 'games/init'; payload: Game[] };
