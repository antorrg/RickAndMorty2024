
import { Home, UserHome } from "./index";
import { useAuth0 } from "@auth0/auth0-react";
import {enviarInfoAlServer,} from "../utils/Index";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { login, limpiarLogin } from '../Redux/actions';

const Landing = () => {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  console.log(user)


  const userLog = async (userData) => {
    try {
      const response = await enviarInfoAlServer(userData);
      console.log(response)
      return response;
    } catch (error) {
      console.error('Error en userLog:', error);
      throw error; // Puedes manejar el error aquí según tus necesidades
    }
  };

  useEffect(() => {
    const fetchUserLog = async () => {
      if (isAuthenticated) {
        try {
          const result = await userLog(user);
          dispatch(login(result));
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
  }, [isAuthenticated, user, dispatch]);

  return <div>{isAuthenticated ? <UserHome /> : <Home />}</div>;
};

export default Landing;
