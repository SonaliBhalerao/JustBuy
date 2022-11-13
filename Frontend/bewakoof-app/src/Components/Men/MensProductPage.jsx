import {Box, Stack, Image, Heading, Flex, Button, Text, Link,SimpleGrid, Container} from "@chakra-ui/react";
import "../Men/MensProductPage.css";
import {
    Accordion, 
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenDataFailure, getMenDataRequest, getMenDataSuccess, gettingMenData} from "../../Redux/AppReducer/action";
import { categoryData, rating, sortBy, neck, sleeve, fit, design, color, brand, size, discount } from "./AccordianItems";
import {useNavigate, useSearchParams } from "react-router-dom";

// main function MensProductPage
const MensProductPage = () =>{

      const dispatch = useDispatch(); 
      const navigate = useNavigate()
      const [searchParams, setSearchParams] = useSearchParams();
      const initialGenreParams = searchParams.getAll("category");
    //   const initialSortParams = searchParams.get("sortBy");
      const [category, setCategory] = useState(initialGenreParams || []);
    
    // store
    const {getMenData, isLoading, isError} = useSelector((store) =>{
        return {
            getMenData:store.AppReducer.getMenData,
            isLoading: store.AppReducer.isLoading,
            isError: store.AppReducer.isError
        }
      }
    )

    const handleCategory = (e, el) => {
        const option = el;
        // console.log(option)
        // console.log(initialGenreParams)
        let newCategory = [...category]
        if (category.includes(option )) {
            newCategory.splice(newCategory.indexOf(option),1)
        }else {
            newCategory = []
            newCategory.push(option)
        }
        setCategory(newCategory)
    }


    useEffect(() => {
      if (category) {
        const params = {}
        category && (params.category = category)
        setSearchParams(params);
      }

    },[category,setSearchParams])
    

// handleMenData function
    const handleMenData = () => {
        dispatch(getMenDataRequest())
        gettingMenData()
        .then((res)=> {
            dispatch(getMenDataSuccess(res.data))
        })
        .catch((e)=> dispatch(getMenDataFailure(e)))
    } 

//  useEffect
    useEffect(()=>{
         handleMenData()
    },[])


    return (
        // main box
        <Box   pr={"40px"} pl={"40px"} >
            <Box>
                <Box >
                  <Image height={["150px", "200px", "250px"]} width={["100%"]} display={{ sm:"block",base:"none"}} alignItems src="https://images.bewakoof.com/uploads/category/desktop/INSIDE-BANNER_DESKTOP_FREEBIE-1667998388.jpg"></Image>
                </Box>
                <Text fontWeight='bold' fontSize={['xl', '2xl', '2xl', '2xl']} textAlign={{base:"center", md:"center", lg:"left"}} mt={35} letterSpacing='wide' w={"230px"} borderBottom={"2px solid rgb(253,216,53)"} >Men Clothing ({getMenData.length})</Text>

                {/* products and filter flex */}
                <Flex direction={{base:"column", lg:"row", md:"row"}} mt={10} mb={6} gap={2}>

                    {/* left box */}
                    <Box width={"40%"} p={5} display={{ sm:"block",base:"none"}} mt={-6} >
                        <Flex gap={"42%"}  height={"20px"} flexDirection={"row"} >
                            <Text fontSize={"13px"} color={"#969696"} textAlign="left" ml="16px" fontWeight="bold">FILTERS</Text>
                            <Text fontSize={"13px"} color={"#73A2A2"} ml="16px" fontWeight="semibold" cursor={"pointer"} onClick={()=> setCategory([])}>Clear All</Text>  
                        </Flex>

                        <Accordion  allowMultiple cursor={"pointer"}>
                            {/* category */}
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' p={"5px"} fontSize={"15px"} color="#414141" fontWeight="medium">Category</Box>
                                    <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                                </AccordionButton>
                                </h2>
                                {fit.map((el)=> {
                                    return <AccordionPanel value={el} onClick={(e)=> handleCategory(e, el) } pb={1} fontSize={"13px"} ml="22px"
                                            textAlign="left"  color={"#6C6C6C"}> {el}</AccordionPanel>
                                })}
                            </AccordionItem>

                            {/* sizes */}
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' p={"5px"}  fontSize={"14px"} color={"#414141"} fontWeight="medium">Sizes</Box>
                                    <AccordionIcon w={"45px"} color={"#5D5D5D"} />
                                </AccordionButton>
                                </h2>
                                {size.map((el)=> {
                                    return <AccordionPanel onClick={()=>handleCategory()} pb={1} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> {el}</AccordionPanel>
                                })}
                            </AccordionItem>

                            {/* brand */}
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' p={"5px"}  fontSize={"14px"} color={"#414141"}fontWeight="medium">Brand</Box>
                                    <AccordionIcon  w={"45px"} color={"#5D5D5D"}/>
                                </AccordionButton>
                                </h2>
                                {brand.map((el)=> {
                                    return <AccordionPanel onClick={()=>handleCategory()} pb={1} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> {el}</AccordionPanel>
                                })}
                            </AccordionItem>
                            
                            {/* color */}
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' p={"5px"}  fontSize={"14px"} color={"#414141"} fontWeight="medium">Color</Box>
                                    <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                                </AccordionButton>
                                </h2>
                                {color.map((el)=> {
                                    return <AccordionPanel onClick={()=>handleCategory()} pb={1} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> {el}</AccordionPanel>
                                })}
                            </AccordionItem>

                            {/* Design */}
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' p={"5px"}  fontSize={"14px"}  color={"#414141"} fontWeight="medium">Design</Box>
                                </AccordionButton>
                                </h2>
                                {design.map((el)=> {
                                    return <AccordionPanel onClick={()=>handleCategory()} pb={1} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> {el}</AccordionPanel>
                                })}
                            </AccordionItem>

                            {/* fit */}
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' p={"5px"}  fontSize={"14px"} color={"#414141"} fontWeight="medium">Fit</Box>
                                    <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                                </AccordionButton>
                                </h2>
                                {categoryData.map((el)=> {
                                    return <AccordionPanel onClick={()=>handleCategory()} pb={1} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> {el}</AccordionPanel>
                                })}
                            </AccordionItem>

                            {/* sleeve */}
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'p={"5px"}  color={"#414141"} fontSize={"14px"} fontWeight="medium">Sleeve</Box>
                                    <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                                </AccordionButton>
                                </h2>
                                {sleeve.map((el)=> {
                                    return <AccordionPanel onClick={()=>handleCategory()} pb={1} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> {el}</AccordionPanel>
                                })}
                            </AccordionItem>

                            {/* neck */}
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' p={"5px"}  fontSize={"14px"} color={"#414141"} fontWeight="medium">Neck</Box>
                                    <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                                </AccordionButton>
                                </h2>
                                {neck.map((el)=> {
                                    return <AccordionPanel onClick={()=>handleCategory()} pb={1} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> {el}</AccordionPanel>
                                })}
                            </AccordionItem>
        
                            {/* type */}
                            <AccordionItem>
                                 <h2>
                                 <AccordionButton>
                                     <Box flex='1' textAlign='left' p={"5px"} color={"#414141"} fontSize={"14px"} fontWeight="medium">Type</Box>
                                     <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                                 </AccordionButton>
                                 </h2>
                                 {categoryData.map((el)=> {
                                    return <AccordionPanel onClick={()=>handleCategory()} pb={1} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> {el}</AccordionPanel>
                                })}
                             </AccordionItem>

                            {/* ratings */}
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' p={"5px"}  color={"#414141"} fontSize={"14px"} fontWeight="medium">Rating</Box>
                                    <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                                </AccordionButton>
                                </h2>
                                {rating.map((el)=> {
                                    return <AccordionPanel onClick={()=>handleCategory()} pb={1} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> {el}</AccordionPanel>
                                })}
                            </AccordionItem>

                            {/* discount */}
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' p={"5px"}  color={"#414141"} fontSize={"14px"} fontWeight="medium">Discount</Box>
                                    <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                                </AccordionButton>
                                </h2>
                                {discount.map((el)=> {
                                    return <AccordionPanel onClick={()=>handleCategory()} pb={1} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> {el}</AccordionPanel>
                                })}
                            </AccordionItem>

                            {/* sort by */}
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left' p={"5px"} color={"#414141"} fontSize={"14px"} fontWeight="medium">Sort By</Box>
                                    <AccordionIcon w={"45px"} color={"#5D5D5D"}/>
                                </AccordionButton>
                                </h2>
                                {sortBy.map((el)=> {
                                    return <AccordionPanel onClick={()=>handleCategory()} pb={1} fontSize={"13px"} ml="22px" textAlign="left"  color={"#6C6C6C"}> {el}</AccordionPanel>
                                })}
                            </AccordionItem>

                        </Accordion>
                    </Box>

                    {/* right box */}
                    <Box >
                        <SimpleGrid columns={[1, 2, 2, 3]} spacing={5} height={"670px"} direction={{base:"column", lg:"row"}} overflow={"scroll"} >
                                {getMenData.map((e)=>{
                                    
                                    return (
                                        <Box className="mapBox" p={1} cursor={"pointer"} onClick={()=> { navigate(`/men/${e._id}`) }} >
                                            <Image src={e.productImg} h={"350px"} w={"100%"}></Image>
                                            <Text fontWeight={"semibold"} color={"#4F5362"} fontSize={"13px"} letterSpacing={"wide"}>JustBuy</Text>
                                            <Text fontWeight={"normal"} color={"#949494"} fontSize={"11px"} letterSpacing={"wide"}>{e.description}</Text>
                                            <Flex gap={1.5} mb={1}>
                                                <Text fontWeight={"bold"} color={"black"} fontSize={"16px"} letterSpacing={"wide"}>₹{e.finalprice}</Text>
                                                <Text fontWeight={"normal"} color={"#949494"} fontSize={"13px"} textDecoration={"line-through"} mt={1}>{e.strickprice}</Text>
                                            </Flex>
                                            <Text fontWeight={"bold"} color={"#2F2F2F"} fontSize={"11px"} ml={2}>{e.tribeprice} for TriBe Members</Text>
                                        </Box>
                                    )
                                })} 
                        </SimpleGrid>
                    </Box>

                </Flex>
            </Box>

        </Box>
    )
}

export default MensProductPage