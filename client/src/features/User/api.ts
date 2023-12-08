export const userFethInit = async (): Promise<any> => {
  const users: any = await (await fetch('/api/users')).json();
  return users;
};


