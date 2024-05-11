import {HStack , Image} from '@chakra-ui/react'
import logo from '../assets/logo2.svg'
import { ColorModeSwitch } from './ColorModeSwitch'
import SearchInput from './SearchInput'

export const NavBar = () => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='70px' borderRadius='5px' />
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}
