// NOTE: DO NOT MODIFY the intial state structure in this file.

import * as types from "./actionType";

const initialState = {
	isLoading: false,
	isError: false,
	getMenData: [],
	getWomenData: [],
	MensSingleProduct: [],
	WomenSingleProduct: [],
	Cart: [],
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		// MEN DATA TYPE
		case types.GET_MEN_DATA_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};

		case types.GET_MEN_DATA_SUCCESS:
			return {
				...state,
				getMenData: payload,
				isLoading: false,
				isError: false,
			};

		case types.GET_MEN_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};

		// WOMEN DATA TYPE
		case types.GET_WOMEN_DATA_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};

		case types.GET_WOMEN_DATA_SUCCESS:
			return {
				...state,
				getWomenData: payload,
				isLoading: false,
				isError: false,
			};

		case types.GET_WOMEN_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};

		// GETTING MENS SINGLE DATA
		case types.GET_MENS_DATA_SINGLE_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case types.GET_MENS_DATA_SINGLE_SUCCESS:
			return {
				...state,
				MensSingleProduct: payload,
				isLoading: false,
				isError: false,
			};

		case types.GET_MENS_DATA_SINGLE_FAILURE:
			return {
				...state,
				isLoading: false,
				MensSingleProduct: [],
				isError: true,
			};

		// GETTING WOMENS SINGLE DATA
		case types.GET_WOMENS_DATA_SINGLE_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case types.GET_WOMENS_DATA_SINGLE_SUCCESS:
			return {
				...state,
				isLoading: false,
				WomenSingleProduct: payload,
				isError: false,
			};

		case types.GET_WOMENS_DATA_SINGLE_FAILURE:
			return {
				...state,
				isLoading: false,
				WomenSingleProduct: [],
				isError: true,
			};

		//cart items

		case types.GET_CART_PRODUCTS_REQUEST: {
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		}

		case types.GET_CART_PRODUCTS_SUCCESS: {
			return {
				...state,
				Cart: payload,
				isLoading: false,
				isError: false,
			};
		}

		case types.GET_CART_PRODUCTS_FAILURE: {
			return {
				...state,
				Cart: [],
				isLoading: false,
				isError: true,
			};
		}

		//add cart item

		case types.ADD_CART_PRODUCT_REQUEST: {
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		}

		case types.ADD_CART_PRODUCT_SUCCESS: {
			return {
				...state,
				Cart: [...state.Cart, payload],
				isLoading: false,
				isError: false,
			};
		}

		case types.ADD_CART_PRODUCT_FAILURE: {
			return {
				...state,
				Cart: state.Cart,
				isLoading: false,
				isError: true,
			};
		}

		//delete cart item

		case types.DELETE_CART_PRODUCT_REQUEST: {
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		}

		case types.DELETE_CART_PRODUCT_SUCCESS: {
			return {
				...state,
				Cart: payload,
				isLoading: false,
				isError: false,
			};
		}

		case types.DELETE_CART_PRODUCT_FAILURE: {
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		}

		//edit cart item

		case types.EDIT_CART_PRODUCT_REQUEST: {
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		}

		case types.EDIT_CART_PRODUCT_SUCCESS: {
			return {
				...state,
				products: payload,
				isLoading: false,
				isError: false,
			};
		}

		case types.EDIT_CART_PRODUCT_FAILURE: {
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		}
		default:
			return state;
	}
};

export { reducer };
