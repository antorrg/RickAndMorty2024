import React, { useEffect, useState } from "react";
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
 const [page, setPage]= useState(1)

  useEffect(() => {
    if (name) {
      // Si hay un nombre en la URL, busca juegos por nombre
      dispatch(getByName(name));
    } else {
     
      dispatch(getCharacters(page));
    }
  }, [dispatch, name, page]);
 
 
  return (
    <div className={style.Home}>
      <NavBar />
      <Cards character={name ? charByName : character} setPage={setPage}/>
    </div>
  );
};

export default Home;
