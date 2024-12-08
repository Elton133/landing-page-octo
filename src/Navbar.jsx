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
        <nav className=' navbar mx-7'>
          <div className='container flex justify-between items-center py-4'>
            <div className='flex items-center'>
                <a className="logo" href="#"><img src={ai} alt="" />AI ALLY</a>
            </div>

            <div className='hidden md:block'>
                <ul className='nav-links flex items-center gap-6'>
                    {NavbarMenu.map((item) => {
                        return (
                            <li className="nav-item"key={item.id}>
                                <a href={item.link} className='inline-block py-1 px-3'>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className=''>
               <a className="sign-in-button"href="#">Sign in</a>
            </div>
            <div className='md:hidden' onClick={()=> setOpen (!open)}>
                <MdMenu className='text-4xl'/>
            </div>
            </div>
        </nav>
        <ResponsiveMenu open={open}/>
        </>
    )
}
