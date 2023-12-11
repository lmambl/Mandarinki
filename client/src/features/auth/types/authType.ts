 export type Rega = {
    name:string;
    lastName:string;
    email:string;
    password:string;
    avatarId:number;
    dreams:string
 }

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
   id:number;
   url:string
 }
 
 export type UserWithoutId = Omit<User, 'id'>;