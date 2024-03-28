import style from "./styles/NavBar.module.css";
import LoginButton from "./Auth0/LoginButton";
import { Search } from "./Index";

export default function NavBar() {
  
  return (
    <div className={style.nav}>
      <LoginButton />
      <div>
      <h2 className={style.favoritesSection}>Rick and Morty</h2>
      <Search />
      </div>
      <div></div>
    </div>
  );
}
