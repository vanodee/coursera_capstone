import {
    Grid,
    GridItem,
    Box,
    VStack,
    Heading,
} from "@chakra-ui/react";

import BookingForm from "../components/BookingForm";
import BookingBG from "../assets/restaurant.jpg"

export default function Reservations() {
  return (
      <main>
          <Box
              as='section'
              bg={`url(${BookingBG}) center/cover no-repeat`}
              pt={'60px'}
              py={'100px'}
          >
              <Grid
                  templateColumns={{ sm: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)', lg: 'repeat(12, 1fr)' }}
                  gap={30}
                  maxW={'1200px'}
                  mx={'auto'}
                  px={'30px'}
                  py={'10px'}
                  alignItems={'center'}
                  textColor={'highlight.2'}
              >
                  <GridItem
                      colSpan={{ sm: '4', md: '6', lg: '8' }}
                      colStart={{ sm: '1', md: '2', lg: '3' }}
                  >
                      <VStack
                          spacing={10}
                          p={'30px'}
                          bg="rgba(73, 94, 87, 0.78)"
                          borderRadius={'1.5rem'}
                          backdropFilter={'auto'}
                          backdropBlur={'8px'}
                      >
                          <Heading
                              as='h2'
                              color={'white'}
                              fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }}
                              pl={'1rem'}
                          >
                              Reserve a Table
                          </Heading>

                          <BookingForm />
                      </VStack>
                  </GridItem>
                </Grid>
          </Box>
      </main>
  )
}
