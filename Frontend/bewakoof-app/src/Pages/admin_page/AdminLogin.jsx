import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import {Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, Text, useColorModeValue, 
InputRightElement, InputGroup, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import * as local from "../../Utils/LocalStorage"

export function AdminLogin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const isError = email === ''
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast()
  const [user,setUser] = useState(false)

  const navigate = useNavigate();


  const handleSignUp = () => {
     
      
          axios({
          method: 'post',
          url: 'https://justbuybackend.onrender.com/admin/login',
          data: {
              email: email,
              password: password
          }
        })
        .then(function (response) {
            console.log(response)
          if(response.data.msg=="Invalid Credentials") {
            toast({
              position: 'top',
              marginTop: '150px',
              description: response.data.msg,
              status: 'error',
              duration: 3000,
              isClosable: true,
            })
            local.SaveTheToken("token",response.data.token)
        }
        else if(response.data.msg == "Login Successfull") {
          toast({
            position: 'top',
            marginTop: '150px',
            description: response.data.msg,
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
          local.SaveTheToken("admintoken",response.data.token)
          }
          navigate("/admin")
        })  
        .catch(function (error) {
          console.log("ERROR",error);
 
        })
  }

  return (
    <Flex 
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Log in to your  Admin Account</Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
          to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
        </Text>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            
            <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => {setPassword(e.target.value)}} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <AiFillEye fontSize={"40px"} /> : <AiFillEyeInvisible fontSize={"40px"}/>}
                  </Button>
                </InputRightElement>
              </InputGroup>
          </FormControl>
          <Stack spacing={10}>
            
            <Button
              onClick={handleSignUp}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Log in
            </Button>
            <Text>Don't have an Account ? <Link to="/signup" > Sign-up</Link></Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  );
}