import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Flex, HStack, Image } from '@chakra-ui/react'
import { DebitCard } from '../../Components/Payment/DebitCard'
import { Wallet } from '../../Components/Payment/Wallet'


export const Payment = () => {
    
  return (
       <Flex width={"60%"} margin={"auto"} >
        <Box width={"80%"} >
        <Tabs  display={"flex"} gap={"20px"} >
            <TabList bg={"rgb(247,247,247)"} textAlign={"left"} w={"35%"} display={"flex"} flexDir={"column"} fontFamily={"Montserrat"} fontSize={"8px"} >
                <Tab 
                    py={"12px"}
                    _focus={{bg:"white" , borderLeft:"5px solid rgb(66,162,162)" , borderBottom:"none" }} 
                    fontWeight={500} 
                    fontFamily={"Montserrat"} 
                    fontSize={"14px"} >
                        Debit/Credit Card
                </Tab>
                <Tab 
                    py={"12px"}
                    _focus={{bg:"white" , borderLeft:"5px solid rgb(66,162,162)" , borderBottom:"none" }} 
                    fontWeight={500} 
                    fontFamily={"Montserrat"} 
                    fontSize={"14px"} >
                        Wallet
                </Tab>
                <Tab 
                    py={"12px"}
                    _focus={{bg:"white" , borderLeft:"5px solid rgb(66,162,162)" , borderBottom:"none" }} 
                    fontWeight={500} 
                    fontFamily={"Montserrat"} 
                    fontSize={"14px"} >
                        UPI
                </Tab>
                <Tab 
                    py={"12px"}
                    _focus={{bg:"white" , borderLeft:"5px solid rgb(66,162,162)" , borderBottom:"none" }} 
                    fontWeight={500} 
                    fontFamily={"Montserrat"} 
                    fontSize={"14px"} >
                        Net banking
                </Tab>
                <Tab 
                    py={"12px"}
                    _focus={{bg:"white" , borderLeft:"5px solid rgb(66,162,162)" , borderBottom:"none" }} 
                    fontWeight={500} 
                    fontFamily={"Montserrat"} 
                    fontSize={"14px"} >
                        Cash On Delivery
                </Tab>
            </TabList>

            <TabPanels width={"65%"} minHeight={"350px"} >
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
        <Box width={"20%"}  >
        
					
        </Box>
    </Flex>
  )
}
