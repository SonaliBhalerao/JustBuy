import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const WomensPopularcategories = () => {

  const images = [
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-BFtees-1661872777.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-fullsleeves-women-1665155573.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-oversizedtees-1661872781.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-9-1662981568.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-10-1662981568.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-11-1662981568.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-printedtees-1661872782.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-jeans-1661872779.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-tops-1661872784.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-joggers-1661872780.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-pj-1661872781.jpg",
    "https://images.bewakoof.com/uploads/grid/app/category-box-new-women-covers-1661872779.jpg",
  ]

  return (
    <Box display={"grid"} gridTemplateColumns={"repeat(6,1fr)"} >
      {
        images.map((e) => {
          return <Box key={e} _hover={{cursor:"pointer"}} >
          <Link to="/women" >  <img src={e} alt="" srcset="" />  </Link>
          </Box>
        })
      }
    </Box>
  )
}
