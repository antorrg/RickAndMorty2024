import React from 'react';
import style from './styles/Cards.module.css'
import Card from './Card';

const UserCards = ({ character, currentPage }) => {
  //const { totalPages } = useSelector((state) => state);
  // Calcula el índice de inicio y fin para mostrar los personajes de la página actual
  //const startIndex = (currentPage - 1) * 20;
  //const endIndex = currentPage * 20;

  // Filtra los personajes según el índice de inicio y fin
  //const charactersToShow = character?.slice(startIndex, endIndex);

  return (
    <div className={style.cardList}>
      {character && character.map((char) => (
        <Card key={char.id} character={char} />
      ))}
    </div>
  );
};

export default UserCards;
