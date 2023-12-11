import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../store';

import GiftCard from './GiftCard';
import * as api from '../api';
import '../userStyle.css'

function UserPage(): JSX.Element {
  const [state,setState]=useState(false)
 
  const user = useSelector((store: RootState) => store.authReducer.user);
  const people = useSelector((store: RootState) => store.userReducer.people);
  const [dreams,setDreams]=useState('')
  const dispatch = useAppDispatch();

  useEffect(() => {
  user && setDreams(user.dreams )
    api.peopleFethInit()
    .then((data) => dispatch({ type: 'people/init', payload: data }))
    .catch(err=>console.log(err))

  }, [user]);

  const updateUser =(e:React.FormEvent<HTMLFormElement>):void=>{
     e.preventDefault()
     if(user){
      api.updateUserFetch({id:user?.id,dream:dreams})
      .then(data=>dispatch({type:'user/update',payload:data}))
      .catch(err=>console.log(err))
     }
     setState(false)
    
  }

  return (
    <div className="contUser">
     
      {user &&  (
        <div className="cont">
        
          <div className="">
            <img
              className="w-30 h-30  object-cover rounded-full border-4 border-red-200"

              src={`${user.Avatar.url}`}
              alt="User Avatar"
            />
          </div>
          <div className="p-4">
            <div className="text-center mt-1">
              <p className="text-lg font-semibold text-gray-800 mb-2">{`Name: ${user.name} ${user.lastName}`}</p>
              <p className="text-lg font-semibold text-gray-800 mb-2">{`email: ${user.email}`}</p>
            
            </div>
          </div>
          {!state  ?
         <>
            <p>{`Моя хотелка: ${user.dreams}`}</p>
         {!people &&  <button type="button" onClick={()=> setState(true)}>Редактировать</button>}
       </>
          :
        <form onSubmit={updateUser}>
          <input   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={dreams} type='text' onChange={(e)=>setDreams(e.target.value)}/>
        <button type='submit'>сохранить</button>
        </form>
}
          </div>

      )}
       {people ? <GiftCard people={people} /> : <div>После того как запуститься рандом здесь будет карточка того, кому Вы подарите подарок</div>}
    </div>
  );
}

export default UserPage;
