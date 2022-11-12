// NOTE: DO NOT MODIFY the intial state structure in this file.

import * as types from './actionType'

const initialState = {
  isLoading: false,
  isError: false,
  getMenData: [],
  getWomenData: []
};

const reducer = (state = initialState,{type,payload}) => {
  switch (type) {
    // MEN DATA TYPE
    case types.GET_MEN_DATA_REQUEST :
      return{
        ...state,
        isLoading: true,
        isError: false
      }
       
    case types.GET_MEN_DATA_SUCCESS :
      return{
        ...state,
        getMenData: payload,
        isLoading: false,
        isError: false
    }
    
       
    case types.GET_MEN_DATA_FAILURE :
      return{
        ...state,
        isLoading: false,
        isError: true
      } 
    
       

     // WOMEN DATA TYPE
     case types.GET_WOMEN_DATA_REQUEST :
      return{
        ...state,
        isLoading: true,
        isError: false
      }
     
      
    case types.GET_WOMEN_DATA_SUCCESS :
      return{
        ...state,
        getWomenData: payload,
        isLoading: false,
        isError: false
    }
    
        
    case types.GET_WOMEN_DATA_FAILURE :
      return{
        ...state,
        isLoading: false,
        isError: true
    } 
       
    default:
      return state;
  }
};

export { reducer };
