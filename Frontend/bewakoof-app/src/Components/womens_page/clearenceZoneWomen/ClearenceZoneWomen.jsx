import { Box, CircularProgress, Flex, Image,Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ClearenceZoneWomen = () => {

  const [data,setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/products/women_asc', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }})
    .then((response) => response.json())
    .then((response) => setData(response));
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3
    }
  };
  return (
    <Box minHeight={"300px"}  >
       { data.length>0 ?
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
                            src={e.productImg} 
                            alt="" srcset="" 
                          />
                          <Flex gap={"10px"} >
                            <Text 
                              fontFamily={"Montserrat"} 
                              fontWeight={600} 
                              fontSize={"14px"} 
                              >
                                {e.tribeprice}
                              </Text>
                            <Text 
                              textDecoration={"line-through"} 
                              color={"gray"} 
                              fontSize={"14px"} 
                            >
                              {e.strickprice}
                            </Text>
                          </Flex>
                  </Box>
              }) 
            }    
        </Carousel>
      : 
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} minHeight={"300px"} >
        <Box >
          <CircularProgress isIndeterminate color='rgb(253,216,53)' />
        </Box>  
      </Box>
      }
    </Box>
  )
}
