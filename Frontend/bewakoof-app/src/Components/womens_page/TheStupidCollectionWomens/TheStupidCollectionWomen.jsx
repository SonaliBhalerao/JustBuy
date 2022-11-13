import { Box } from '@chakra-ui/react'
import React from 'react'

export const TheStupidCollectionWomen = () => {

  const images = [
    "https://images.bewakoof.com/uploads/grid/app/me-shirt-women-1658985548-1666890086.jpg",
    "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-combo-tees-w-1660582615.jpg",
    "https://images.bewakoof.com/uploads/grid/app/mid-banner-60-off-women-1658985549.jpg",
    "https://images.bewakoof.com/uploads/grid/app/play-mid-women-banner-1663846560.jpg"
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
