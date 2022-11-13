import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    FormControl,
    FormLabel,
    HStack,
    Radio,
    RadioGroup,
    useToast,
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { getLocalData } from '../../Utils/LocalStorage'
import axios from 'axios'
import { FaRegEdit } from 'react-icons/fa'
export const AdminEditButton = ({id,getData,element}) => {
  //  export  function InitialFocus(e) {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        const initialRef = React.useRef(null)
        const finalRef = React.useRef(null)

        const [tokenof,setTokenof] = useState(getLocalData("admintoken"))
        const toast = useToast()

        const [strickPrice,setStrickPrice] = useState("")
        const [tribePrice,setTribePrice] = useState("")

        const navigate = useNavigate();

const patchData = () => {

    if (strickPrice&&tribePrice) {

      const data = {
        strickprice:`₹${strickPrice}`,
        tribeprice:`₹${tribePrice}`
      }
      let url = `https://justbuybackend.onrender.com/admin/edit/men/${id}`
      const config = {
          headers:{
              "Authorization": `Bearer ${tokenof}`
          }
      };

      axios.patch(url,data,config)

      .then((response) => {
        console.log(response)
        if (response.data.msg=="successfully patched")
        toast({
          position: 'top',
          marginTop: '150px',
          description: response.data.msg,
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        // navigate("/todo")
        onClose(true)
        getData()
      })  
      .catch(function (error) {
          console.log(error);
      })
    }
    else {
      toast({
        position: 'top',
        marginTop: '150px',
        description: "Please fill all the inputs",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
// return
}


        return (
          <>
            <Button colorScheme={"blue"} leftIcon={<FaRegEdit/>} onClick={onOpen}>Edit</Button>     
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader fontFamily={"Montserrat"} >Edit</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel fontFamily={"Montserrat"} >Your StrickPrice is Rs  {element.strickprice} update your Price?</FormLabel>
                    <Input ref={initialRef} placeholder='Price' value={strickPrice} onChange={(e)=> {setStrickPrice(e.target.value)} }  />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel fontFamily={"Montserrat"} >Your TribePrice is Rs  {element.tribeprice} update your Price?</FormLabel>
                    <Input placeholder='Price' value={tribePrice} onChange={(e)=> {setTribePrice(e.target.value)} }  />
                  </FormControl>

                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3}  onClick={() =>{
                    patchData()}
                    } >
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      // }
}
