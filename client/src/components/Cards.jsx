// Cards.js
import React from 'react';
import Carousel from './Carousel'; // Asegúrate de tener la ruta correcta al componente

const Cards = ({ character }) => {
  return (
    <div>
      <Carousel character={character} />
    </div>
  );
};

export default Cards;
