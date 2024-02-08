import { Box, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Logo_white from "../assets/little_lemon_white.png";
import Logo_white_2 from "../assets/white_lemon_logo2.png";
import NavItems from "./NavItems";


function Footer() {

    return (
        <Box as='footer' bg='primary.1'>
            <Grid
                templateColumns={{ base:'repeat(4, 1fr)', md:'repeat(8, 1fr)', lg:'repeat(12, 1fr)'}}
                gap={30}
                maxW={'1200px'}
                mx={'auto'}
                px={'30px'}
                py={'50px'}
                alignItems={'flex-start'}
                textColor={'highlight.1'}
            >

                <GridItem colSpan={{ base: '4', md: '2', lg: '3' }}>
                    <NavLink to="/">
                        <Image
                            display={{ base: "none", md: "flex"}}
                            src={Logo_white}
                            alt='Little Lemon Logo (White)'
                        />
                        <Image
                            display={{ base: "flex", md: "none" }}
                            src={Logo_white_2}
                            alt='Little Lemon Logo (White)'
                            maxW={'250px'}
                        />
                    </NavLink>
                </GridItem>

                <GridItem
                    colSpan={{ base: '2', md: '2', lg: '3' }}
                    display={{ base: "none", md: "flex" }}
                >
                    <VStack align={'left'}>
                        <Text fontWeight='bold' mb={'1rem'}>Navigation</Text>
                        <NavItems />
                    </VStack>
                </GridItem>

                <GridItem colSpan={{ base: '2', md: '2', lg: '3' }}>
                    <VStack align={'left'}>
                        <Text fontWeight='bold' mb={'1rem'}>Contact Info</Text>
                    </VStack>
                </GridItem>

                <GridItem colSpan={{ base: '4', md: '2', lg: '3' }}>
                    <VStack align={'left'}>
                        <Text fontWeight='bold' mb={'1rem'}>Social Media</Text>
                    </VStack>
                </GridItem>

            </Grid>
        </Box>
    )
}

export default Footer;