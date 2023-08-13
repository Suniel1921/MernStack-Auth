import React from 'react'
import {Link} from 'react-router-dom';
import { userAuth } from '../context/UserContext';



const Navbar = () => {
  const {token, settoken} = userAuth();
  const logout = ()=>{
    settoken('');
    localStorage.removeItem('usertoken');
  }





  return (
    <nav className='navbar'>
        <h3>logo</h3>

        {
          token ?   <li onClick={logout} className='navlinks'><Link to={'/'}>Logout</Link></li> : 
          <>
          <ul className='navlinks'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/register'}>Register</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
        </ul>
          </>
        }

        

    </nav>
  )
}

export default Navbar