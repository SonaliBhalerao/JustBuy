import { Container, Flex } from "@chakra-ui/react"
import SingleProductImg from "../../Components/Single_Product/ProductImg"
import SingleProductDetial from "../../Components/Single_Product/ProductsDetails"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { FetchMensSingleData, getMensSingleFailure, getMensSingleRequest, getMensSingleSuccess } from "../../Redux/AppReducer/action";
import { useEffect } from "react";


export const MensSinglePage=()=>{
    const Params=useParams();
    console.log(Params.name)
    // const Params="636e247cb686dd23667208f8";

    
    const {MensSingleProduct,isLoding,isError}=useSelector((store)=>{
        return {
            MensSingleProduct:store.AppReducer.MensSingleProduct,
            isLoding:store.AppReducer.isLoading,
            isError:store.AppReducer.isError,
        }
    })
    const dispatch=useDispatch();
    const handleSingledata=()=>{
        dispatch(getMensSingleRequest())
        FetchMensSingleData(Params.name).then((res)=>{
            console.log(res.data);
            dispatch(getMensSingleSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(getMensSingleFailure(err))
        })
    }
    useEffect(()=>{
        handleSingledata()
    },[Params.name])
   //Params.id
    console.log(MensSingleProduct,isLoding,isError);
    return(
        <Container maxW={{base:"100%",md:"90%",lg:"75%"}} marginTop={"10px"} >
            <Flex gap={"10px"} maxW={"100%"} direction={{base:"column",lg:"row"}}>
                  <SingleProductImg data={MensSingleProduct}/>
                  <SingleProductDetial data={MensSingleProduct}/>
            </Flex>
        </Container>
    )
}