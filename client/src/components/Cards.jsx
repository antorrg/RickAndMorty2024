// Cards.js
import React from 'react';
import Carousel from './Carousel'; // Asegúrate de tener la ruta correcta al componente

const Cards = ({ character, setPage}) => {
  return (
    <div>
      <Carousel character={character} setPage={setPage}/>
    </div>
  );
};

export default Cards;
