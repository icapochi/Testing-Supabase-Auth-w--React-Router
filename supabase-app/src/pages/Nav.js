
import { 
  Box, 
  Center, 
  HStack 
} from '@chakra-ui/react'

import { Link, Outlet } from 'react-router-dom'

export default function Home(){
    return(
        <>
      <Center
        bg='gray.600' 
        h='5vh' 
        w='100vw' 
        color='whiteAlpha.800'
        justifyContent={'space-around'}>
          <HStack>
            <Box p='5'><Link to='/'>Home</Link></Box>
            <Box p='5'><Link to='/blogs'>Blogs</Link></Box>
            <Box p='5'><Link to='/contact'>Contact</Link></Box>
          </HStack>
        </Center>
      <Outlet />
    </>
    )
}