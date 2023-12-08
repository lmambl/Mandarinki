import type { Game } from '../gamesType';
import type { User } from '../usersType';

export type State = {
  users: User[];
  games: Game[];
};
