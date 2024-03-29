import style from "./styles/NavBar.module.css";
import {useAuth} from "./Auth/AuthContext/AuthContext";
import GenericButton from "./GenericButton/GenericButton";
import { Search } from "./Index";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate=useNavigate()
  //const {login} = useAuth();
  
  return (
    <div className={style.nav}>
      <GenericButton onClick={()=>{navigate('/login')}}buttonText={'LogIn'} />
      <div>
      <h2 className={style.favoritesSection}>Rick and Morty</h2>
      <Search />
      </div>
      <div></div>
    </div>
  );
}
