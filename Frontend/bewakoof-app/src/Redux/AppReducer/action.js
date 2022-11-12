//Write the ActionCreator functions here
import axios from 'axios'
import * as types from './actionType'


// WOMEN PAGE 
export const getWomenDataRequest = () => {
    return {
        type:types.GET_WOMEN_DATA_REQUEST
    }
}
export const getWomenDataSuccess = (payload) => {
    return {
        type:types.GET_WOMEN_DATA_SUCCESS,
        payload
    }
}
export const getWomenDataFailure = () => {
    return {
        type:types.GET_WOMEN_DATA_FAILURE
    }
}

export const gettingWomenData = ()=> {
    return axios.get('http://localhost:4000/products/women')
}


// MEN PAGE 
export const getMenDataRequest = () => {
    return {
        type:types.GET_MEN_DATA_REQUEST
    }
}
export const getMenDataSuccess = (payload) => {
    return {
        type:types.GET_MEN_DATA_SUCCESS,
        payload
    }
}
export const getMenDataFailure = () => {
    return {
        type:types.GET_MEN_DATA_FAILURE
    }
}

export const gettingMenData = ()=> {
    return axios.get('http://localhost:4000/products/men')
}


// single page men
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


//  single page women
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


