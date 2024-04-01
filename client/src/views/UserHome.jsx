import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacters,getByName, getFavorites } from "../Redux/actions";
import { UserCards, Pagination, UserNav } from "../components/Index";
import style from "./styles/Home.module.css";

const UserHome = () => {
  const dispatch = useDispatch();
  const [api, setApi]= useState(true)

  const  character = useSelector((state) => state.character);
  const  myFavorites = useSelector((state) => state.myFavorites);
  const standartPage = useSelector((state)=>state.totalPages)

  const currentPage = useSelector((state)=>state.currentPage);
  const guide = currentPage? currentPage : 1;
  const [page, setPage]= useState(guide)
  
  const [showFavorites, setShowFavorites] = useState(false);
  const charByName = useSelector((state)=>state.getByName)
  const {name}=useParams();
  
  const initialPage = 1;
  useEffect(() => {
    if(showFavorites){
      dispatch(getFavorites(initialPage))
      setApi(false)
    } else if (name) {
      // Si hay un nombre en la URL, busca juegos por nombre
      dispatch(getByName(name));
      setApi(false)
    } else {

      dispatch(getCharacters(page));
      setApi(true)
    }
  }, [dispatch, name, showFavorites, page, setPage]);
  
  const finalPage = showFavorites? Math.ceil(myFavorites?.length / 20)
  : name? Math.ceil(charByName.length / 20): standartPage;
 
  const currentData = showFavorites ? myFavorites : character;

  return (
    <div className={style.Home}>
      <UserNav
        setShowFavorites={setShowFavorites}
        showFavorites={showFavorites}
      />
      <Pagination page={page} setPage={setPage} finalPage={finalPage} />
      <UserCards character={name ? charByName : currentData} currentPage={page} api={api}/>
    </div>
  );
};

export default UserHome;
