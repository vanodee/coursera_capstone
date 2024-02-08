import {
    Heading,
    Text,
    Grid,
    GridItem,
    Box,
    VStack,
    Image,
    HStack
} from "@chakra-ui/react";


import chefImage1 from '../assets/MarioAdrianA.jpg';
import chefImage2 from '../assets/MarioAdrianB.jpg';


export default function AboutSection() {
  return (
      <Box
            as='section'
            py={'150px'}
      >
          <Grid
              bg={'white'}
              templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)', lg: 'repeat(12, 1fr)' }}
              gap={30}
              maxW={'1200px'}
              mx={'auto'}
              px={'30px'}
              py={'10px'}
              alignItems={'center'}
              textColor={'highlight.2'}
          >
              <GridItem colSpan={{ base: '4', md: '8', lg: '5' }}>
                  <VStack align={'left'} spacing={5}>
                      <Box>
                          <Heading fontSize={'5xl'} color={'primary.2'}>Little Lemon</Heading>
                          <Heading color={'primary.1'}>Chicago</Heading>
                      </Box>
                      <Text>
                          Welcome to Little Lemon, a family-owned Mediterranean restaurant nestled in the heart of Chicago.
                          At Little Lemon, we're passionate about bringing you the authentic flavors of the Mediterranean,
                          infused with a modern touch. Our culinary journey is inspired by traditional recipes passed down
                          through generations, curated with care to deliver a dining experience that delights the senses.
                          From vibrant salads bursting with freshness to savory grilled specialties, each dish tells a story
                          of our commitment to quality ingredients and genuine hospitality. Join us at Little Lemon and embark
                          on a culinary adventure that celebrates tradition, innovation, and the joy of sharing good food with
                          loved ones.
                      </Text>
                  </VStack>
              </GridItem>

              <GridItem
                  colSpan={{ base: '4', md: '8', lg: '7' }}
                  colStart={{ base: '1', md: '1', lg: '7' }}
              >
                  <HStack
                      w={"100%"}
                      h={"100%"}
                  >
                      <Box
                          w={'50%'}
                          h={'350px'}
                          borderRadius={'2rem'}
                      >
                          <Image
                              objectFit={'cover'}
                              objectPosition={'right'}
                              borderRadius={'2rem'}
                              src={chefImage1}
                              h={'100%'}
                          />
                      </Box>

                      <Box
                          w={'50%'}
                          h={'350px'}
                          borderRadius={'2rem'}
                      >
                          <Image
                              objectFit={'cover'}
                              objectPosition={'right'}
                              borderRadius={'2rem'}
                              src={chefImage2}
                              h={'100%'}
                          />
                      </Box>
                  </HStack>
              </GridItem>
          </Grid>
      </Box>
  )
}
