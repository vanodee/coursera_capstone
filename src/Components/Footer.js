import Little_Lemon_white from '../Assets/Little_Lemon_white.png';
import Nav from './Nav';

function Footer() {
    return (
        <footer>
            <div className='Footer'>
                <a href='/'> <img src={Little_Lemon_white} alt="Little Lemon Logo" /> </a>
                <Nav />
                <ul>
                    <li>Contact</li>
                    <li>Address</li>
                    <li>Phone</li>
                    <li>Email</li>
                </ul>
                <ul>
                    <li>Social Media</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;