import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
    const navigate = useNavigate()
  return (
    <Box>
        <Flex>
           
                <Box 
                width={"50%"}  
                _hover={{cursor:"pointer"}}
                onClick={()=>{navigate("/mens-home")}}
                >
                    <img width={"100%"}
                        src="https://images.bewakoof.com/web/Gender-Picker-Banner-desktop-desktop-men-2-1667479004.jpg" 
                        alt="" srcset="" 
                    />
                </Box>
                <Box 
                width={"50%"}  
                _hover={{cursor:"pointer"}}
                onClick={()=>{navigate("/womens-home")}}
                >
                    <img width={"100%"}
                    src="https://images.bewakoof.com/web/Gender-Picker-Banner-desktop-desktop-women-3-1667479005.jpg" 
                    alt="" srcset="" 
                />
                </Box>
            
        </Flex>
            <Box>
                <img width={"100%"} src="https://images.bewakoof.com/web/Gender-Picker-Banner-desktop-desktop-4-1667479004.jpg" alt="" srcset="" />
            </Box>
    </Box>
  )
}
