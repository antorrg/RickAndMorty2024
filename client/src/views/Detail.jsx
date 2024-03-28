import style from "./styles/Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getById, cleanState } from "../Redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { accessInfo } from "../utils/Index";
import { useNavigate } from "react-router-dom";


const Detail = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.characterById);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const { id } = useParams();
  

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  const char = detail;

  const handleRefresh = () => {
    dispatch(cleanState());
    goBack();

  };
  //*parseo de info:
  const origin2 = accessInfo(char.origin);
  const location2 = accessInfo(char.location);

  return (
    <div className={style.cardContainer}>
      {char && (
        <div className={style.card}>
          <div className={style.imageContainer}>
            <img src={char.image} alt="Image not found" />
          </div>
          <div className={style.cardContText}>
            <h2>{char.name}</h2>
            <div>
            <button onClick={handleRefresh} className={style.pageDetailbutton }>Volver</button>
            </div>
            <h3>Id: {char.id}</h3>
            <h3>Status: {char.status}</h3>
            <h3>Species: {char.species}</h3>
            <h3>Gender: {char.gender}</h3>
            <h3>Origin: {origin2}</h3>
            <h3>Location: {location2}</h3>
           
            {/* <Link to={"/"} onClick={handleRefresh}>
              <h2>Return to Home</h2>
            </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
