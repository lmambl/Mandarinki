import type { User } from '../usersType';

export type Action = { type: 'users/init'; payload: User[] };
