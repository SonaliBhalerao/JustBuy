import { Box, CircularProgress, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';

export const BestSellerForMen = () => {

const [data,setData] = useState([])
const navigate = useNavigate()
  useEffect(() => {
    fetch('https://justbuybackend.onrender.com/products/men', {
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
    <Box minHeight={"150px"}  >
       { data.length>0 ?
        <Carousel 
            arrows={true}
            responsive={responsive} 
            showDots={false}
            transitionDuration={500}
            style={{zIndex:"0"}}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {
              data.map((e) => {
                  return <Box 
                          m={{base:"10px",sm: '10px', md: '20px', lg: '20px', xl:'20px', '2xl': '20px'}} 
                          key={e} 
                          _hover={{
                            cursor:"pointer",
                          }} 
                          onClick={()=> { navigate(`/mens-home/${e._id}`) }}
                          fontSize={{ base:'8px', sm: '9px', md: '12px', lg: '14px', xl:' 16px', '2xl': '16px'}}
                        >
                          <Image 
                            src={e.productImg} 
                            alt="" srcset="" 
                          />
                          <Flex gap={"10px"} >
                            <Text 
                              fontFamily={"Montserrat"} 
                              fontWeight={600} 
                              >
                                {e.tribeprice}
                              </Text>
                            <Text 
                              textDecoration={"line-through"} 
                              color={"gray"}
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
