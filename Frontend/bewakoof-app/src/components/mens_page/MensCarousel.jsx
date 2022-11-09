import { Box } from '@chakra-ui/react';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const MensCarousel = () => {
    
    const images = [
        "https://images.bewakoof.com/uploads/grid/app/WinterWear-Nov-StaticBanner-men-Printed-1667897007.jpg",
        "https://images.bewakoof.com/uploads/grid/app/Oversized-sweatshirt-and-hoodies-1x1-m-1667798822.jpg",
        "https://images.bewakoof.com/uploads/grid/app/official-merch-1x1-Static-banner-1667926321.png",
        "https://images.bewakoof.com/uploads/grid/app/very-peri-collection-1x1-m-1667926321.jpg"
        
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
