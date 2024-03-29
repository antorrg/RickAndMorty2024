import style from "./styles/NavBar.module.css";
import GenericButton from "./GenericButton/GenericButton";
import { useAuth } from "./Auth/AuthContext/AuthContext";
import { Filter, Order } from "./Favorites/index";
import { Search } from "./Index";
import { getFavorites } from "../Redux/actions";


const UserNav = ({ setShowFavorites, showFavorites }) => {

 const token =localStorage.getItem('validToken')
  const { user, logout } = useAuth();
  console.log(user);
  
  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
    dispatch(getFavorites(token))
  };
  
  
  return (
    <div className={style.nav}>
      <div>
        <GenericButton onClick={logout} />
      </div>
      <div className={style.userDetails}>
        <h4>Bienvenido: {user.given_name ? user.given_name : user.nickname}</h4>
        <img src={user.picture} alt="User Avatar" />
      </div>
      <div>
        <Search/>
      </div>
      {showFavorites && (
        <div className={style.favoritesSection}>
          <h3>Favoritos</h3>
          <div>
            <div className={style.filterButtons} >
              <Filter />
            </div>
            <div className={style.orderButtons}>
              <Order />
            </div>
          </div>
        </div>
      )}
      <button onClick={handleToggleFavorites} className={style.pageNavbutton}>
        {showFavorites ? "Ir a Home" : "Ir a Favoritos"}
      </button>
      <div></div>
    </div>
  );
};

export default UserNav;
