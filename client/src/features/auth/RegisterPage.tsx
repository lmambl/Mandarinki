import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import * as api from './api'
import { useAppDispatch, type RootState } from '../../store';
import './authStyle.css'
import type { Avatar } from './types/authType';

export default function RegisterPage(): JSX.Element {
  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatarId, setAvatarId] = useState(1);
  const [dreams, setDreams] = useState('');
const dispatch = useAppDispatch()
  const navigate = useNavigate();
const {avatars,err} = useSelector((store:RootState)=>store.authReducer)


  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
api.registrationFetch({
  name,
  lastName,
  email,
  password,
  avatarId,
  dreams,
})
      .then((data) => {
        if(data.success === true){
          dispatch({type:'user/rega',payload:data})
           navigate('/login');
        }else{
          dispatch({type:'user/rega',payload:data})
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
     
        <form className=" formFlex" onSubmit={handleSubmit}>
          <div className='podCon'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="login"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              LastName
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="LastName"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Emai
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <p className="text-red-500 text-xs italic">Введите пароль</p> */}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        
             (Здесь Вы можете указать свои пожелания по подарку в пределах 1000р)
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="dreams"
              placeholder="Dreams"
              value={dreams}
              onChange={(e) => setDreams(e.target.value)}
            />
          </div>
</div>
<div className='podCon'>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Avatar
            </label>
            <div className='avatarCont'>
       {avatars.map((el:Avatar)=><div className={avatarId=== el.id ? 'blue' : 'con'} key={el.id} onClick={()=>setAvatarId(el.id)}><img alt='...' src={el.url} className='avatar'/></div>)}
       </div>
          </div>
  
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Регистрация
            </button>
          </div>
          </div>
          <div>{err}</div>
        </form>
      </div>
  );
}
