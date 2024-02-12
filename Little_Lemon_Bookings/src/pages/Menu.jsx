import { Box, Heading } from '@chakra-ui/react'
import ComingSoonBG from '../assets/Lemon_Coming_Soon.png'

export default function Menu() {
  return (
    <Box
      as='section'
      h={'100vh'}
      pt={'70px'}
      bg={`url(${ComingSoonBG}) center/cover no-repeat`}
      display={'flex'}
      justifyContent={'center'}
    >
      <Heading
        color={'white'}
        backdropFilter={'auto'}
        backdropBlur={'3px'}
        maxH={'150px'}
        p={'2rem'}
        borderRadius={'2rem'}
        bg={"rgba(73, 94, 87, 0.78)"}
        fontSize={{ base: '2xl', sm: '2xl', lg: '4xl' }}
      >
        The Menu Page isn't Ready Yet.
        <br />
        Please come back Later
      </Heading>
    </Box>
  )
}
