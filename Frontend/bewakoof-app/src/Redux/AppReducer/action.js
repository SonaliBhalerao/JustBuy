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



