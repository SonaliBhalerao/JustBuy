import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Flex,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
import SmileIcon from '../Icons/SmileIcon';
import { Link } from 'react-router-dom';
  
  
  const SocialButton = ({
    children,
    label,
    to,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        to={to}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export function Footer() {
    return (
      <Box
        bg={"rgb(24,24,24)"}
        color={"white"}>
        <Container as={Stack} maxW={'6xl'} py={10} fontFamily={"Montserrat"} fontSize={"12px"} >
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
                <Flex gap={"20px"} justifyContent={"flex-start"} alignItems={"center"} >
                    <Box>
                        <SmileIcon w={"24px"} c={"white"} clr2={"white"}/>
                    </Box>
                    <Text fontFamily={"Montserrat"} fontWeight={600} fontSize={"24px"} >Just Buy</Text>
                </Flex>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} to={'/'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} to={'/'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} to={'/'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link to={'/'}>About us</Link>
              <Link to={'/'}>Blog</Link>
              <Link to={'/'}>Contact us</Link>
              <Link to={'/'}>Pricing</Link>
              <Link to={'/'}>Testimonials</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link to={'/'}>Help Center</Link>
              <Link to={'/'}>Terms of Service</Link>
              <Link to={'/'}>Legal</Link>
              <Link to={'/'}>Privacy Policy</Link>
              <Link to={'/'}>Satus</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Keep upto date</ListHeader>
              <Stack direction={'row'}  >
                <Input
                  placeholder={'Your email address'}
                  bg={"white"}
                  border={0}
                  borderRadius={"0px"}
                  color={"black"}
                />
                <IconButton
                  bg={"rgb(253,216,53)"}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: "rgb(253,216,53)",
                  }}
                  borderRadius={"0px"}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>

        <Container as={Stack} maxW={'6xl'} py={10} fontFamily={"Montserrat"} fontSize={"12px"} >
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
            spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>MEN'S CLOTHING</ListHeader>
                <Link to={'/'}> Top Wear </Link>
                <Link to={'/'}> Men's New Arrivals </Link>
                <Link to={'/'}> Men's Half Sleeve T-Shirts </Link>
                <Link to={'/'}> Men's Hoodies & Sweatshirts</Link>
                <Link to={'/'}> Men's Long Sleeve T-shirts </Link>
                <Link to={'/'}> Men's Printed T-shirts </Link>
                <Link to={'/'}> Men's Plain T-shirts </Link>
                <Link to={'/'}> Men's Vests </Link>
                <Link to={'/'}> Men's Polo T-Shirts </Link>
                <Link to={'/'}> Men's Kurtas </Link>
                <Link to={'/'}> Men's Combo T-Shirts </Link>
                <Link to={'/'}> Men's Shirts </Link>
                <Link to={'/'}> Men's Nightwear </Link> 
                <Link to={'/'}> Men's Plus Size Store </Link>
                <Link to={'/'}> Bottom Wear </Link>
                <Link to={'/'}> Men's Pajamas </Link>
                <Link to={'/'}> Men's Boxer Shorts </Link>
                <Link to={'/'}> Men's Shorts </Link>
                <Link to={'/'}> Men's Track Pants </Link>
                <Link to={'/'}> Men's Pants </Link>
                <Link to={'/'}> Featured </Link>
                {/* Men's Flip Flops */}
                {/* Men's Sliders */}
                {/* Marvel T-Shirts */}
                {/* Disney T-Shirts */}
                {/* Avengers T-Shirts */}
                {/* Star Wars T-Shirts */}
                {/* Batman T-Shirts */}
                {/* Superman T-Shirts */}
                {/* Joker T-Shirts */}
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link to={'/'}>Help Center</Link>
              <Link to={'/'}>Terms of Service</Link>
              <Link to={'/'}>Legal</Link>
              <Link to={'/'}>Privacy Policy</Link>
              <Link to={'/'}>Satus</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link to={'/'}>Help Center</Link>
              <Link to={'/'}>Terms of Service</Link>
              <Link to={'/'}>Legal</Link>
              <Link to={'/'}>Privacy Policy</Link>
              <Link to={'/'}>Satus</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link to={'/'}>Help Center</Link>
              <Link to={'/'}>Terms of Service</Link>
              <Link to={'/'}>Legal</Link>
              <Link to={'/'}>Privacy Policy</Link>
              <Link to={'/'}>Satus</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }