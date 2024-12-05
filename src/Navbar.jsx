import './App.css'
import ai from './assets/aially.png'
export default function Navbar() {
   
    return (
        <nav className='navbar'>
            <a className="logo" href="#"><img src={ai} alt="" />AI ALLY</a>
            <ul className='nav-links'>
                <li className='nav-item'><a href="">Home</a></li>
                <li className='nav-item'><a href="">Features</a></li>
                <li className='nav-item'><a href="">Pricing</a></li>
                <li className='nav-item'><a href="#testimonials">Testimonials</a></li>
            </ul>
            <a className="sign-in-button"href="#">Sign in</a>
        </nav>
    )
}