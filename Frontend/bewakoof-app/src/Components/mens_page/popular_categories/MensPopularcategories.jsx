import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const MensPopularcategories = () => {

  const images = [
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-1-1665646057.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-fullsleeves-men-1665149767.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-oversizedtees-1661866116.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-7-1662981567.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-8-1662981567.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-6-1662981566.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-1661866109.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1661866115.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-shirts-1662044509.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Boxers-1657526325.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-shorts-1661866118.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-accessories-covers-1661866111.jpg",
  ]  
     
  return (
    <Box display={"grid"} gridTemplateColumns={"repeat(6,1fr)"} >
      {
        images.map((e) => {
          return <Box key={e} _hover={{cursor:"pointer"}} >
          <Link to="/women" >  <img src={e} alt="" srcset="" /> </Link>
          </Box>
        })
      }
    </Box>
  )
}
