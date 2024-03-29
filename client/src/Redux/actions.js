import axios from 'axios';
import {setAuthHeader,  handleApiError} from '../utils/AxiosUtils'
export const GET_CHARACTERS='GET_CHARACTERS';
export const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
export const SET_BY_ID= 'SET_BY_ID';
export const CLEAN_STATE='CLEAN_STATE';
export const ADD_FAV ='ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER ='ORDER';
export const GET_BY_NAME='GET_BY_NAME';
export const LOG='LOG';
export const CLEAN_LOG='CLEAN_LOG';
export const GET_FAV='GET_FAV';
export const SET_TOTAL_PAGES='SET_TOTAL_PAGES,'


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