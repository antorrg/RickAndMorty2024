import axios from 'axios';
//import { useAuth0 } from "@auth0/auth0-react";

const redirectToLogin = (logout) => {
  // Lógica para redirigir al usuario al inicio de sesión
  console.log('Console.log: Token expirado. Redirigiendo al inicio de sesión...');
  setTimeout(() => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    localStorage.removeItem(validToken); //Esto en caso de que auth0 u otro servicio no limpie el storage
    //localStorage.clear();
    window.location.reload(true);
  }, 1500); // 2000 milisegundos (2 segundos)
};

const interceptor = (logout) => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Acceso no autorizado, redirigir al inicio de sesión
        redirectToLogin(logout);
      }
      return Promise.reject(error);
    }
  );
};

export default interceptor;

