import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { userAuth } from '../context/UserContext';


const Login = () => {
//show hide password button
  const [show, setShow] = useState('show');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const {token, settoken} = userAuth();


  function toggle(e){
    e.preventDefault();
    if(show === 'show'){
      setShow('hide');
    }
    else{
      setShow('show')
    }
    
  }


  // calling login backend api
  async function login(e){
    e.preventDefault();
   try {
    const response = await axios.post('http://localhost:3000/login',{email,password});
    if(response.status === 200){
      localStorage.setItem('usertoken', response.data.token);
      settoken(response.data.token);
      navigate('/');
      toast.success("Login Successfully");
    }
    
    else{
      toast.error('Invalid Email or Password !')
    }


    
   } catch (error) {
    console.log(error)
    toast.error('Invalid Email or Password')
    
   }

  }




  return (
   <>
    <div className="container">
   <form className='form'>
      <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Your Email'/>
      <input onChange={(e)=>setPassword(e.target.value)} type={show === "show" ? "password" : "text"} placeholder='Enter Your Password' />
      <span className='showHideBtn' onClick={toggle}>{show}</span>
      <button onClick={login} className='btn'>Login</button>
    </form>
   </div>
   </>
  )
}

export default Login