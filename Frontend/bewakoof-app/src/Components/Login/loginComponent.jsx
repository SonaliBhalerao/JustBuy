import { Box ,Button,Input, InputGroup, InputRightElement, Text} from "@chakra-ui/react";
import { useState } from "react";
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"


export default function LoginComponent(){
    const [show, setShow] =useState(false)
    const handleClick = () => setShow(!show)
    return(
        <Box spacing={3} textAlign={"center"} padding={{base:"0rem",md:"2rem",lg:"2rem"}}>
                 <Text fontSize={{base:"22px",md:"24px"}} fontWeight={"750"} marginTop={"15px"}>Log in to your account</Text>
                 <br />
                <Input variant='flushed' placeholder='Email'  fontWeight={"600"}/>

                <br />
                <br />
                <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Password'
                                variant='flushed'
                                fontWeight={"600"}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button bg={"white"} h='1.75rem' size='sm' onClick={handleClick}>
                                     {show ? <AiFillEye fontSize={"18px"}/> : <AiFillEyeInvisible fontSize={"18px"}/>}
                                </Button>
                            </InputRightElement>
                </InputGroup>
                <br />
                <Text color={"#4FD1C5"} fontSize={"20px"} fontWeight={"500"} marginTop={{base:"20px",md:"30px",lg:"40px"}} >
                    Forgot Password?
                </Text>
                <br />

                <Button width={"90%"} marginTop={{base:"20px",md:"30px",lg:"40px"}} colorScheme='teal' size={{base:"md",md:"lg",lg:"lg"}}>LOGIN</Button>
                <br />
                <br />
        </Box>
    )
}