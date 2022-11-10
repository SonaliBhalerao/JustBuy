import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const MensSmallCarousel = () => {
    
    const images = [
        "https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Men-1667985532.gif",
        "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-243-1665572988.jpg",
        "https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-daily-deals-additional-10--off-01-1666012651.jpg",
        "https://images.bewakoof.com/uploads/grid/app/custom-men--1660921672.jpg",
        "https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-new-arrival-1665498051.jpg",
        "https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-lastsizesleft-1666074760.jpg",
        "https://images.bewakoof.com/uploads/grid/app/plus-size-1660921675.jpg",
        "https://images.bewakoof.com/uploads/grid/app/offiicale-merch-1660921674.jpg",
        "https://images.bewakoof.com/uploads/grid/app/vote-1660921675.jpg",
        "https://images.bewakoof.com/uploads/grid/app/PC-1660921675.jpg",
        "https://images.bewakoof.com/uploads/grid/app/offer-box-1660921674.jpg",  
    ]
    const text = [
      "Design of the Day",
      "Bestsellers",
      "Hot Deals",
      "Customization",
      "New Arrivals",
      "Last Sizes Left",
      "Plus Size",
      "Official Collaboration",
      "vote for Design",
      "Personal Care",
      "Coupon Offers"
    ]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 9
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 9
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 9
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 6
        }
      };
  return (
    <Box 
      margin={"auto"} 
        w={{ base:'90%', sm: '90%', md: '70%', lg: '70%', xl:' 70%', '2xl': '70%'}}  
    >
        <Carousel 
            arrows={false}
              responsive={responsive} 
                showDots={false}
                  transitionDuration={500}
                    infinite={false}
        >   
            { images.map((e,i) => {
                   return <Box 
                            m={"0px"} 
                              key={e} 
                          >
                            <img 
                              src={e} 
                                alt="" srcset="" 
                            />
                            <Text 
                              textAlign={"center"} 
                                fontFamily={"Montserrat"}   
                                  fontSize={{ base:'8px', sm: '10px', md: '11px', lg: '11px', xl:' 12px', '2xl': '12px'}} 
                            >
                              {text[i]}
                            </Text>
                    </Box>
                })
            } 
            
        </Carousel>
    </Box>
  )
}
