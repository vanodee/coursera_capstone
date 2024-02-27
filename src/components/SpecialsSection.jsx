import {
    Heading,
    Grid,
    GridItem,
    Box,
    Button,
    Flex,
} from "@chakra-ui/react";

//Images
import bruchetta from '../assets/bruchetta.png';
import greekSalad from '../assets/greek salad.jpg';
import lemonDessert from '../assets/lemon dessert.jpg';

//Custom Card Component
import HighlightCard from "./HighlightCard"


export default function SpecialsSection() {

    const meals = [
        {
            id: 1,
            Title: 'Greek salad',
            Price: '$12.99',
            Description: 'The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            Image: greekSalad
        },
        {
            id: 2,
            Title: 'Bruchetta',
            Price: '$5.99',
            Description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
            Image: bruchetta
        },
        {
            id: 3,
            Title: 'Lemon Dessert',
            Price: '$5.00',
            Description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            Image: lemonDessert
        },
    ];

  return (
      <Box as='section' pt={'50px'} pb={'150px'}>
          <Grid
              bg={'white'}
              templateColumns={{ sm: 'repeat(4, 1fr)', md: 'repeat(12, 1fr)', lg: 'repeat(12, 1fr)' }}
              gap={30}
              maxW={'1200px'}
              mx={'auto'}
              px={'30px'}
              py={'10px'}
              alignItems={'center'}
              textColor={'highlight.2'}
          >
              <GridItem colSpan={{base:'4', md:'12', lg:'12'}}>
                  <Flex justifyContent={'space-between'} alignItems={'center'} mb={'2rem'}>
                      <Heading as='h2' color={'highlight.2'} fontSize={{ base: '2xl', md:'4xl', lg:'5xl'}}>Specials</Heading>
                      <Button bg={'primary.2'}>Online Menu</Button>
                  </Flex>
              </GridItem>


                {meals.map((meal, index) => (
                    <GridItem
                        colSpan={'4'}
                        key={index}
                    >
                        <HighlightCard
                            Title={meal.Title}
                            Price={meal.Price}
                            Description={meal.Description}
                            Image={meal.Image}
                        />
                    </GridItem>
                ))}
          </Grid>
      </Box>
  )
}
