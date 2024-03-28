// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card'; // Asegúrate de tener la ruta correcta al componente
import { PrevArrow, NextArrow } from './Arrows';

const Carousel = ( {character}) => {
  console.log(character)
  // Configuración del carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Ajusta según tus necesidades
    slidesToScroll: 1,
    autoplay: true, // Habilita el autoplay
    autoplaySpeed: 1500, // Establece el tiempo de espera entre diapositivas en milisegundos (en este caso, 3 segundos)
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768, // Ajusta el breakpoint según tus necesidades
        settings: {
          slidesToShow: 1, // Cambia el número de tarjetas para dispositivos móviles
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  
  };

  return (
    <Slider {...settings}>
      {character.map((char) => (
        <Card key={char.id} character={char} />
      ))}
    </Slider>
  );
};

export default Carousel;
