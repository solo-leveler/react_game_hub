import useGenres, { Genre } from '../Hooks/useGenres'
import {List,ListItem,Image,HStack,Text,Spinner,Button, Heading} from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url';

interface Props{
    onSelectGenre : (genre : Genre) => void
    selectedGenre : Genre | null
}
export const GenreList = ({selectedGenre,onSelectGenre}:Props) => {
  const {data,isLoading,error} = useGenres();

  if(error) return null
  if(isLoading) return <Spinner/>

  return (
    <>
    <Heading fontSize='2xl' marginBottom={3} >Genres</Heading>
    <List>
        {data.map(genre => <ListItem key={genre.id} paddingY={2}>
        <HStack borderRadius={2} boxShadow={genre.id === selectedGenre?.id ? 'outline' : 'null'}>
            <Image boxSize='32px' objectFit='cover' borderRadius={8} src={getCroppedImageUrl(genre.image_background) } />
            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'> {genre.name} </Button>
        </HStack>
        </ListItem>
        )}
    </List>

    </>
  )
}
