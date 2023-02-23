import React, { useState } from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.jpg";
import { useHistory } from "react-router-dom";
import { PersonIcon } from "components/Icons/Icons";
import IconBox from "components/Icons/IconBox";

function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");

  const [id, setID] = useState('')
  const [password, setPassword] = useState('')
  const pathLinker = useHistory()

  const onSignIn = () => {
    const data = {
      id,
      password
    }
    console.log(data)
    pathLinker.push('/admin')
  }

  return (
    <Flex
      bgImage={signInImage}
      bgRepeat='no-repeat' bgAttachment='fixed'
      bgPosition='center' bgSize='100% 100%'
      width='100%'
      height='100vh'
    >
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        h='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction='column'
            w='100%'
            background='#f6f9fc'
            borderRadius='15px'
            p='48px'
            mt={{ md: "150px", lg: "80px" }}
          >
            <Flex>
              <PersonIcon color={titleColor} fontSize='32px' />
              <Heading color={titleColor} fontSize='32px' mb='10px'>
                維護人員登入
              </Heading>
            </Flex>
            <FormControl>
              {/* <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                員工ID
              </FormLabel> */}
              <Input
                borderRadius='15px'
                mb='24px'
                fontSize='sm'
                type='text'
                placeholder='員工ID'
                id='id'
                size='lg'
                onChange={(e) => setID(e.target.value)}
              />
              {/* <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                密碼
              </FormLabel> */}
              <Input
                borderRadius='15px'
                mb='36px'
                fontSize='sm'
                type='password'
                id='password'
                placeholder='密碼'
                size='lg'
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <FormControl display='flex' alignItems='center'>
                <Switch id='remember-login' colorScheme='teal' me='10px' />
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  ms='1'
                  fontWeight='normal'>
                  Remember me
                </FormLabel>
              </FormControl> */}
              <Button
                fontSize='10px'
                type='submit'
                bg='teal.300'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                mt='20px'
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}
                onClick={onSignIn}
              >
                SIGN IN
              </Button>
            </FormControl>
            {/* <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Don't have an account?
                <Link color={titleColor} as='span' ms='5px' fontWeight='bold'>
                  Sign Up
                </Link>
              </Text>
            </Flex> */}
          </Flex>
        </Flex>
        {/* <Box
          display={{ base: "none", md: "block" }}
          overflowX='hidden'
          h='100%'
          w='40vw'
          position='absolute'
          right='0px'>
          <Box
            bgImage={signInImage}
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            borderBottomLeftRadius='20px'></Box>
        </Box> */}
      </Flex>
    </Flex>
  );
}

export default SignIn;
