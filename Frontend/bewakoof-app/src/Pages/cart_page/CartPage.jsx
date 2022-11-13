import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from '../../Components/Cart/Cart'
import EmptyCart from '../../Components/Cart/EmptyCart'
import { getCartProductsFailure, getCartProductsRequest, getCartProductsSuccess } from '../../Redux/AppReducer/action'
import { getLocalData } from "../../Utils/LocalStorage";

export const CartPage = () => {

    const dispatch = useDispatch();
    // const cart = useSelector((store) => store.AppReducer.Cart)
    const [token,setToken] = useState(getLocalData("userToken"))
     const [length, setlength] = useState(0)

    const getCartProducts = () => {
		dispatch(getCartProductsRequest());
		return axios.get("https://justbuybackend.onrender.com/products/cart",{'headers' : { 'Authorization' : 'Bearer'+' '+token}})
			.then((res) => {
				console.log('RESSSSS',res.data);
				dispatch(getCartProductsSuccess(res.data));
                setlength(res.data.length)
			})
			.catch((error) => {
				console.log(error);
				dispatch(getCartProductsFailure());
			});
	};
    useEffect(() => {
		getCartProducts();
	}, []);
    // console.log("CARTTTTT",cart)
  return (
    <Box>
        {length>0 ? <Cart/> : <EmptyCart/>  }
    </Box>
  )
}
