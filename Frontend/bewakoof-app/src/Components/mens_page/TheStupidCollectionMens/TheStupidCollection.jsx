import { Box } from '@chakra-ui/react'
import React from 'react'

export const TheStupidCollection = () => {

  const images = [
    "https://images.bewakoof.com/uploads/grid/app/jackets-mid-size-1667293853.jpg",
    "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-playbybewakoof-1666532963.jpg",
    "https://images.bewakoof.com/uploads/grid/app/undrdawg-mid-banner-1667495646.jpg",
    "https://images.bewakoof.com/uploads/grid/app/me-shirt-men-1658682131--1--1666890085.png"
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
