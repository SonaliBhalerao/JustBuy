import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"

export const NavbarBottom = () => {
  return (
    <Box 
        borderBottom={"1px solid lightgray"}
        p={"4px"}
        boxSizing={"border-box"}
        position={"sticky"}
        top={{base:'48px', sm:'48px', md:'48px', lg:'54px', xl:'54px','2xl': '54px'}} 
        // h={{base:'40px', sm:'40px', md:'40px', lg:'60px', xl:'60px','2xl': '60px'}} 
        zIndex={"999"}
        fontFamily={"Montserrat"} 
        fontSize={{ base:'10px', sm: '12px', md: '14px', lg: '14px', xl:' 14px', '2xl': '14px'}}  
        fontWeight={400}
        textAlign={"center"}
        bg={"white"}
    >
        <Flex 
            // border={"1px solid black"} 
            margin={"auto"}
            justifyContent={"space-between"}
            w={{ base:'90%', sm: '90%', md: '94%', lg: '60%', xl:' 60%', '2xl': '50%'}} 
        >    
            <Link to="/" >    
                <Box 
                    _hover={{
                    borderBottom:"2px solid yellow",
                    cursor:"pointer",
                    fontWeight:500
                    }}
                    // w={"20%"} 
                >
                    HOT DEALS
                </Box>
            </Link>

            <Link to="/mens-home" > 
                <Box 
                    _hover={{
                        borderBottom:"2px solid yellow",
                        cursor:"pointer",
                        fontWeight:500
                    }}
                    // w={"20%"} 
                >
                    MEN
                </Box>
            </Link> 

            <Link to="/womens-home" > 
                <Box 
                    _hover={{
                        borderBottom:"2px solid yellow",
                        cursor:"pointer",
                        fontWeight:500
                    }}
                    // w={"20%"} 
                >
                    WOMEN
                </Box>
            </Link> 

            <Link to="/" > 
                <Box 
                    _hover={{
                        borderBottom:"2px solid yellow",
                        cursor:"pointer",
                        fontWeight:500
                        }}
                    // w={"20%"}  
                    >
                    ACCESSORIES
                </Box>
            </Link> 

            <Link to="/"> 
                <Box 
                    _hover={{
                        borderBottom:"2px solid yellow",
                        cursor:"pointer",
                        fontWeight:500
                    }}
                    // w={"20%"} 
                >   
                    WINTERWEAR
                </Box>
            </Link> 

        </Flex>
    </Box>
  )
}
