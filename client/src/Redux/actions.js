import axios from 'axios';
import {setAuthHeader,  handleApiError} from '../utils/AxiosUtils'
import {
    GET_CHARACTERS,
    SET_CURRENT_PAGE,
    SET_BY_ID,
    CLEAN_STATE,
    ADD_FAV,
    REMOVE_FAV,
    FILTER,
    ORDER,
    GET_BY_NAME,
    LOG,
    CLEAN_LOG,
    GET_FAV,
    SET_TOTAL_PAGES,
} from './actions-types';



export const getCharacters = () => async (dispatch)=>{
    try {
        const response = await axios('/api/character')
        const data =response.data;
        return dispatch({
            type:GET_CHARACTERS,
            payload:data,
        })
    } catch (error) {
        handleApiError(error);
        throw error; 
    }
}
export const getById =(id, token)=>async(dispatch)=>{
    try {
        const response = await axios(`/api/character/${id}`)
        const data = response.data;
        return dispatch({
            type:SET_BY_ID,
            payload:data
        })
    } catch (error) {
        handleApiError(error);
        throw error; 
    }
}
export const getByName=(name)=>async(dispatch)=>{
    try {
        const response = await axios(`/api/character?name=${name}`)
        const data =response.data;
        return dispatch({
            type:GET_BY_NAME,
            payload:data,
        })
    } catch (error) {
        handleApiError(error);
        throw error; 
    }
}


export const setCurrentPage = (page) => {
    return (dispatch) => {
      dispatch({
        type: SET_CURRENT_PAGE,
        payload: page,
      });
    };
  };
  export const setTotalPages = (totalPages) => ({
    type: SET_TOTAL_PAGES,
    payload: totalPages,
  });
  
  export const cleanState =(payload)=>{
    return{
      type: CLEAN_STATE,
      payload,
    }
   }
   export const login= (userData)=>{
    return {
        type: LOG,
        payload:userData,
    }
   }
   export const limpiarLogin =(payload)=>{
    return {
        type:CLEAN_LOG,
        payload,
    }
   }
//?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
export const addFav = async (character,token)=> {
    try {
        const data = (await axios.post(`/log/favorite`, character,setAuthHeader(token) )).data;
        return dispatch({type: ADD_FAV, 
             payload: (data)})

    } catch (error) {
          handleApiError(error);
        throw error; 
    }
   
};
export const getFavorites = (token) => async (dispatch) => {
    try {
      const response = await axios.get(`/log/favorite`, setAuthHeader(token));
      const data = response.data;
      dispatch({
        type: GET_FAV,
        payload: data,
      });
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  };


export const removeFav = async (id, token) => {
    try {
      await axios.delete(`/log/favorite/${id}`, setAuthHeader(token));
      dispatch({
        type: REMOVE_FAV,
        payload: id,
      });
    } catch (error) {
        handleApiError(error);
        throw error; 
    }
  };
  

export const filterFav = (gender)=>{
    return {
        type: FILTER,
        payload: (gender)
    }
}

export const orderFav = (order) => {
    return{
        type: ORDER,
        payload:(order)
    }
}