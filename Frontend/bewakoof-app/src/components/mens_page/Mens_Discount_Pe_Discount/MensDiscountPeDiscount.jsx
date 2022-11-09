import { Box } from '@chakra-ui/react'
import React from 'react'

export const MensDiscountPeDiscount = () => {

  const images = [
    "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2-at-599-1666352224.jpg",
    "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2at899-1667809501.jpg",
    "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-plussize-store-men-1666532800.jpg",
    "https://images.bewakoof.com/uploads/grid/app/new-midsize-banner-AOP-pyjamas-m-1667827799.jpg"
  ]

  return (
    <Box display={"grid"} gridTemplateColumns={"repeat(2,1fr)"} >
      {
        images.map((e) => {
          return <Box key={e} _hover={{cursor:"pointer"}} >
            <img src={e} alt="" srcset="" />
          </Box>
        })
      }
    </Box>
  )
}
