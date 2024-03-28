import style from './Button.module.css'
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className={style.lButton}>Log In</button>;
};

export default LoginButton;