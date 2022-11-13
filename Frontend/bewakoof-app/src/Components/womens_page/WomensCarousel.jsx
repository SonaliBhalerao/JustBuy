import { Box } from '@chakra-ui/react';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const WomensCarousel = () => {
    
    const images = [
        "https://images.bewakoof.com/uploads/grid/app/WinterWear-Nov-StaticBanner-Women-Printed-1667897007.jpg",
        "https://images.bewakoof.com/uploads/grid/app/Dapper-Typography-Sweatshirts---Hoodies-1x1-w-1667998052.jpg",
        "https://images.bewakoof.com/uploads/grid/app/official-merch-1x1-Static-banner-1667926321.png",
        "https://images.bewakoof.com/uploads/grid/app/very-peri-collection-1x1-w-1667926321.jpg",
        "https://images.bewakoof.com/uploads/grid/app/streetwear-women-new-1668157458.jpg"
        
    ]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
    <Box >
        <Carousel 
            arrows={false}
            responsive={responsive} 
            autoPlay={true}
            autoPlaySpeed={3000}
            showDots={false}
            transitionDuration={500}
            infinite={true}
        >
            
             {
                images.map((e) => {
                   return <Box m={"10px"} key={e} >
                        <img src={e} alt="" srcset="" />
                    </Box>
                })
            } 
            
        </Carousel>
    </Box>
  )
}
