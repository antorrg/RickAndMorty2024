import style from "./styles/Form.module.css";
import {useState, useEffect}from 'react'
import { useDispatch } from 'react-redux';
import {LoginForm,SignWindow} from '../components/Auth/AuthIndex';
import {useAuth}from '../components/Auth/AuthContext/AuthContext'
import {login}from '../Redux/actions'


const Form = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
 useEffect(()=>{
   dispatch(login())
 },[])

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignClick = () => {
    setIsModalOpen(true);
  };

  const handleSignWindowClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={style.body}>
      <LoginForm handleSignClick= {handleSignClick} />
      <div>
      {isModalOpen && <SignWindow onClose={handleSignWindowClose} auth = {auth}/>}
      </div>
     
    </div>
  )
}
export default Form;