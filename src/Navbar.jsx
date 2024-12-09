import './App.css'
import './Navbar.css'
import ai from './assets/aially.png'
import { MdMenu } from "react-icons/md";
import { NavbarMenu } from './mockData/data';
import { useState } from 'react';
import ResponsiveMenu from './ResponsiveMenu';
export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        // <nav className='navbar'>
        //     <a className="logo" href="#"><img src={ai} alt="" />AI ALLY</a>
        //     <ul className='nav-links'>
        //         <li className='nav-item'><a href="">Home</a></li>
        //         <li className='nav-item'><a href="">Features</a></li>
        //         <li className='nav-item'><a href="">Pricing</a></li>
        //         <li className='nav-item'><a href="#testimonials">Testimonials</a></li>
        //     </ul>
        //     <a className="sign-in-button"href="#">Sign in</a>
        // </nav>

        <>
       <nav className='navbar'>
  <div className='container flex justify-around items-center py-1'>
    <div>
      <a className="logo flex items-center gap-2" href="#">
        <img src={ai} alt="Logo" className="w-8 h-8" />
        <span>AI ALLY</span>
      </a>
    </div>

    <div className='hidden md:block'>
      <ul className='nav-links flex items-center'>
        {NavbarMenu.map((item) => (
          <li className="nav-item" key={item.id}>
            <a href={item.link} className='inline-block py-1 '>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className='py-6'>
      <a className="sign-in-button" href="#">Sign in</a>
    </div>
    
    <div className='md:hidden' onClick={() => setOpen(!open)}>
      <MdMenu className='text-3xl' />
    </div>
  </div>
</nav>

        <ResponsiveMenu open={open}/>
        </>
    )
}
