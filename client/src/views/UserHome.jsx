import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacters,getByName, getFavorites } from "../Redux/actions";
import { UserCards, Pagination, UserNav } from "../components/Index";
import style from "./styles/Home.module.css";

const UserHome = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('validToken')
  const { character,myFavorites, currentPage, totalPages } = useSelector((state) => state);
  const [showFavorites, setShowFavorites] = useState(false);
  const charByName = useSelector((state)=>state.getByName)
 
  const {name}=useParams();
  useEffect(() => {
    if (name) {
      // Si hay un nombre en la URL, busca juegos por nombre
      dispatch(getByName(name));
    } else {
     
      dispatch(getCharacters());
    }
  }, [dispatch, name]);


  useEffect(() => {
    if (showFavorites) {
      // Realizar la llamada a la acción getFavorites solo cuando showFavorites es true
      dispatch(getFavorites(token));
    } else {
      // Realizar la llamada a la acción getCharacters solo cuando showFavorites es false
      dispatch(getCharacters());
    }
  }, [dispatch, showFavorites, token]);

  const currentData = showFavorites ? myFavorites : character;

  return (
    <div className={style.Home}>
      <UserNav
        setShowFavorites={setShowFavorites}
        showFavorites={showFavorites}
      />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
      <UserCards character={name ? charByName : currentData} currentPage={currentPage} />
    </div>
  );
};

export default UserHome;
