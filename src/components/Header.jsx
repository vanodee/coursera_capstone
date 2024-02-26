import Nav from './Nav'
import Logo from '../assets/Logo.svg'
import { Box, Grid, GridItem, Img } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';


function Header() {

    return (
        <Box
            as='header'
            bg={'white'}
            position="fixed"
            top="0"
            width="100%"
            zIndex="999"
        >
            <Grid
                templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)', lg: 'repeat(12, 1fr)' }}
                gap={30}
                maxW={'1200px'}
                mx={'auto'}
                px={'30px'}
                py={'10px'}
                alignItems={'center'}
                textColor={'highlight.2'}
            >
                <GridItem
                    colSpan={{ base: '2', md: '4', lg: '3' }}
                >
                    <NavLink to='/'> <Img src={Logo} alt='Little Lemon Logo' /> </NavLink>
                </GridItem>

                <GridItem as='nav'
                    colSpan={{ base: '2', md: '4', lg: '9' }}
                    justifySelf={'end'}
                >
                    <Nav />
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Header;