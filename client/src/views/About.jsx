import style from './styles/About.module.css'
import {useNavigate} from 'react-router-dom'
import GenericButton from '../components/GenericButton/GenericButton'

const About = () => {
  const navigate = useNavigate()
  return (
    <div className={style.body}>
      <div className={style.about}>
      <div classname={style.textContainer}>
      <div className={style.head}>
      <h1 >Acerca de mi:</h1>
      <a style={{ color:'#0ccac4'}}href='/'><h4>Volver</h4></a>
      </div>
      <p style={{textAlign:'left', color:'white', margin:'2rem'}}>Mi nombre es Antonio Rodriguez, soy argentino, desarrollador fullstack con node.js.</p>
      <img className= {style.image}src= 'https://res.cloudinary.com/dt1lpgumr/image/upload/v1714247374/foto-perfil_d8p6pl.webp' alt = 'not Found'/>
      <p style={{textAlign:'left', color:'white', margin:'2rem'}}>Este proyecto fue el primero en realizarse pero luego de mi aprendizaje en Henry decidi utilizar en el todo lo que habia podido aprender .</p>
      <br></br>
      </div>
      </div>
      </div>
  )
}

export default About