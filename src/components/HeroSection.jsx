import {
    Heading,
    Text,
    Box,
    Button,
    Image,
    VStack,
    Grid,
    GridItem,
} from "@chakra-ui/react";

import HeroImage from '../assets/restauranfood.png';
import { NavLink } from "react-router-dom";



export default function HeroSection() {
  return (
      <Box
          as='section'
          bg={'primary.1'}
          maxH={{md:"", lg:'350px'}}
          mb={{ md: '50px', lg: '150px' }}
          pt={'60px'}
      >
          <Grid
              templateColumns={{ base:'repeat(4, 1fr)', md:'repeat(8, 1fr)', lg:'repeat(12, 1fr)' }}
              gap={30}
              maxW={'1200px'}
              mx={'auto'}
              px={'30px'}
              py={'10px'}
          >
              <GridItem colSpan={{ base: '2', md: '3', lg: '5' }}>
                    <VStack
                        align={'left'}
                        spacing={5}
                    >
                        <Box>
                          <Heading
                              fontSize={{ base: '2xl', sm: '3xl', lg:'6xl' }}
                              color={'primary.2'}
                          >
                              Little Lemon
                          </Heading>
                          <Heading
                              fontSize={{ base: '2xl', sm: '2xl', lg: '4xl' }}
                              color={'highlight.1'}
                          >
                              Chicago
                          </Heading>
                        </Box>
                        <Text color={'highlight.1'}>
                            We are a family owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern twist.
                        </Text>
                      <NavLink to={'Reservations'}><Button bg={'primary.2'}>Reserve a Table</Button></NavLink>
                    </VStack>
              </GridItem>

              <GridItem
                  colSpan={{ base: '2', md: '5', lg: '7' }}
                  justifySelf={'end'}
              >
                  <Image
                      src={HeroImage}
                      alt="Little Lemon Hero Image"
                      w={{ base: '250px', md: '400px', lg: '450px' }}
                      h={{ base: '250px', md: '270px', lg: '450px' }}
                      objectFit={'cover'}
                      borderRadius={'2rem'}
                  />
              </GridItem>
          </Grid>
      </Box>
  )
}
