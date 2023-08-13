import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';


const Authcontext = createContext();

const UserContext = ({children}) => {
    const [token, settoken] = useState('');


    axios.defaults.headers.common['Authorization']=token;  

    useEffect(()=>{
      const usertoken = localStorage.getItem('usertoken')
      if(usertoken){
        settoken(usertoken);
      }

    },[])


  return (
    <Authcontext.Provider value={{token, settoken}}>
        {children}

    </Authcontext.Provider>
  )
}

const userAuth = ()=>useContext(Authcontext);
export {userAuth, UserContext};