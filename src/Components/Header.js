import Little_Lemon_Logo from '../Assets/Logo.svg';
import Nav from './Nav';


function Header() {
    return (
        <header>
            <div className='Header'>
                <a href='/'> <img src={Little_Lemon_Logo} alt="Little Lemon Logo" /> </a>
                <Nav />
            </div>
        </header>
    )
}

export default Header;