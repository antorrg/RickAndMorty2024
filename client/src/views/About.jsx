import style from './styles/About.module.css'

const About = () => {
  return (
    <div className={style.body}>
      <div className={style.about}>
      <div classname={style.textContainer}>
      <h1 style={{textAlign:'center', color:'#0ccac4'}}>Acerca de mi:</h1>
      <p style={{textAlign:'left', color:'white', margin:'2rem'}}>En este apartado estoy probando de hacer mi about y voy a necesitar tambien de alguna imagen</p>
     
      </div>
      </div>
      </div>
  )
}

export default About