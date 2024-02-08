import Nav from './Nav'
import Logo from '../assets/Logo.svg'
import { Grid, GridItem, Img } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';


function Header() {

    return (
        <Grid
            as='header'
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
            <GridItem
                colSpan={{ base: '2', md: '4', lg: '5' }}
            >
                <NavLink to='/'> <Img src={Logo} alt='Little Lemon Logo' /> </NavLink>
            </GridItem>

            <GridItem as='nav'
                colSpan={{ base: '2', md: '4', lg: '7' }}
                justifySelf={'end'}
            >
                <Nav />
            </GridItem>
        </Grid>
    )
}

export default Header;