import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CgShoppingBag } from 'react-icons/cg';
import { CiHeart } from 'react-icons/ci';
import ProductOffer from "./Offers";
import Size from "./Size";

export default function SingleProductDetial(){
    return(
        <Box maxH={"550px"} overflow={"scroll"} width={"100%"}>
            <Text fontSize={"22px"} fontWeight={"500"} color={"rgb(79, 83, 98)"}>JustBuy</Text>

            <Text font-size={"14px"} fontWeight={"500"} color={"RGBA(0, 0, 0, 0.48)"}  maxW={"90%"} marginTop={"10px"}>Men's White What The Duck Graphic Printed Oversized T-shirt</Text>


            <Flex alignItems={"center"} marginTop={"10px"} gap={"10px"}>
                <Text fontSize={"22px"} fontWeight={"500"}>₹599</Text>
                <Text textDecoration={"line-through"} color={"RGBA(0, 0, 0, 0.48)"} >₹1499</Text>
            </Flex>

            <Text color={"RGBA(0, 0, 0, 0.48)"} fontSize={"14px"}>inclusive of all taxes</Text>


            <Flex gap={"15px"} marginTop={"10px"} fontSize={"13px"} >
                <Box border={"1px solid grey"} padding={"5px"} bg={"RGBA(0, 0, 0, 0.64)"}>
                    <Text fontWeight={"700"} color={"white"}>OVERSIZED FIT</Text>
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
              
              <Size/>

              <br />
              <Flex gap={"10px"}>
                    <Button leftIcon={ <CgShoppingBag/>} bg={"rgb(253,216,53)"}  colorScheme='rgb(253,216,53)' variant='solid'>
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