import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { CgShoppingBag } from 'react-icons/cg';
import { CiHeart } from 'react-icons/ci';
import ProductOffer from "./Offers";
import Size from "./Size";
import { getLocalData } from "../../Utils/LocalStorage";


export default function SingleProductDetial({data}){

    const [token,setToken] = useState(getLocalData("userToken"))
    const [size,setsize]=useState("");
    const Toast=useToast()
    
    const AddCart=(data)=>{
        console.log("data",data._id);
        delete data._id;
        data.size=size;
        data.qty=1;

        const payload=data
            return axios.post("https://justbuybackend.onrender.com/products/cart",payload,{'headers' : { 'Authorization' : 'Bearer'+' '+token}}).then((res)=>{
                console.log(res.data)

                Toast({
                    title: res.data,
                    description: `${res.data === "Product Already In The Cart" ? "error" : "success"}`,
                    status: `${res.data === "Product Already In The Cart" ? "error" : "success"}`,
                    duration: 5000,
                    isClosable: true,
                    position:"top"
                  })
            })
            .catch((err)=>{
                console.log("error While adding to cart",err);
                Toast({
                    title: 'YOU ARE NOT AUTHORIZED!!',
                    description: 'Please Login',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position:"top"
                  })
            })
    }
    return(
        <Box maxH={"80vh"} overflow={"scroll"} width={"100%"}>
            <Text fontSize={"22px"} fontWeight={"500"} color={"rgb(79, 83, 98)"}>JustBuy</Text>
            <Text font-size={"14px"} fontWeight={"500"} color={"RGBA(0, 0, 0, 0.48)"}  maxW={"90%"} marginTop={"10px"}>{data.description}</Text>

            <Flex alignItems={"center"} marginTop={"10px"} gap={"10px"}>
                <Text fontSize={"22px"} fontWeight={"500"}>{data.finalprice}</Text>
                <Text textDecoration={"line-through"} color={"RGBA(0, 0, 0, 0.48)"} >{data.strickprice}</Text>
            </Flex>

            <Text color={"RGBA(0, 0, 0, 0.48)"} fontSize={"14px"}>inclusive of all taxes</Text>

            <Flex gap={"15px"} marginTop={"10px"} fontSize={"13px"} >
                <Box border={"1px solid grey"} padding={"5px"} bg={"RGBA(0, 0, 0, 0.64)"}>
                    <Text fontWeight={"700"} color={"white"}>{data.category}</Text>
                </Box>
                <Box border={"1px solid black"} padding={"5px"}>
                    <Text fontWeight={"500"} fontSize={{base:"12px",md:"14"}}>DESIGN OF THE DAY</Text>
                </Box>
            </Flex>

            <br />
            <hr/>
            <Text marginTop={"15px"} fontSize={"14px"} color={"RGBA(0, 0, 0, 0.48)"}>TriBe members get an extra discount of ₹40 and FREE shipping.</Text>
            <br />
            <hr />
            <br />

             <Text fontSize={"16px"} fontWeight={"650"}>SELECT SIZE</Text>
              
              <Size setsize={setsize} />

              <br />
              <Flex gap={"10px"}>
                    <Button onClick={()=>AddCart(data)} leftIcon={ <CgShoppingBag/>} bg={"rgb(253,216,53)"}  colorScheme='rgb(253,216,53)' variant='solid'>
                        ADD TO BAG
                    </Button>
                    <Button leftIcon={ <CiHeart/>} variant='solid' color={"RGBA(0, 0, 0, 0.48)"} border={"1px solid grey"} bg={"white"} colorScheme='white'>
                        WISHLIST
                    </Button>
              </Flex>
              <br />
              <hr />
              <ProductOffer/>
        </Box>
    )
}