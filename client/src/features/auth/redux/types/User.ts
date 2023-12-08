export type User = {
  id: number;
  name: string;
  lastName: string;
  email: string;
  avatarId: string;
  dreams: string;
  isAdmin: boolean;
  Avatar:Avatar
};
export type Avatar ={
  url:string
}

export type UserWithoutId = Omit<User, 'id'>;

export default User;
