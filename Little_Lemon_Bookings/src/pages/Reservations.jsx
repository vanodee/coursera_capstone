import {
    Heading,
    Grid,
    GridItem,
    Box,
    Button,
    Flex,
} from "@chakra-ui/react";

import BookingForm from "../components/BookingForm";
import BookingBG from "../assets/restaurant.jpg"

export default function Reservations() {
  return (
      <main>
          <Box
              as='section'
              bg={`url(${BookingBG}) center/cover no-repeat`}
              pt={'50px'}
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
                      colSpan={{ sm: '4', md: '8', lg: '8' }}
                      colStart={{ sm: '4', md: '8', lg: '3' }}
                  >
                      <BookingForm />
                  </GridItem>
                </Grid>
          </Box>
      </main>
  )
}
