
import style from './styles/ModalEdit.module.css'
import SignInForm from './SignInForm';
import GenericButton from '../GenericButton/GenericButton';


const SignWindow = ({ onClose, auth}) => {
 
 

  return (
    <div className={style.modal}>
      <h2>Registrese:</h2>
      <GenericButton onClick={onClose} buttonText={'Cancelar'}/>
      <SignInForm auth = {auth}/>
    </div>
  );
};

export default SignWindow;
