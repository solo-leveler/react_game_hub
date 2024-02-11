import {HStack , Image} from '@chakra-ui/react'
import logo from '../assets/logo2.svg'
import { ColorModeSwitch } from './ColorModeSwitch'

export const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='70px' borderRadius='5px' />
        <ColorModeSwitch />
    </HStack>
  )
}
