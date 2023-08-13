import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

// password show hide button 
const Register = () => {
  const [show, setShow] = useState('show');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  function toggle(e){
    e.preventDefault();
    if(show === 'show'){
      setShow('hide');
    }
    else{
      setShow('show')
    }
    
  }


  // calling register backend api
  async function register(e){
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/register',{name, email, password })
    if(response.status === 200){
      navigate('/login')
      toast.success("Your are Successfully Register")
    }
    else{
      alert('something went wrong !')
      toast.error('Invalid Email or Password')
    }
      
    } catch (error) {
      console.log('Error:', error);
      toast.error('Invalid Email or Password')
      
    }
  }



  return (
    <>
   <div className="container">
   <form className='form'>
      <input onChange={(e=>setName(e.target.value))} type="text" placeholder='Enter Your Name'/>
      <input onChange={(e=>setEmail(e.target.value))} type="email" placeholder='Enter Your Email'/>
      <input onChange={(e)=>setPassword(e.target.value)} type={show === 'show' ? "password" : "text"} placeholder='Enter Your Password' />
      <span className='showHideBtn' onClick={toggle}>{show}</span>
      <button onClick={register} className='btn'>Register</button>
    </form>
   </div>
    </>
  )
}

export default Register