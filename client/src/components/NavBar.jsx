import style from "./styles/NavBar.module.css";
import {useAuth} from "./Auth/AuthContext/AuthContext";
import GenericButton from "./GenericButton/GenericButton";
import { Search } from "./Index";

export default function NavBar() {
  const {login} = useAuth();
  
  return (
    <div className={style.nav}>
      <GenericButton onClick={login} />
      <div>
      <h2 className={style.favoritesSection}>Rick and Morty</h2>
      <Search />
      </div>
      <div></div>
    </div>
  );
}
