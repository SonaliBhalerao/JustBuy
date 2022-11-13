import { Heading, Text,Box } from '@chakra-ui/react'
import React from 'react'
import * as data from './navMensData'
// import '../Navbar.css'

export const MensDropDown = () => {
    
  
  return (

    <Box fontFamily={"Montserrat"} fontSize={"12px"} fontWeight={400} color={"rgb(51, 51, 51)"}  display={"flex"} mt={"30px"} ml={"30px"} >

        <Box width={"70%"} display={"flex"} flexDirection={'column'} gap={"24px"}  >
            <Box display={"flex"}  justifyContent={"space-between"} >
                <Box  >
                    <Heading fontFamily={"Montserrat"} fontSize={"14px"} mb={"9px"} fontWeight={500} >
                    Topwear
                    </Heading>
                        {
                        data.Topwear.map((e,i) => {
                            return <Text key={e+i}
                                        _hover={{cursor:"pointer",textDecoration:"underline"}}
                                        mb={"6px"} 
                                    >
                                        {e}
                                    </Text>
                        })
                        }
                </Box>

                <Box  >
                    <Heading fontFamily={"Montserrat"} fontSize={"14px"} mb={"9px"} fontWeight={500} >
                        Bottomwear
                    </Heading>
                        {
                        data.Bottomwear.map((e) => {
                            return <Text key={e}
                                        _hover={{cursor:"pointer",textDecoration:"underline"}} 
                                        mb={"6px"} 
                                    >
                                        {e}
                                    </Text>
                        })
                        }
                </Box>

                <Box  >
                    <Heading fontFamily={"Montserrat"} fontSize={"14px"} mb={"9px"} fontWeight={500} >
                        Winterwear
                    </Heading>

                        {
                        data.Winterwear.map((e) => {
                            return <Text key={e}
                                        _hover={{cursor:"pointer",textDecoration:"underline"}}
                                        mb={"6px"}  
                                    >
                                        {e}
                                    </Text>
                        })
                        }
                    
                    <Heading fontFamily={"Montserrat"} fontSize={"14px"} mb={"9px"} fontWeight={500} >
                        Sports & Activewear
                    </Heading>

                        {
                        data.Sports_Activewear.map((e) => {
                            return <Text key={e}
                                        _hover={{cursor:"pointer",textDecoration:"underline"}}
                                        mb={"6px"}  
                                    >
                                        {e}
                                    </Text>
                        })
                        }

                    <Heading fontFamily={"Montserrat"} fontSize={"14px"} mb={"9px"} fontWeight={500} >
                        Footwear
                    </Heading>
                        {
                        data.Footwear.map((e) => {
                            return <Text  key={e}
                                        _hover={{cursor:"pointer",textDecoration:"underline"}}
                                        mb={"6px"}  
                                    >
                                        {e}
                                    </Text>
                        })
                        }
                </Box>
            </Box>
            
            {/* second  */}

            <Box display={"flex"}   justifyContent={"start"} gap={"118px"} >
                <Box  >
                    <Heading fontFamily={"Montserrat"} fontSize={"14px"} mb={"9px"} fontWeight={500} >
                        Accessories
                    </Heading>
                    {
                        data.Accessories.map((e) => {
                            return <Text  key={e}
                                        _hover={{cursor:"pointer",textDecoration:"underline"}}
                                        mb={"6px"}  
                                    >
                                        {e}
                                    </Text>
                        })
                    } 
                </Box>

                <Box  >
                    <Heading fontFamily={"Montserrat"} fontSize={"14px"} mb={"9px"} fontWeight={500} >
                            Plus Size
                    </Heading>
                    {
                        data.PlusSize.map((e,i) => {
                            return <Text  key={e+i}
                                        _hover={{cursor:"pointer",textDecoration:"underline"}}
                                        mb={"6px"}  
                                    >
                                        {e}
                                    </Text>
                        })
                    } 
                </Box>

            </Box>
{/* third */}
            

            <Box display={"flex"}  justifyContent={"space-between"} >
                <Box  >
                    <Heading fontFamily={"Montserrat"} fontSize={"14px"} mb={"9px"} fontWeight={500} >
                        Innerwear & Loungewear
                    </Heading>
                    {
                        data.Innerwear_Loungewear.map((e) => {
                            return <Text  key={e}
                                        _hover={{cursor:"pointer",textDecoration:"underline"}}
                                        mb={"6px"}  
                                    >
                                        {e}
                                    </Text>
                        })
                    } 
                </Box>

                <Box  >
                    <Heading fontFamily={"Montserrat"} fontSize={"14px"} mb={"9px"} fontWeight={500} >
                        Personal Care & Grooming    
                    </Heading>
                    {
                        data.Personal_Care_Grooming.map((e,i) => {
                            return <Text  key={e+i}
                                        _hover={{cursor:"pointer",textDecoration:"underline"}}
                                        mb={"6px"}  
                                    >
                                        {e}
                                    </Text>
                        })
                    } 
                </Box>
                
                <Box  >
                     <Heading fontFamily={"Montserrat"} fontSize={"14px"} mb={"9px"} fontWeight={500} >
                        Party & Drinkware
                    </Heading>
                        <Text 
                            _hover={{cursor:"pointer",textDecoration:"underline"}}
                            mb={"6px"} 
                        >
                            Mugs
                        </Text>

                    <Heading fontFamily={"Montserrat"} fontSize={"14px"} mb={"9px"} fontWeight={500} >
                        Notebooks
                    </Heading>
                        <Text 
                            _hover={{cursor:"pointer",textDecoration:"underline"}}
                            mb={"6px"} 
                        >
                            Notebooks & Planners
                        </Text>
                </Box>
            </Box>         
            
        </Box>
        
        {/* // right */}

        <Box borderLeft={"1px solid lightgray"} pl={"40px"} w={"40%"} ml={"40px"} >
             <Box  >
                <Heading fontFamily={"Montserrat"} fontSize={"14px"} mb={"9px"} fontWeight={500} >
                    Specials   
                </Heading>
                <Box display={"flex"} flexDir={"column"} gap={"10px"}>
                    {
                        data.specials.map((e,i) => {
                            return <Box key={e+i} display={"flex"} flexDir={"row"} gap={"10px"} justifyContent={"start"} alignItems={"center"} >
                                        <Box width={"10%"}  _hover={{cursor:"pointer"}} >
                                            <img  width={"100%"} src={data.specials_img[i]} alt="" srcset="" />
                                        </Box>
                                        <Box >
                                            <Text  
                                                _hover={{cursor:"pointer",textDecoration:"underline"}}
                                                mb={"6px"}  
                                                >
                                                {e}
                                            </Text>
                                        </Box>
                                </Box>
                        })
                    } 
                </Box>
            </Box>
        </Box>

    </Box>
  )
}
