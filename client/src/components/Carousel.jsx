// Carousel.js
import {useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card'; // Asegúrate de tener la ruta correcta al componente
import { PrevArrow, NextArrow } from './Arrows';

const Carousel = ( {character, setPage}) => {
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
    afterChange: (currentSlide) => {
      if (currentSlide === 16) {
        const lastCharacter = character[character.length - 1];
        console.log('lastCharacter. ',lastCharacter.id)
        if (lastCharacter && (lastCharacter.id) % 20 === 0) {
          // Calcula el número de página basado en el ID del último personaje
          const pageNumber = Math.floor((lastCharacter.id + 1) / 20+1);
          const finalNumber = lastCharacter.id===826 ? 1 : pageNumber;
          // Actualiza el estado de setPage con el número de página
          console.log('numero de pagina: ', finalNumber)
          setPage(finalNumber);
        }
      }
    }
  
  };
  // useEffect(() => {
  //   // Verificar si el último elemento de character tiene un id que sea un múltiplo de 20 menos 1
  //   const lastCharacter = character[character.length - 1];
  //   console.log('soy id ', lastCharacter,)
  //   if (lastCharacter && (lastCharacter.id-1) % 20 === 0) {
  //     // Actualizar el estado de setPage
  //     setPage(prevPage => (prevPage === 42 ? 1 : prevPage + 1));
  //   }
  // }, [character, setPage]);


  return (
    <Slider {...settings}>
      {character?.map((char) => (
        <Card key={char.id} character={char} />
      ))}
    </Slider>
  );
};

export default Carousel;
