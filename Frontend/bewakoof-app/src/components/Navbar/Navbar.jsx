
import { Box, Flex,  useDisclosure, Spacer,Button,  HStack, InputGroup, InputLeftElement, Input,Drawer,DrawerBody,
    DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton, Heading,  VStack,
    Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
// import { HamburgerIcon, SearchIcon} from '@chakra-ui/icons';
import React from 'react';
import './Navbar.css'
import { MensDropDown } from './mensdropdown/MensDropDown';
import { WomensDropDown } from './womensdropdown/WomensDropDown';
import {Link} from "react-router-dom"
import SmileIcon from '../Icons/SmileIcon';
// import { HamburgerIcon,  } from '@chakra-ui/icons'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSistrix } from "react-icons/fa";




export const Navbar = () => {

    const { isOpen, onOpen,onClose } = useDisclosure();
return (
    <Box 
        borderBottom={"1px solid lightgray"}
        p={"4px"}
        boxSizing={"border-box"}
        position={"sticky"}
        bg={"white"}
        top={'0px'} zIndex={"1000"} 
    >  
        <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', lg: 'none' }}
            justifyContent={"center"}
            alignItems={"center"}
            h={{ 
                base: '40px', sm:'40px', md:'40px', lg:'60px', xl:'60px','2xl': '60px'
            }} border={"1px solid black"}
        >
            <>
                <Button  
                    onClick={onOpen} 
                    colorScheme={"white"}
                    >  
                    { 
                        isOpen ? 
                        ""
                                : 
                                    <GiHamburgerMenu color={"black"} w={5} h={5} 
                                        />
                    } 
                </Button>
                
                <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent  >
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>Hello User..</DrawerHeader>
                    <DrawerBody p={"0px"} bg={"rgb(243,243,243)"} >
                        <Box display={"flex"} flexDirection={"column"} gap={"14px"}  >
                            
                            <Box fontFamily={"Montserrat"} fontSize="12px"  p={"6px"} bg={"white"} px={"16px"}  >
                                <VStack textAlign={"left"} justifyContent={"start"} alignItems="flex-start" >
                                    <Heading fontFamily={"Montserrat"} fontSize="12px" color={"rgba(0, 0, 0, 0.3)"} fontWeight={600} mb={"4px"} >
                                        SHOP IN
                                    </Heading>
                                    <Link mb={"10px"} >
                                        Men
                                    </Link>
                                    <Link mb={"10px"} >
                                        Women
                                    </Link>
                                    <Link mb={"10px"} >
                                        Design of the Day   
                                    </Link>
                                    <Link mb={"10px"} >
                                        Mobile Covers
                                    </Link>
                                </VStack>
                            </Box>


                            <Box fontFamily={"Montserrat"} fontSize="12px" bg={"rgb(243,243,243)"} px={"16px"} >
                                <VStack textAlign={"left"} justifyContent={"start"} alignItems="flex-start" >
                                    <Heading fontFamily={"Montserrat"} fontSize="12px" color={"rgba(0, 0, 0, 0.3)"} fontWeight={600} >
                                        MY PROFILE
                                    </Heading>
                                        <Link mb={"10px"} >
                                            My Account
                                        </Link>
                                        <Link mb={"10px"} >
                                            My Orders
                                        </Link>
                                        <Link mb={"10px"} >
                                            My Wallet
                                        </Link>
                                        <Link mb={"10px"} >
                                            My Wishlist
                                        </Link>
                                </VStack>
                            </Box>


                            <Box fontFamily={"Montserrat"} fontSize="12px" bg={"rgb(243,243,243)"} px={"16px"}  >
                                <VStack textAlign={"left"} justifyContent={"start"} alignItems="flex-start" >
                                    <Heading fontFamily={"Montserrat"} fontSize="12px" color={"rgba(0, 0, 0, 0.3)"} fontWeight={600} >
                                        CONTACT US
                                    </Heading>
                                        <Link mb={"10px"} >
                                            Help & Support
                                        </Link>
                                        <Link mb={"10px"} >
                                            Feedback & Suggestions
                                        </Link>
                                        <Link mb={"10px"} >
                                            Become a Seller   
                                        </Link>
                                </VStack>
                            </Box>


                            <Box fontFamily={"Montserrat"} fontSize="12px" bg={"rgb(243,243,243)"} px={"16px"}  >
                                <VStack textAlign={"left"} justifyContent={"start"} alignItems="flex-start" >
                                    <Heading fontFamily={"Montserrat"} fontSize="12px" color={"rgba(0, 0, 0, 0.3)"} fontWeight={600} >
                                        ABOUT US
                                    </Heading>
                                    <Link mb={"10px"} >
                                    Our Story
                                    </Link>
                                    <Link mb={"10px"} >
                                    Fanbook
                                    </Link>
                                    <Link mb={"10px"} >
                                    Blog
                                    </Link>
                                    <Link mb={"10px"} >
                                        Logout   
                                    </Link>
                                </VStack>
                            </Box>
                        </Box>
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </>

        <Spacer/>

        {/* // small screen */}
        
        </Flex>

        <Box 
            flex={{ base: 1 }} 
            justify={{ base: 'center', md: 'start' }} 
        >
            <Flex w={{ base:'90%', sm: '90%', md: '94%', lg: '98%', xl:' 90%', '2xl': '80%'}} 
                display={{ base: 'none', lg: 'flex' }} 
                margin={"auto"} 
                // border={"1px solid red"}
            >
                <SmileIcon w={"24px"} c={"black"}/>
                <DesktopNav />
            </Flex>  
        </Box>

    </Box>
);
}
  
  const DesktopNav = () => {

    return (
        <HStack 
            display={"flex"} 
                flexDir="row" 
                    justifyContent={"space-between"}
                        // border={"1px solid black"} 
                            w={{base:"100%",md:"90%"}}
                                color={"black"}
                                    h={{ 
                                        base: '50px', sm:'50px', md:'46px', lg:'46px', xl:'46px','2xl': '46px'
                                    }} 
        >
            <Flex 
                fontFamily={"Montserrat"}
                    // border={"1px solid black"}
                        w={{ base:'90%', sm: '90%', md: '40%', lg: '36%', xl:' 30%', '2xl': '30%'}} 
                            margin='auto'
                                h={{ base:'30px', sm: '32px', md: '34px', lg: '36px', xl:' 38px', '2xl': '40px' }}
            >
            
                <Box 
                    w={{ base:'60px', sm: '80px', md: '100px', lg: '120px', xl:' 130px', '2xl': '140px' }}
                        fontSize={{ base:'14px', sm: '14px', md: '14px', lg: '14px', xl:' 16px', '2xl': '16px'}}   
                            display='flex' 
                                justifyContent='center' 
                                    alignItems='center'
                                        >
                        <Box 
                            className="dropdown"
                        >
                            <Box 
                                className="dropbtn"
                            >
                                Men 
                            </Box>
                            <Box 
                                className="dropdown-content" 
                                    marginLeft={{ base:'14px', sm: '14px', md: '14px', lg: '-25px', xl:' -25x', '2xl': '-25px'}}
                            >
                                <Box 
                                    border={"0.5px solid lightgray"} 
                                >
                                    <MensDropDown/>
                                </Box>
                            </Box>

                        </Box>     
                </Box>

                    <Spacer/>
                
                <Box 
                // className='nav-box'
                    w={{ base:'60px', sm: '80px', md: '100px', lg: '120px', xl:' 130px', '2xl': '140px'}}
                        fontSize={"12px"}    
                            display='flex' justifyContent='center' alignItems='center'
                >
                        <Box className="dropdown">
                            <Box className="dropbtn"> Women </Box>
                            <Box 
                                className="dropdown-content" 
                                marginLeft={{ base:'14px', lg: '-146px', xl:'-109px', '2xl': '-118px'}} 
                            >
                                <Box 
                                    border={"0.5px solid lightgray"} 
                                >
                                    <WomensDropDown/>
                                </Box>
                            </Box>
                        </Box>       
                </Box>

                    <Spacer/>

                <Box 
            // border={"1px solid black"} 
            fontFamily={"Montserrat"}
                    w={{ base:'60px', sm: '80px', md: '140px', lg: '140px', xl:' 160px', '2xl': '160px'}}
                    fontSize={{ base:'14px', sm: '14px', md: '14px', lg: '14px', xl:' 16px', '2xl': '12px'}}    
                    display='flex' justifyContent='center' alignItems='center'>
                    <Box>
                        Mobile Covers
                    </Box>     
                </Box>
                <Spacer/>
            </Flex>

                <Spacer/>

{/* // right side of a navbar start //  */}

            <Flex 
                // border={"1px solid black"}
                w={{ base:'90%', sm: '90%', md: '40%', lg: '50%', xl:' 50%', '2xl': '50%'}} 
                margin='auto'
                h={{ base:'30px', sm: '32px', md: '34px', lg: '36px', xl:' 38px', '2xl': '40px' }}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
            
            <InputGroup width={"60%"} >
                <InputLeftElement
                pointerEvents='none'
                children={<FaSistrix color='gray.500' />}
                />
                <Input type='search' placeholder='Search by Product, Categor or Collection' />
            </InputGroup>

                    <Spacer/>
                
                <Flex 
                    w={"30%"} 
                    // border={"1px solid black"}  
                    justifyContent={"space-between"} 
                    alignItems={"center"}
                >
                    <Menu  >
                        <MenuButton as={Button} colorScheme={"white"} p={"0px"} m={"0px"} >
                            <i style={{fontSize:"20px",color:"rgb(137,149,168)"}} class="fa-regular fa-user"></i>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Account</MenuItem>
                            <MenuItem>Wishlist</MenuItem>
                            <MenuItem>Orders</MenuItem>
                            <MenuItem>Wallet</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                    <Box>
                        
                    </Box>
                    <Box>
                        <i style={{fontSize:"20px",color:"rgb(137,149,168)"}} class="fa-regular fa-heart"></i>
                    </Box>
                    <Box>
                        <i style={{fontSize:"20px",color:"rgb(137,149,168)"}} class="fa-sharp fa-solid fa-bag-shopping"></i>
                    </Box>
                    <Box width={"20%"} >
                        <img  src="https://media.istockphoto.com/id/519611160/vector/flag-of-india.jpg?b=1&s=612x612&w=0&k=20&c=jLnf3N5XtJB3YBvoj9zEGcZ8RwFRrspSMf009nCnGfk=" alt="" srcset="" />
                    </Box>
                    
                </Flex>

                   
            </Flex>

        </HStack>
    );
  };
  
