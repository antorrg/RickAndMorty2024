import axios from "axios";
import {HandlError,showSuccess, showError } from './HandlerError';



const createUser = async(userData, login)=>{
    const email = userData.email;
  const password = userData.password;
  const nickname = userData.nickname ?? null;
  const name = userData.name ?? null;
  const picture = userData.picture ?? null;
  try {
    const response = await axios.post(`/user`, {
        email,
        password,
        nickname,
        name,
        picture
    })
    if (response.status === 201) {
      const token = response.data.token;
      const user = response.data.result.user
      login(token, user);
       showSuccess('User created successfully')
        console.log(user)
        return user;
      }
  } catch (error) {
    HandlError(error);
    throw error;
  }
}
const loginUser = async(userData,login)=>{
    const email = userData.email;
    const password = userData.password;
    try {
        const response = await axios.post(`/user/login`,{
            email,
            password,
        });
        if (response.status === 201) {
          //console.log(response.data)
          const token = response.data.token;
          const user = response.data.result.user;
          login(token, user);
          //console.log(token)
          //console.log("Token almacenado en localStorage:", localStorage.getItem('validToken'));
      
          
            showSuccess('Login sucessfully')
            
            //console.log(token)
            //console.log(user)
            
              return user;
        }
       
        } catch (error) {
          showError('Login fallido')
          //HandlError(error);
          throw error;
        }
               
            }


export {
    createUser,
    loginUser
}

