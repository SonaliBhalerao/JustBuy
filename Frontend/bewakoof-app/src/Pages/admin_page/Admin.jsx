import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { AdminMensSection } from '../../Components/Admin/AdminMensSection'
import { AdminWomensSection } from '../../Components/Admin/AdminWomensSection'

export const Admin = () => {
  return (
   <Box>
    <Text textAlign={"center"} fontFamily={"Montserrat"} >MEN'S Section</Text>
    <AdminMensSection/>
    <Text textAlign={"center"} fontFamily={"Montserrat"}  >WOMEN'S Section</Text>
    <AdminWomensSection/>
   </Box>
  )
}
