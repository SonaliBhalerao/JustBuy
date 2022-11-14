import { Box ,Button,Input, InputGroup, InputRightElement, Text, useToast} from "@chakra-ui/react";
import { useState } from "react";
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SaveTheToken } from "../../Utils/LocalStorage";

export default function LoginComponent(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation()

    const comingFrom =  location.state?.from?.pathname || "/"

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
                navigate(`${comingFrom}`,{replace:true})
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
        <Box spacing={3} textAlign={"center"} border={"1px solid lightgray"} padding={"30px"} display={"flex"} flexDirection={"column"}  gap={"26px"}  >

                <Box>
                    <Text mb={"12px"} fontSize={{base:"22px",md:"24px"}} fontWeight={"750"} marginTop={"15px"}>Log in to your account</Text>

                    <Input variant='flushed' borderRadius={"10px"}  p={"10px"}
                        placeholder='Email'  
                        fontWeight={"500"}
                        onChange={(e) => setEmail(e.target.value)} size={"lg"}
                    />
                </Box>
                
                <Box>
                    <InputGroup size='md'>
                                <Input borderRadius={"10px"}  p={"10px"}
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Password'
                                    variant='flushed'
                                    fontWeight={"500"}
                                    onChange={(e) => setPassword(e.target.value)} size={"lg"}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button bg={"white"} h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? <AiFillEye fontSize={"18px"}/> : <AiFillEyeInvisible fontSize={"18px"}/>}
                                    </Button>
                                </InputRightElement>
                    </InputGroup>

                    <Button width={"80%"} 
                            marginTop={{base:"20px",md:"30px",lg:"40px"}} 
                            colorScheme='teal' size={{base:"md",md:"lg",lg:"lg"}}
                            onClick={handleLogin}
                    >LOGIN</Button>
                </Box>

                <Box margin={"auto"} display={"flex"} >    
                    <Text fontfamily={"Montserrat"} >Don't have an Account?  </Text> 
                    <Link ml={"10px"} to="/signup" > 
                        <Text ml={"10px"}    textDecoration={"underline"} fontWeight={500} color={"blue"}>Signup</Text> 
                    </Link>
                </Box>
        </Box>
    )
}