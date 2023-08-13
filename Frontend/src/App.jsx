import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login'
import { Toaster } from 'react-hot-toast';
import { UserContext } from './context/UserContext';



const App = ()=>{
  return (
    <>
<UserContext>
   <Router>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Toaster></Toaster>
   </Router>
   </UserContext>
    </>
  )
}

export default App;