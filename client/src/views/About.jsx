import style from './styles/About.module.css'
import {useNavigate} from 'react-router-dom'
import GenericButton from '../components/GenericButton/GenericButton'

const About = () => {
  const navigate = useNavigate()
  return (
    <div className={style.body}>
      <div className={style.about}>
      <div className={style.head}>
      <h1 >Acerca de mi:</h1>
      <a style={{ color:'#0ccac4'}}href='/'><h4>Volver</h4></a>
      </div>
      <p style={{textAlign:'left', color:'white', margin:'2rem'}}>Mi nombre es Antonio Rodriguez, soy argentino, desarrollador fullstack con node.js, graduado en Henry en Enero de 2024.</p>
      <img className= {style.image}src= 'https://res.cloudinary.com/dt1lpgumr/image/upload/v1714247374/foto-perfil_d8p6pl.webp' alt = 'not Found'/>
      <p style={{textAlign:'left', color:'white', margin:'2rem', marginTop: 'none'}}>El proyecto de Rick and Morty formó parte del bootcamp ya que fue el proyecto integrador, y a partir del M2 hasta finalizar el bootcamp fue el proyecto en el cual ibamos plasmando lo aprendido. No estando yo conforme con la manera en que lo habia llevado a cabo, y al termino de varios intentos, pude plasmar algo con lo que me encuentro medianamente de acuerdo. Pude implementar aquí autenticacion con jsonwebtoken, paginado, carousel, busqueda por nombre, persistencia de datos por medio de sequelize y base de datos postgres sql, y suspensión de pantalla o suspensión de inactividad ("Idle Timeout" o "Screen Timeout), ya que al tener un carousel continuo en la landing debía economizar recursos. Quizás dentro de un tiempo termine cambiando otra vez la pagina o no, pero a la fecha resume lo aprendido por mi.</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
      </div>
  )
}

export default About