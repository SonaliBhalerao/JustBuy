import { Box, CircularProgress, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AdminEditButton } from './AdminEditButton';
// import { AdminEditButton } from './AdminEditButton';

export const AdminMensSection = () => {

const [data,setData] = useState([])

    const getData = ()=> {
        fetch('https://justbuybackend.onrender.com/products/men', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }})
    .then((response) => response.json())
    .then((response) => setData(response));
    }

  useEffect(() => {
    getData()
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
            draggable={false}
        >
            {
              data.map((e) => {
                  return <Box 
                          m={"20px"} 
                          key={e} 
                          _hover={{
                            // cursor:"pointer",
                          }} 
                        >
                          <Image 
                            src={e.productImg} 
                            alt="" srcset="" 
                          />
                          <Box >
                            <Box fontFamily={"Montserrat"} fontSize={"14px"} >
                                <Text>{`Category : ${e.category}`}  </Text>
                                <Text>{`rating : ${e.rating}`}</Text>
                                <Text>{`Description : ${e.description}`}</Text>
                                <Text>{`Final Price : ${e.finalprice}`}</Text>
                                <Text>{`Strick Price : ${e.strickprice}`}</Text>
                                <Text>{`Tribe Price : ${e.tribeprice}`} </Text>
                                <Text>{`Seller : ${e.seller}`}</Text>                    
                            </Box>
                            <Box p={"10px"} >
                                <AdminEditButton element={e} id={e._id} getData={getData} />
                            </Box>
                        
                          </Box>
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


