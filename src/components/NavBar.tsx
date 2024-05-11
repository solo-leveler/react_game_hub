import {HStack , Image} from '@chakra-ui/react'
import logo from '../assets/logo2.svg'
import { ColorModeSwitch } from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch : (searchText:string) => void; 
}

export const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='70px' borderRadius='5px' />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}
