import style from "./styles/SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../Redux/actions";
import { useNavigate } from "react-router-dom";
import GenericButton from "./GenericButton/GenericButton";

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {

      dispatch(getByName(searchTerm));
   
      navigate(`/${searchTerm}`);

      setSearchTerm("");
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      
      handleSearch();
    }
  };

  return (
    <div className={style.searchBar}>
      <>
      <input
        type="search"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={handleKeyPress}
        className={style.stylSelect }
      />
      <GenericButton onClick={handleSearch} buttonText={'Search'}/></>
    </div>
  );
}

export default SearchBar;
