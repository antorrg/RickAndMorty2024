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

}from './actions-types';

const initialState = {
    character :[],
    characterById:[],
    currentPage: 1,
    totalPages: 1,
    myFavorites: [],
   allFavorites: [],
   getByName:[],
   loginUser:[]
};
 const reducer =(state = initialState, {type, payload})=>{
    switch(type){
        case GET_CHARACTERS:
            console.log(payload)
            return {
                ...state,
                character: payload,
                totalPages: Math.ceil(payload.length / 4),
            }
        case  SET_BY_ID:
            console.log(payload)
            return {
                ...state,
                characterById:payload,
            }
  
  //--------------------------------------------------          
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage:payload,
            }
            case SET_TOTAL_PAGES:
                return {
                  ...state,
                  totalPages: action.payload,
                };
//----------------------------------------------------------
            case CLEAN_STATE:
    return{
      ...state,
      characterById:[],
    }
     case ADD_FAV:
        console.log(payload)
        return {...state, myFavorites:  payload,
                         allFavorites: payload
        }
        case GET_FAV:
        console.log(payload)
        return {
            ...state, 
            myFavorites:  payload,
           allFavorites: payload,
        }
     case REMOVE_FAV: 
         let newFavorites = state.allFavorites.filter(char =>char.id !==(payload));
               return {...state, myFavorites: newFavorites,
                                 allFavorites: newFavorites}
           
     case FILTER:
            let favoritesFiltered = payload === 'All'? state.allFavorites : state.myFavorites.filter(char=> char.gender === payload)
            return{
                ...state,
                myFavorites: favoritesFiltered}

    // case ORDER:
    
    //      let favoritesOrdered = state.myFavorites.sort((a, b)=>{
    //          return payload === "Ascendente" ? a.id - b.id : b.id - a.id
    //      })
    //      return{
    //           ...state,
    //          myFavorites: favoritesOrdered
    //                 }
    case ORDER:
    let favoritesOrdered = state.myFavorites.slice(); // Crear una copia del array para no modificar el estado directamente
    favoritesOrdered.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // Convertir a mayúsculas para ordenar de manera insensible a mayúsculas/minúsculas
        const nameB = b.name.toUpperCase();
        if(payload === "All"){
            return favoritesOrdered === state.allFavorites; 
        }else{
        return payload === "Ascendente" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        }
    });

    return {
        ...state,
        myFavorites: favoritesOrdered,
    };

      case GET_BY_NAME:
        console.log(payload)
        return{
            ...state,
            getByName: payload,
        }
        case LOG:
            return{
                ...state,
                loginUser:payload,
            }
            case CLEAN_LOG:
                return{
                    ...state,
                    loginUser: [],
                }
    
        default:
            return{
                ...state,
            }
    }

}
export default reducer;