import './App.css'
import ai from './assets/aially2.png'
export default function Navbar() {
   
    return (
        <nav id='bottom-nav'className='navbar'>
            <a className="logo" href="#"><img src={ai} alt="" />AI ALLY</a>
            <ul className='nav-links'>
                <li className='nav-item'><a href="">Home</a></li>
                <li className='nav-item'><a href="">Features</a></li>
                <li className='nav-item'><a href="">Pricing</a></li>
                <li className='nav-item'><a href="">Testimonials</a></li>
            </ul>
            <a id='instagram' className="bottom-links" href="#">Instagram</a>
            <a id='facebook'className="bottom-links"href="#">Facebook</a>
            <a id='twitter' className="bottom-links"href="#">Twitter</a>
            
        </nav>
    )
}