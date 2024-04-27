import { Link } from 'react-router-dom';
import style from './styles/Card.module.css';
import { useAuth } from './Auth/AuthContext/AuthContext';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, getFavorites, removeFav } from '../Redux/actions';
import { HandlError, showError, showInfo, showSuccess, showWarn} from '../components/Auth/HandlerError';

const Card = ({ character }) => {
  const { id, name, origin, image, gender, species } = character;
  const { authenticated } = useAuth();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.allFavorites);

  // Verifica si el personaje actual está en la lista de favoritos
  //const isFavInitially = favorites?.some(fav => fav.id === id);
  const isFavInitially = Array.isArray(favorites) && favorites.some(fav => fav.id === id);

  
  const [isFav, setIsFav] = useState(isFavInitially);

  const handleFavorite =  () => {
    try {
      if (isFav) {
        setIsFav(false);
           dispatch(removeFav(id));
      } else {
        setIsFav(true);
          dispatch(addFav({ id, name, origin, image, gender, species }));
      }// Después de agregar o eliminar el favorito, obtén la lista actualizada
        dispatch(getFavorites());
    } catch (error) {
     console.log('estoy en home: ', error)
    }
  };


  return (
    <div key={id} className={style.cardContainer}>
      {authenticated &&(
        <button className={style.btn1} onClick={handleFavorite}>
          {isFav ? '❤️' : '🤍'}
        </button>
      )}

      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <img src={image} alt='Not found'/>
      {/* <p>Origin: {origin}</p> */}
    </div>
  );
};

export default Card;