import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const BestSellerForWomen = () => {

  const [data,setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/products/women?limit=11&page=1', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }})
    .then((response) => response.json())
    .then((response) => setData(response));
  }, [])
  console.log(data)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };
  return (
    <Box>
        <Carousel 
            arrows={true}
            responsive={responsive} 
            showDots={false}
            transitionDuration={500}
            style={{zIndex:"0"}}
        >
            {
              data.map((e) => {
                  return <Box 
                          m={"20px"} 
                          key={e} 
                          _hover={{
                            cursor:"pointer",
                          }} 
                        >
                          <Image 
                            src={e.productImgTagsrc} 
                            alt="" srcset="" 
                          />
                          <Flex gap={"10px"} >
                            <Text 
                              fontFamily={"Montserrat"} 
                              fontWeight={600} 
                              fontSize={"14px"} 
                              >
                                {e.loyaltyPriceBox2}
                              </Text>
                            <Text 
                              textDecoration={"line-through"} 
                              color={"gray"} 
                              fontSize={"14px"} 
                            >
                              {e.actualPriceText}
                            </Text>
                          </Flex>
                  </Box>
              })
            }    
        </Carousel>
    </Box>
  )
}
