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
    getByName,

}from './actions';

const initialState = {
    character :[],
    getByName:[],
    myFavorites: [],
    allFavorites: [],
    currentPage: 1,
    totalPages: 1,
    pageNumber: [],
    stateSwitched:false,
    characterById:[],
   loginUser:[]
};
 const reducer =(state = initialState, {type, payload})=>{
    switch(type){
        case GET_CHARACTERS:
            //console.log(payload.info.count)
            let totalCount = payload.info.count
            return {
                ...state,
                character: payload.results,
                totalPages:Math.ceil(totalCount/20)
            }
        case  SET_BY_ID:
            //console.log(payload)
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
                  totalPages: payload,
                };
//----------------------------------------------------------
    case CLEAN_STATE:
    return{
      ...state,
      characterById:[],
    }
     case ADD_FAV:
       //console.log(payload)
        return {...state, 
            myFavorites:  payload,
            allFavorites: payload
        }
        case GET_FAV:
        return {
            ...state, 
            myFavorites:  payload,
           allFavorites: payload,
           currentPage:1,
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
        //console.log(payload)
        let totalCountN = getByName.length
        return{
            ...state,
            getByName: payload.results,
            totalPages:Math.ceil(totalCountN/20),
            currentPage:1,
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