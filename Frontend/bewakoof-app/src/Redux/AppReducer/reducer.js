// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from './actionType'

const initialState = {
  isLoading: false,
  isError: false,
  MensSingleProduct:[],
  WomenSingleProduct:[]
};

const reducer = (state = initialState,{type,payload}) => {
  switch (type) {
   
    // GETTING MENS SINGLE DATA
   case types.GET_MENS_DATA_SINGLE_REQUEST:
    return{
       ...state,
       isLoading:true,
       isError:false
    }    
    case types.GET_MENS_DATA_SINGLE_SUCCESS:
      return{
        ...state,
        MensSingleProduct:payload,
        isLoading:false,
        isError:false
      }
     
      case types.GET_MENS_DATA_SINGLE_FAILURE:
        return {
          ...state,
          isLoading:false,
          MensSingleProduct:[],
          isError:true
        }

         // GETTING WOMENS SINGLE DATA
   case types.GET_WOMENS_DATA_SINGLE_REQUEST:
    return{
       ...state,
       isLoading:true,
       isError:false
    }    
    case types.GET_WOMENS_DATA_SINGLE_SUCCESS:
      return{
        ...state,
        isLoading:false,
        WomenSingleProduct:payload,
        isError:false
      }
     
      case types.GET_WOMENS_DATA_SINGLE_FAILURE:
        return {
          ...state,
          isLoading:false,
          WomenSingleProduct:[],
          isError:true
        }
    default:
      return state;
  }
};

export { reducer };
