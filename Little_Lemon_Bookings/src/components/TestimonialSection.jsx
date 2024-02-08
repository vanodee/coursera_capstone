import {
    Heading,
    Text,
    Grid,
    GridItem,
    Stack,
    Box,
    Flex,
    Card,
    CardBody,
    HStack,
    Avatar
} from "@chakra-ui/react";

import Person1 from '../assets/Person1.jpg'
import Person2 from '../assets/Person2.jpg'
import Person3 from '../assets/Person3.jpg'
import Person4 from '../assets/Person4.jpg'

import TestimonialBG from '../assets/restaurant.jpg';


export default function TestimonialSection() {

    const reviews = [
        {
            id: 1,
            customerName: "John Doe",
            rating: 4.5,
            reviewText: "Great food and excellent service. I highly recommend this restaurant!",
            image: Person1
        },
        {
            id: 2,
            customerName: "Jane Smith",
            rating: 5,
            reviewText: "Absolutely delicious meals! The atmosphere is cozy and inviting. Will definitely be back.",
            image: Person2
        },
        {
            id: 3,
            customerName: "Alice Johnson",
            rating: 4,
            reviewText: "Had a wonderful dining experience here. The staff were friendly and the food was amazing!",
            image: Person3
        },
        {
            id: 4,
            customerName: "Bob Williams",
            rating: 4.8,
            reviewText: "Fantastic restaurant with a diverse menu. Everything we tried was top-notch. Will definitely return!",
            image: Person4
        },
    ];

  return (
      <Box
          as='section'
          bg={`url(${TestimonialBG}) center/cover no-repeat`}
      >
          {/* This extra Box is for Color overlay */}
          <Box
              py={'150px'}
              bg="rgba(73, 94, 87, 0.7)"
          >
                <Grid
                    templateColumns={{sm: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)', lg: 'repeat(12, 1fr)' }}
                    gap={30}
                    maxW={'1200px'}
                    mx={'auto'}
                    px={'30px'}
                    py={'10px'}
                    alignItems={'center'}
                    textColor={'highlight.2'}
                >
                  <GridItem colSpan={{ sm: '4', md: '8', lg: '12' }}>
                      <Heading as='h2' color={'white'} fontSize={{ sm: '4xl', md: '4xl', lg: '5xl' }} mb={'2rem'}>Testimonials</Heading>
                    </GridItem>

                    {reviews.map((review, index) => (
                        <GridItem
                            colSpan={{ sm: '2', md: '4', lg: '3' }}
                            key={index}
                        >
                            <Card borderRadius={'1.5rem'} boxShadow={'lg'}>
                                <CardBody>
                                    <Stack direction={'column'} align={'left'} spacing={5}>
                                        <Flex bg={'secondary.1'} maxW={'25%'} justifyContent={'center'} borderRadius={'0.5rem'}>
                                            <Text fontWeight={'semibold'} color={'white'}>{review.rating}</Text>
                                        </Flex>
                                        <HStack spacing={5}>
                                            <Avatar size={'md'} name={review.customerName} src={review.image} />
                                            <Text fontWeight={'bold'}>{review.customerName}</Text>
                                        </HStack>
                                        <Text color={'highlight.2'}>{review.reviewText}</Text>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
      </Box>
  )
}
