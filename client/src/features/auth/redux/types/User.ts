type User = {
  id: number;
  name: string;
  lastName: string;
  email: string;
  avatarId: number|string;
  dreams: string;
  isAdmin: boolean;
};

export type UserWithoutId = Omit<User, 'id'>;

export default User;
