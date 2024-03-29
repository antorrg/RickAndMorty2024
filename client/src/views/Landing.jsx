
import { Home, UserHome } from "./index";
import { useAuth } from "../components/Auth/AuthContext/AuthContext";
import {enviarInfoAlServer,} from "../utils/Index";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { login, limpiarLogin } from '../Redux/actions';

const Landing = () => {
  const { user, authenticated } = useAuth();
  const dispatch = useDispatch();
  console.log(user)
  console.log(authenticated)



  useEffect(() => {
    const fetchUserLog = async () => {
      if (authenticated) {
        try {
          
          dispatch(login(user));
        } catch (error) {
          // Maneja el error según tus necesidades
          console.error('Error al obtener información del usuario:', error);
        } 
      }
      else {
        dispatch(limpiarLogin());
      }
    };

    fetchUserLog();
  }, [authenticated, user, dispatch]);

  return <div>{authenticated ? <UserHome /> : <Home />}</div>;
};

export default Landing;
