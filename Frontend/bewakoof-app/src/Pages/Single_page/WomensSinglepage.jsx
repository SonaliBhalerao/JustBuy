import { Container, Flex } from "@chakra-ui/react"
import SingleProductImg from "../../Components/Single_Product/ProductImg"
import SingleProductDetial from "../../Components/Single_Product/ProductsDetails"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { FetchWomensSingleData, getWomensSingleFailure, getWomensSingleRequest, getWomensSingleSuccess } from "../../Redux/AppReducer/action";


export const WomensSinglePage=()=>{
    const Params=useParams();
    // console.log(Params.name)
    
    const {WomenSingleProduct,isLoding,isError}=useSelector((store)=>{
        return {
            WomenSingleProduct:store.AppReducer.WomenSingleProduct,
            isLoding:store.AppReducer.isLoading,
            isError:store.AppReducer.isError,
        }
    })
    const dispatch=useDispatch();
    const handleSingledata=()=>{
        dispatch(getWomensSingleRequest())
        console.log("dispatch Request")
        FetchWomensSingleData(Params.name).then((res)=>{
            console.log( "resdata",res.data)
            dispatch(getWomensSingleSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(getWomensSingleFailure(err))
        })
    }
    useEffect(()=>{
        handleSingledata()
    },[])
    console.log( "womendata",WomenSingleProduct)
    return(
        <Container  maxW={{base:"100%",md:"90%",lg:"75%"}} marginTop={"10px"} >
            <Flex maxW={"100%"} direction={{base:"column",lg:"row"}}>
                  <SingleProductImg data={WomenSingleProduct}  />
                  <SingleProductDetial data={WomenSingleProduct}/>
            </Flex>
        </Container>
    )
}