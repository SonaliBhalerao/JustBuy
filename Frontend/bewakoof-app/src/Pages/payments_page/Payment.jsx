import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import { DebitCard } from '../../Components/Payment/DebitCard'
import { Wallet } from '../../Components/Payment/Wallet'
import {AiFillCreditCard} from "react-icons/ai"
import {IoMdWallet} from "react-icons/io"
import {SiPaypal} from "react-icons/si"
import {RiBankFill} from "react-icons/ri"
import {HiCurrencyRupee} from "react-icons/hi"

export const Payment = () => {
    
  return (
       <Flex width={"60%"} margin={"auto"} padding={"10px"}>
        <Box width={"100%"} >
        <Tabs  display={"flex"} gap={"20px"} >
            <TabList bg={"rgb(247,247,247)"} textAlign={"left"} w={"50%"} display={"flex"} flexDir={"column"} fontFamily={"Montserrat"} fontSize={"8px"} >
                <Tab 
                    py={"12px"}
                    _focus={{bg:"white" , borderLeft:"5px solid rgb(66,162,162)" , borderBottom:"none" }} 
                    fontWeight={500} 
                    fontFamily={"Montserrat"} 
                    fontSize={"14px"} 
                    height={"70px"}
                    justifyContent={"left"} >
                       <Flex alignItems={"center"} gap={"10px"}> <AiFillCreditCard  fontSize={"23px"}/>  Debit/Credit Card</Flex>
                </Tab>   
                <Tab 
                    py={"12px"}
                    _focus={{bg:"white" , borderLeft:"5px solid rgb(66,162,162)" , borderBottom:"none" }} 
                    fontWeight={500} 
                    fontFamily={"Montserrat"} 
                    fontSize={"14px"}
                    height={"70px"}
                    justifyContent={"left"} >
                        <Flex  alignItems={"center"} gap={"10px"}> <IoMdWallet fontSize={"23px"}/>  Wallet</Flex>      
                </Tab>
                <Tab 
                    py={"12px"}
                    _focus={{bg:"white" , borderLeft:"5px solid rgb(66,162,162)" , borderBottom:"none" }} 
                    fontWeight={500} 
                    fontFamily={"Montserrat"} 
                    fontSize={"14px"}
                    height={"70px"}
                    justifyContent={"left"}  >
                     <Flex alignItems={"center"} gap={"10px"}> <SiPaypal fontSize={"23px"}/>  UPI</Flex> 
                </Tab>
                <Tab 
                    py={"12px"}
                    _focus={{bg:"white" , borderLeft:"5px solid rgb(66,162,162)" , borderBottom:"none" }} 
                    fontWeight={500} 
                    fontFamily={"Montserrat"} 
                    fontSize={"14px"} 
                    height={"70px"}
                    justifyContent={"left"} >
                    <Flex  alignItems={"center"} gap={"10px"}> <RiBankFill fontSize={"23px"}/>Net banking</Flex> 
                </Tab>
                <Tab 
                    py={"12px"}
                    _focus={{bg:"white" , borderLeft:"5px solid rgb(66,162,162)" , borderBottom:"none" }} 
                    fontWeight={500} 
                    fontFamily={"Montserrat"} 
                    fontSize={"14px"} 
                    height={"70px"}
                    justifyContent={"left"} >
                  <Flex alignItems={"center"} gap={"10px"}> <HiCurrencyRupee fontSize={"23px"}/>Cash On Delivery</Flex> 
                </Tab>
            </TabList>

            <TabPanels width={"100%"} minHeight={"350px"} >
                <TabPanel>
                    <DebitCard/>
                </TabPanel>
                <TabPanel>
                    <Wallet/>
                </TabPanel>
                <TabPanel>
                <p></p>
                </TabPanel>
            </TabPanels>
        </Tabs>
        </Box>
    </Flex>
  )
}
