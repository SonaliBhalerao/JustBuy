import {Box, Stack, Image, Heading, Flex, Button, Text, Link,SimpleGrid} from "@chakra-ui/react";
import "../Men/MensProductPage.css";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { useEffect, useState } from "react";

 function getData(){
    return (
    fetch("https://fakestoreapi.com/products")
    .then((res)=> res.json())
    .then((data) => console.log(data))
    )
 }

const MensProductPage = () =>{

    const [data, setData] = useState([]);

    useEffect(()=>{
        getData()
        .then((res)=>{
             setData(res);
          })
    },[])

    return (
        // main box
        <Box className="mainBox-MenC">

            <Stack>
                <br></br>
                <br></br>
                <br></br>
                <Image src="https://images.bewakoof.com/uploads/category/desktop/INSIDE-BANNER_DESKTOP_FREEBIE-1667998388.jpg"></Image>
                <br></br>
                <br></br>
                <Heading as={"h4"} fontSize="25px" className="heading-MenC">Men Clothing (50)</Heading>
                <line></line>
                <line></line>
                <Flex className="leftRight-flex">
                  {/* left box */}
                  <Box className="leftBox">
                    <Flex gap="50%">
                       <Text fontSize={"13px"} color={"#969696"} textAlign="left" ml="16px" fontWeight="bold">FILTERS</Text>
                       <Text fontSize={"13px"} color={"#73A2A2"} textAlign="left" ml="16px" fontWeight="semibold">Clear All</Text>  
                    </Flex>
                  <br></br>
                  <Accordion defaultIndex={[0]} allowMultiple>
                    {/* category */}
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' fontSize={"14px"} color="#5D5D5D" fontWeight="medium">Category</Box>
                            <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> T-Shirt </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> Shirt </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Sweatshirt </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Boxers </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Brief </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Hoodies </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Joggers </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Shorts </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Jacket </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Kurta </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Vest </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Jeans </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Trunk </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Pyjama </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Track Pant </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Co-Ordinates </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Chino </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Sweater </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Kurta Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Shirt & Shoes Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Trousers </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Casual Pants </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Nightsuits </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Sweatshirt & Jogger Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> T-Shirt & Pyjama Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Tracksuit </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Cloth Mask </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Lounge Pants </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> HipstersTrunks </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Lounge Shorts </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Protective Outdooor Mask </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> T-Shirt & Shorts Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Denim </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Nehru Jacket </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Blazer </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Hoodie And Shorts Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Pant </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Jumpsuit </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> T-Shirt & Jogger Set </AccordionPanel>
                    </AccordionItem>

                    {/* sizes */}
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' fontSize={"14px"} color={"#5D5D5D"} fontWeight="medium">Sizes</Box>
                            <AccordionIcon w={"45px"} color={"#5D5D5D"} />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> <a href="#">XS </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> <a href="#">S </a> </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">M </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">L </a> </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">XL </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">2XL</a> </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">3XL</a> </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">4XL</a> </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">5XL</a> </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">6XL</a> </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">28 </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">30 </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">32 </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">34 </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">36 </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">38 </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">40 </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">42 </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">44 </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">46 </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">48 </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">50 </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">52 </a></AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> <a href="#">54 </a></AccordionPanel>
                    </AccordionItem>

                    {/* brand */}
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' fontSize={"14px"} color={"#5D5D5D"}fontWeight="medium">Brand</Box>
                            <AccordionIcon  w={"45px"} color={"#5D5D5D"}/>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Bewakoof </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Xyxx </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Campus sutra </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Sutra </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Dilinger </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Rigo </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Adro </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Hubblerholme </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Differnce of opinion </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Mad over Print </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Bushirt </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Fugazee </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Riag </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Tistabene </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Almo </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Undrdawg By Bewakoof </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Craxysore </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Old Grey </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Play By Bewakoof </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Conditions Apply </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Instafab Plus </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Smugglerz </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Alstyle </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Perfkt-U </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Brown Mocha </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Uzarus </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Cooft </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> The dry state </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Fans Army </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Quarantine </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Try This </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Chkokko </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Door 74 </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Kristino </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Tailor & Circus </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Firangi Yarn </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Blue Tyga </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Cinocci </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Redwolf </AccordionPanel>
                    </AccordionItem>
                    
                    {/* color */}
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' fontSize={"14px"} color={"#5D5D5D"} fontWeight="medium">Color</Box>
                            <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> Blue </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> Black </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> White </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Green </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Grey </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Red </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Yellow </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Pink </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Brown </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Purple </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Orange </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Beige </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' fontSize={"14px"} color={"#5D5D5D"} fontWeight="medium">Color</Box>
                            <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> T-Shirt </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> Shirt </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Sweatshirt </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Boxers </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Brief </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Hoodies </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Joggers </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Shorts </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Jacket </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Kurta </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Vest </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Jeans </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Trunk </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Pyjama </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Track Pant </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Co-Ordinates </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Chino </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Sweater </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Kurta Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Shirt & Shoes Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Trousers </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Casual Pants </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Nightsuits </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Sweatshirt & Jogger Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> T-Shirt & Pyjama Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Tracksuit </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Cloth Mask </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Lounge Pants </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> HipstersTrunks </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Lounge Shorts </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Protective Outdooor Mask </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> T-Shirt & Shorts Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Denim </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Nehru Jacket </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Blazer </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Hoodie And Shorts Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Pant </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Jumpsuit </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> T-Shirt & Jogger Set </AccordionPanel>
                    </AccordionItem>

                    {/* Design */}
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' fontSize={"14px"}  color={"#5D5D5D"} fontWeight="medium">Design</Box>
                            <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> Solid </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> Graphic Print </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Printed </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Typography </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Color Block </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Aop </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Striped </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Checked </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Washed </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Tie & Dye </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Floral Print </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Camouflage </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Self Design </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Abstarct </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Embroidered </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Ethnic Motif </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Geometric Print </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Paisley </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Chevron/Zig zag </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Animal Print </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Hyper Print </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Polker Print </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Textured </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Ikat Print </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Ombre </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Cut & Sew </AccordionPanel>
                    </AccordionItem>

                    {/* fit */}
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' fontSize={"14px"} color={"#5D5D5D"} fontWeight="medium">Fit</Box>
                            <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> Regular Fit </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> Oversized </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Slim Fit </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Relaxed Fit </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Skinny Fit </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Loose Fit </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Super Loose </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Tapered Fit </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Super Skinny Fit </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Monster Fit </AccordionPanel>
                    </AccordionItem>

                    {/* sleeve */}
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' color={"#5D5D5D"} fontSize={"14px"} fontWeight="medium">Sleeve</Box>
                            <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> Half sleeve </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> Full Sleeve </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Sleeveless </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Raglan Sleeve </AccordionPanel>
                    </AccordionItem>

                    {/* neck */}
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' fontSize={"14px"} color={"#5D5D5D"} fontWeight="medium">Neck</Box>
                            <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> Round Neck </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> HoodedSpred Collar </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Spread Collar </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Mandarin Collar </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Collar </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Polo </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Henley neck </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> High Neck </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Lapel collar </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Stand Collar </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Turtle Neck </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Scoop Neck </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> V-Neck </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Colllarless </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Mock </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Notch Collar </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Boat Neck </AccordionPanel>
                    </AccordionItem>
 
                    {/* type */}
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'color={"#5D5D5D"} fontSize={"14px"} fontWeight="medium">Type</Box>
                            <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> T-Shirt </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> Shirt </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Sweatshirt </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Boxers </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Brief </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Hoodies </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Joggers </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Shorts </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Jacket </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Kurta </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Vest </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Jeans </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Trunk </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Pyjama </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Track Pant </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Co-Ordinates </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Chino </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Sweater </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Kurta Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Shirt & Shoes Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Trousers </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Casual Pants </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Nightsuits </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Sweatshirt & Jogger Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> T-Shirt & Pyjama Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Tracksuit </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Cloth Mask </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Lounge Pants </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> HipstersTrunks </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Lounge Shorts </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Protective Outdooor Mask </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> T-Shirt & Shorts Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Denim </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Nehru Jacket </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Blazer </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Hoodie And Shorts Set </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Pant </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> Jumpsuit </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> T-Shirt & Jogger Set </AccordionPanel>
                    </AccordionItem>

                    {/* ratings */}
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' color={"#5D5D5D"} fontSize={"14px"} fontWeight="medium">Rating</Box>
                            <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> 4.5 and above </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> 4 and above </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> 3.5 and above </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> 3 and above </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> 2.5 and above </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> 2 and above </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> 1.5 and above </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> 1 and above </AccordionPanel>
                    </AccordionItem>

                    {/* discount */}
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'color={"#5D5D5D"} fontSize={"14px"} fontWeight="medium">Discount</Box>
                            <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> 10% Or More </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> 20% Or More </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> 30% Or More </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> 40% Or More </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> 50% Or More </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> 60% Or More </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left" color={"#6C6C6C"}> 70% Or More </AccordionPanel>
                    </AccordionItem>

                    {/* sort by */}
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'color={"#5D5D5D"} fontSize={"14px"} fontWeight="medium">Sort By</Box>
                            <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> <a href="#">Price : High to Low</a> </AccordionPanel>
                        <AccordionPanel pb={0} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> <a href="#">Price : Low to High</a> </AccordionPanel>
                       
                    </AccordionItem>

        
                    </Accordion>
                  </Box>

                  {/* right box */}
                  <Box className="rightBox">
                     {/* <Box clas>

                     </Box> */}
                  </Box>

                </Flex>
            </Stack>

        </Box>
    )
}

export default MensProductPage