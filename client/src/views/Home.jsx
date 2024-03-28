import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, getByName } from "../Redux/actions";
import { Cards, NavBar } from "../components/Index";
import { useParams } from "react-router-dom";
import style from "./styles/Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character);
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
 
 
  return (
    <div className={style.Home}>
      <NavBar />
      <Cards character={name ? charByName : character} />
    </div>
  );
};

export default Home;
