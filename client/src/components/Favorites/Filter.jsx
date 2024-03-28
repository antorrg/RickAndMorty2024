import { useDispatch } from "react-redux";
import { filterFav} from "../../Redux/actions";
import style from '../styles/NavBar.module.css'



const Filter = () => {
  const dispatch = useDispatch();
    const optionGender = ['All','Male', 'Female', 'Unknown', 'Genderless']

    const filterCards = (event) => {
        dispatch(filterFav(event.target.value))
    }
  
  return (
    <div >
      <select onChange={filterCards} className={style.stylSelect}>
        {optionGender.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
