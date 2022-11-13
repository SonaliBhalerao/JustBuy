//Write the ActionCreator functions here
import axios from "axios";
import * as types from "./actionType";

// WOMEN PAGE
export const getWomenDataRequest = () => {
	return {
		type: types.GET_WOMEN_DATA_REQUEST,
	};
};
export const getWomenDataSuccess = (payload) => {
	return {
		type: types.GET_WOMEN_DATA_SUCCESS,
		payload,
	};
};

export const getWomenDataFailure = () => {

	return {
		type: types.GET_WOMEN_DATA_FAILURE,
	};
};

   


export const gettingWomenData = ()=> {
    return axios.get('https://justbuybackend.onrender.com/products/women')
}




// MEN PAGE
export const getMenDataRequest = () => {
	return {
		type: types.GET_MEN_DATA_REQUEST,
	};
};
export const getMenDataSuccess = (payload) => {
	return {
		type: types.GET_MEN_DATA_SUCCESS,
		payload,
	};
};
export const getMenDataFailure = () => {

	return {
		type: types.GET_MEN_DATA_FAILURE,
	};
};


export const gettingMenData = ()=> {
    return axios.get('https://justbuybackend.onrender.com/products/men')
}



// single page men

export const getMensSingleSuccess = (payload) => {
	return {
		type: types.GET_MENS_DATA_SINGLE_SUCCESS,
		payload,
	};
};
export const getMensSingleFailure = () => {
	return {
		type: types.GET_MENS_DATA_SINGLE_FAILURE,
	};
};

export const getMensSingleRequest=()=>{
    return{
        type:types.GET_MENS_DATA_SINGLE_REQUEST
    }
}



export const FetchMensSingleData=(id)=>{
return axios.get(`https://justbuybackend.onrender.com/products/men/${id}`)
}




//  single page women

export const getWomensSingleRequest = () => {
	return {
		type: types.GET_WOMENS_DATA_SINGLE_REQUEST,
	};
};
export const getWomensSingleSuccess = (payload) => {
	return {
		type: types.GET_WOMENS_DATA_SINGLE_SUCCESS,
		payload,
	};
};
export const getWomensSingleFailure = () => {
	return {
		type: types.GET_WOMENS_DATA_SINGLE_FAILURE,
	};
};



// **************** CART ITEMS  ***********************

//get cart products

export const getCartProductsRequest = () => {
	return {
		type: types.GET_CART_PRODUCTS_REQUEST,
	};
};

export const getCartProductsSuccess = (payload) => {
	return {
		type: types.GET_CART_PRODUCTS_SUCCESS,
		payload,
	};
};

export const getCartProductsFailure = () => {
	return {
		type: types.GET_CART_PRODUCTS_FAILURE,
	};
};

//add cart product

export const addCartProductRequest = () => {
	return {
		type: types.ADD_CART_PRODUCT_REQUEST,
	};
};

export const addCartProductSuccess = (payload) => {
	return {
		type: types.ADD_CART_PRODUCT_SUCCESS,
		payload,
	};
};

export const addCartProductFailure = () => {
	return {
		type: types.ADD_CART_PRODUCT_FAILURE,
	};
};

//delete cart product

export const deleteCartProductRequest = () => {
	return {
		type: types.DELETE_CART_PRODUCT_REQUEST,
	};
};

export const deleteCartProductSuccess = (payload) => {
	return {
		type: types.DELETE_CART_PRODUCT_SUCCESS,
		payload,
	};
};

export const deleteCartProductFailure = () => {
	return {
		type: types.DELETE_CART_PRODUCT_FAILURE,
	};
};

//EDIT cart product

export const editCartProductRequest = () => {
	return {
		type: types.EDIT_CART_PRODUCT_REQUEST,
	};
};


export const FetchWomensSingleData=(id)=>{
    console.log("FetchWomensSingleData ",id)
    return axios.get(`https://justbuybackend.onrender.com/products/women/${id}`)
    }


export const editCartProductSuccess = (payload) => {
	return {
		type: types.EDIT_CART_PRODUCT_SUCCESS,
		payload,
	};
};

export const editCartProductFailure = () => {
	return {
		type: types.EDIT_CART_PRODUCT_FAILURE,
	};
};
