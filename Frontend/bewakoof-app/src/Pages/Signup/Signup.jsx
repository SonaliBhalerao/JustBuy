import React from 'react'
import { useState } from 'react';
import { Box,  
    Button, 
    Image, 
    Heading, 
    InputRightElement,
    Text, 
    Input, 
    Grid, 
    InputGroup, 
    useToast,
    } from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import styles from './Signup.module.css'
import { useNavigate } from "react-router-dom";


import axios from 'axios';

export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState(0);
    const [password, setPassword] = useState("");
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const navigate = useNavigate();

    const successfullyCreated = useSelector(
    (data) => data.AuthReducer.successfullyCreated
    );

    const handleSignUp = () => {
        console.log(email,password)
            axios({
            method: 'post',
            url: 'https://justbuybackend.onrender.com/signup',
            data: {
                email: email,
                password: password
            }
          })
          .then(function (response) {
            console.log(response.data)
            if(response.data==="User Already Exist!") {
              toast({
                position: 'top',
                marginTop: '150px',
                description: response.data,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
            navigate("/login");
            }
            else if(response.data === "Signup Successful!") {
              toast({
                position: 'top',
                marginTop: '150px',
                description: response.data,
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
             navigate("/login");
            }
          })  
          .catch(function (error) {
            console.log("error",error.message);

          })
    }


    const toast = useToast();    


  return (
    <Box>
        <Box bgColor="#fff5e6">
            <Box display={"flex"} alignItems={"center"} justifyContent="space-between" gap={{md: "0"}}
                flexDirection={{
                base: "column", // 0-48em
                md: "row", // 48em-80em,
                xl: "row", // 80em+
            }}>
                <Box mt={['7%', '2%', '1%']} mb={'5%'} ml={['1%', '6%', '15%']} mr={['1%', '6%', '15%']}
                    width={[
                    "100%", 
                    "90%", 
                    "80%",
                    "60%",
                    "28%", 
                ]}>
                    <Image src="https://images.bewakoof.com/web/desktop-sign-up-banner--1623760676.png"/>
                </Box>

                <Box bgColor={'white'} mt={['0%', '2%', '0%']} mb={'5%'} ml={['1%', '1%', '0%']} mr={['1%', '6%', '10%']}
                >
                <Grid gap={7} p={20} pt={1} pb={2} >
                        <Box>
                            <Heading>Sign Up</Heading>
                        </Box>
                        <Box>
                           <Text fontSize={'20px'} fontWeight='bold'>Hi new buddy, let's get you started with the bewakoofi!</Text> 
                        </Box>
                        <Box>
                            {/* <Text fontWeight={4} fontSize="md">Name</Text> */}
                            <Input variant='flushed' 
                                    focusBorderColor='black'
                                    type='text'
                                    placeholder='Name'
                                    onChange={(e)=> setName(e.target.value)}
                             />
                        </Box>
                        <Box>
                            {/* <Text fontWeight={4} fontSize="md">Mobile</Text> */}
                            <Input variant='flushed' 
                                    focusBorderColor='black'
                                    placeholder='Mobile'
                                    type='tel'
                                    onChange={(e)=> setContact(e.target.value)}
                             />
                        </Box>
                        <Box>
                            {/* <Text fontWeight={4} fontSize="md">Email Id</Text> */}
                            <Input variant='flushed' 
                                    focusBorderColor='black' 
                                    placeholder='Email Id'
                                    type='email'
                                    onChange={(e)=> setEmail(e.target.value)}
                             />
                        </Box>
                        
                        <Box>
                        <InputGroup size='md' variant='flushed'>
                            <Input
                                pr='4.5rem'
                                focusBorderColor='black' placeholderText
                                type={show ? 'text' : 'password'}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? <AiFillEyeInvisible bgColor="white"/> : <AiFillEye />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        </Box>

                        <Box align={'center'} w='100%' >
                            <Button w='100%' h={{sm:'48px', md:'48px', lg:"60px"}} fontSize={['16px', '16px', '20px']}
                                colorScheme='teal'
                                onClick={handleSignUp}
                            >
                                PROCEED
                            </Button>
                        </Box>
                    </Grid>
                </Box>   
            </Box>
        </Box>
    </Box>
  )
}


