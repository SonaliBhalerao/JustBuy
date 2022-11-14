import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const WomensSmallCarousel = () => {
    
    const images = [
        "https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Women-1667985533.gif",
        "https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-bestseller-1665739418.jpg",
        "https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-daily-deals-additional-10--off-01-1666012651.jpg",
        "https://images.bewakoof.com/uploads/grid/app/custom-women-1660932774.jpg",
        "https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-new-arrivals-1665739419.jpg",
        "https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-lastsizesleft-1666074760.jpg",
        "https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-plussize-1665739420.jpg",
        "https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-official-merch-1665739420.jpg",
        "https://images.bewakoof.com/uploads/grid/app/vote-1660932778.jpg",
        "https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-personal-care-1660932777.jpg",
        "https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-coupon-offer-1660932775.jpg",
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
          items: 9
        }
      };
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
  return (
    <Box margin={"auto"} w={{ base:'90%', sm: '90%', md: '70%', lg: '70%', xl:' 70%', '2xl': '70%'}}  >
        <Carousel 
            arrows={false}
            responsive={responsive} 
            autoPlay={true}
            autoPlaySpeed={3000}
            showDots={false}
            transitionDuration={500}
            infinite={false}
        >
            
             {
                images.map((e,i) => {
                   return <Box m={"0px"} key={e} >
                        <img src={e} alt="" srcset="" />
                        <Text textAlign={"center"} 
                                fontFamily={"Montserrat"}   
                                  fontSize={{ base:'6px', sm: '9px', md: '11px', lg: '11px', xl:' 12px', '2xl': '12px'}}>
                        {text[i]}
                        </Text>
                    </Box>
                })
            } 
            
        </Carousel>
    </Box>
  )
}
