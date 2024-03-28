import axios from 'axios';
import { handleApiError } from './AxiosUtils';


const enviarInfoAlServer = async (userData) => {
    console.log(userData);
    
    
        const email = userData.email;
        const password= userData.password ?? null;
        const nickname = userData.nickname ?? null;
        const given_name = userData.given_name ?? null;
        const picture = userData.picture ?? null;
        const sub = userData.sub ?? null;
    
    
      try {
        const response = await axios.post('/log/login',{
            email,
            password,
            nickname,
            given_name,
            picture,
            sub,
          });
    
          if (response.status === 201) {
            const token = response.data.token;

            console.log(token)
            localStorage.setItem('validToken', token);

            console.log('Token recibido y almacenado:', token);
      
            console.log('Token recibido:', token);
           } if (response.data) {
            console.log(response.data)
            return response.data;
        
        } else {
            console.log('Error de enviarInfoAlServer')
           throw new Error('Error al autenticar/crear usuario');
        }
    
    } catch (error) {
        handleApiError(error)
        throw error;
    }
    
    
}

 


const accessInfo=(data)=>{
    if(data){
        return data.name;
    }
}
export {
    accessInfo,
    enviarInfoAlServer,
   
};