import axios from "axios";
const urlRick = import.meta.env.VITE_URL2;
import setAuthHeader from "../utils/AxiosUtils";
import {
  HandlError,
  showError,
  showInfo,
  showSuccess,
  showWarn,
} from "../components/Auth/HandlerError";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_BY_ID = "SET_BY_ID";
export const CLEAN_STATE = "CLEAN_STATE";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_BY_NAME = "GET_BY_NAME";
export const LOG = "LOG";
export const CLEAN_LOG = "CLEAN_LOG";
export const GET_FAV = "GET_FAV";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES,";

export const getCharacters = (page) => async (dispatch) => {
  try {
    const response = await axios(`${urlRick}/character?page=${page}`);
    const data = response.data;
    dispatch({
      type: GET_CHARACTERS,
      payload: data,
    });
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: page,
    });
  } catch (error) {
    HandlError(error);
    throw error;
  }
};
export const getById = (id) => async (dispatch) => {
  try {
    const response = await axios(`${urlRick}/character/${id}`);
    const data = response.data;
    return dispatch({
      type: SET_BY_ID,
      payload: data,
    });
  } catch (error) {
    HandlError(error);
    throw error;
  }
};
export const getByName = (name) => async (dispatch) => {
  try {
    const response = await axios(`${urlRick}/character?name=${name}`);
    const data = response.data;
    return dispatch({
      type: GET_BY_NAME,
      payload: data,
    });
  } catch (error) {
    HandlError(error);
    throw error;
  }
};

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

export const cleanState = (payload) => {
  return {
    type: CLEAN_STATE,
    payload,
  };
};
export const login = (userData) => {
  return {
    type: LOG,
    payload: userData,
  };
};
export const limpiarLogin = (payload) => {
  return {
    type: CLEAN_LOG,
    payload,
  };
};
//?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
export const addFav = (character, page) => async (dispatch) => {
  try {
    const response = await axios.post(`/favorite`, character, setAuthHeader());
    const data = response.data;
    dispatch({ 
      type: ADD_FAV, 
      payload: data.fav 
    }),
      dispatch({
        type: SET_CURRENT_PAGE,
        payload: page,
      });
      if (response.data && response.data.message) {
        showInfo(response);
      } else {
        showSuccess('Favorito añadido exitosamente');
      }
  } catch (error) {
    HandlError(error);
    throw error;
  }
};
export const getFavorites = (page) => async (dispatch) => {
  try {
    const response = await axios.get(`/favorite`, setAuthHeader());
    const data = response.data;
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: page,
    }),
      dispatch({
        type: GET_FAV,
        payload: data,
      });
  } catch (error) {
    HandlError(error);
    throw error;
  }
};

export const removeFav = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/favorite/${id}`, setAuthHeader());
    dispatch({
      type: REMOVE_FAV,
      payload: id,
    });
    if (response.data && response.data.message) {
      showInfo(response);
    } else {
      showSuccess('Favorito borrado exitosamente');
    }
    
  } catch (error) {
    HandlError(error);
  }
};

export const filterFav = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderFav = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
