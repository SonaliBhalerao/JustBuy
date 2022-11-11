// NOTE: DO NOT MODIFY the intial state structure in this file.

import * as types from './actionTypes'


const initialState = {
  userData:{},
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,

  successfullyCreated: false,
  createAccountLooding: false,
  createAccountError: false,
  errorData: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        createAccountLooding: false,
        successfullyCreated: true,
        createAccountError: false,
        userData: payload,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        createAccountLooding: false,
        successfullyCreated: false,
        createAccountError: true,
        isAuth:false,
        errorData: payload,
      };

    case types.LOGIN_REQUEST:
      return {
        ...state,
        createAccountLooding: true,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        userData: payload.data,
        isError:false,
      };
    
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isAuth:false,
        isLoading: false,
        isError: true,
        errorData: payload,
      };
      case types.LOGOUT:
      return {
        ...state,
        userData: {},
        token: "",
        isAuth: false,
        isLoading: false,
        isError: false,

        successfullyCreated: false,
        createAccountLooding: false,
        createAccountError: false,
        errorData: [],
      };
    default :
    return state
  }
};

export { reducer };
