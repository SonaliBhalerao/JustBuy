//Write the ActionCreator functions here
import * as types from './actionTypes'
import axios from 'axios'

// export const handleProceedFunction =(data)=>(dispatch)=>{
//     dispatch({ type : types.SIGNUP_REQUEST });

//     axios
//     .post("https://justbuybackend.onrender.com/signup", data)
//     .then((res)=>{
//         console.log(res);
//         dispatch({ type : types.SIGNUP_SUCCESS, payload: res.data});
//     })
//     .catch((e) => {
//          console.log(e)
//         dispatch({ type: types.SIGNUP_FAILURE, payload: e.response.data.errors });
//     });
// }


export const loginRequest = () => {
    return {
        type:types.LOGIN_REQUEST
    }
}
export const loginSuccess = (payload) => {
    return {
        type:types.LOGIN_SUCCESS,payload
    }
}
export const loginFailure = () => {
    return {
        type:types.LOGIN_FAILURE
    }
}

export const loginCheck = (payload) => (dispatch) => {

    dispatch(loginRequest())
   return axios({
        method:'post',
        url:'api/login',
        baseURL:'https://reqres.in',
        data:payload
    })
    .then((r) => dispatch(loginSuccess(r.data.token)))

}


