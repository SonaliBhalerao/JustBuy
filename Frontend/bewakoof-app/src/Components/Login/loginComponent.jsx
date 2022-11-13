import { Box ,Button,Input, InputGroup, InputRightElement, Text, useToast} from "@chakra-ui/react";
import { useState } from "react";
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SaveTheToken } from "../../Utils/LocalStorage";

export default function LoginComponent(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [show, setShow] =useState(false)
    const handleClick = () => setShow(!show)

    const toast = useToast();
    
    const handleLogin = () =>{
        console.log(email, password);
        axios({
            method: 'post',
            url: 'https://justbuybackend.onrender.com/login',
            data: {
                email: email,
                password: password
            }
          })
          .then((res)=>{
            console.log(res.data);
            if(res.data.message == "Login Successful")
            {
                SaveTheToken("userToken", res.data.token);
                toast({
                    position: 'top',
                    marginTop: '150px',
                    description: res.data.message,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                navigate("/cart")
            }
            else{
                toast({
                    position: 'top',
                    marginTop: '150px',
                    description: res.data,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
          })
          .catch((err)=>{
            console.log(err);
          })

    }
    return(
        <Box spacing={3} textAlign={"center"} padding={{base:"0rem",md:"2rem",lg:"2rem"}}>
                 <Text fontSize={{base:"22px",md:"24px"}} fontWeight={"750"} marginTop={"15px"}>Log in to your account</Text>
                 <br />
                <Input variant='flushed' 
                    placeholder='Email'  
                    fontWeight={"600"}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />
                <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Password'
                                variant='flushed'
                                fontWeight={"600"}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button bg={"white"} h='1.75rem' size='sm' onClick={handleClick}>
                                     {show ? <AiFillEye fontSize={"18px"}/> : <AiFillEyeInvisible fontSize={"18px"}/>}
                                </Button>
                            </InputRightElement>
                </InputGroup>
                <br />
                {/* <Text color={"#4FD1C5"} fontSize={"20px"} fontWeight={"500"} marginTop={{base:"20px",md:"30px",lg:"40px"}} >
                    Forgot Password?
                </Text>
                <br /> */}

                <Button width={"90%"} 
                        marginTop={{base:"20px",md:"30px",lg:"40px"}} 
                        colorScheme='teal' size={{base:"md",md:"lg",lg:"lg"}}
                        onClick={handleLogin}
                >LOGIN</Button>
                <br />
                <br />
        </Box>
    )
}