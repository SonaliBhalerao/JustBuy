//Write the ActionCreator functions here
import axios from 'axios'
import * as types from './actionType'

export const getMensSingleRequest=()=>{
    return{
        type:types.GET_MENS_DATA_SINGLE_REQUEST
    }
}
export const getMensSingleSuccess=(payload)=>{
    return{
        type:types.GET_MENS_DATA_SINGLE_SUCCESS,
        payload,
    }
}
export const getMensSingleFailure=()=>{
    return{
        type:types.GET_MENS_DATA_SINGLE_FAILURE
    }
}

export const FetchMensSingleData=(id)=>{
return axios.get(`http://localhost:4000/products/men/${id}`)
}


export const getWomensSingleRequest=()=>{
    return{
        type:types.GET_WOMENS_DATA_SINGLE_REQUEST
    }
}
export const getWomensSingleSuccess=(payload)=>{
    return{
        type:types.GET_WOMENS_DATA_SINGLE_SUCCESS,
        payload,
    }
}
export const getWomensSingleFailure=()=>{
    return{
        type:types.GET_WOMENS_DATA_SINGLE_FAILURE
    }
}

export const FetchWomensSingleData=(id)=>{
    console.log("FetchWomensSingleData ",id)
    return axios.get(`http://localhost:4000/products/women/${id}`)
    }


