import {Landing, Detail }from './views/index';
import Login from './components/Auth/LoginForm'
import {Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from "./components/Auth/AuthContext/AuthContext";
import interceptor from './utils/AxiosInterceptor';



function App() {
  const { logout } = useAuth();

  useEffect(() => {
    // Configurar el interceptor cuando el componente se monta
    interceptor(logout);
  }, []);
 

  return (
    <div>
    <Routes>
      <Route path={'/'} element= {<Landing/>}/>
      <Route path={'/:name'} element = {<Landing/>}/>
      <Route path={'/detail/:id'} element ={<Detail/>}/>
      <Route path={'/login'} element = {<Login/>}/>
      
    </Routes>
    
    </div>
  )
}

export default App
