type User = {
  id: number;
  name: string;
  lastName: string;
  email: string;
  avatadId: number;
  dreams: string;
  isAdmin: boolean;
};

export type UserWithoutId = Omit<User, 'id'>;

export default User;
