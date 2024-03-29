import style from '../components/Auth/styles/ModalEdit.module.css'
import {useState, useEffect}from 'react'
import { useDispatch } from 'react-redux';
import {LoginForm,SignWindow} from '../components/Auth/AuthIndex';
import {useAuth}from '../components/Auth/AuthContext/AuthContext'


const Login = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
 useEffect(()=>{
   dispatch(getAllUsers())
 },[])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSignClick = () => {
    setIsModalOpen(true);
  };

  const handleSignWindowClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <LoginForm handleSignClick= {handleSignClick} auth={auth} />
      <div>
      {isModalOpen && <SignWindow onClose={handleSignWindowClose} auth = {auth}/>}
      </div>
     
    </div>
  )
}
export default Login;