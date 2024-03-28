import { Link } from 'react-router-dom';
import style from './styles/Card.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, getFavorites, removeFav } from '../Redux/actions';
import { handleApiError } from '../utils/AxiosUtils';

const Card = ({ character }) => {
  const { id, name, origin, image, gender, species } = character;
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const token = localStorage.getItem('validToken')
  const favorites = useSelector(state => state.myFavorites);

  // Verifica si el personaje actual está en la lista de favoritos
  const isFavInitially = favorites.some(fav => fav.id === id);
  
  const [isFav, setIsFav] = useState(isFavInitially);
  
 
  const handleFavorite = async () => {
    try {
      if (isFav) {
        setIsFav(false);
          await dispatch(removeFav(id, token));
      } else {
        setIsFav(true);
          await dispatch(addFav({ id, name, origin, image, gender, species }, token));
      }// Después de agregar o eliminar el favorito, obtén la lista actualizada
        await dispatch(getFavorites(token));
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  };


  return (
    <div key={id} className={style.cardContainer}>
      {isAuthenticated && (
        <button className={style.btn1} onClick={handleFavorite}>
          {isFav ? '❤️' : '🤍'}
        </button>
      )}

      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <img src={image} alt='Not found'/>
      <p>Origin: {origin}</p>
    </div>
  );
};

export default Card;