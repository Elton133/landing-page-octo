import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'
export default function ResponsiveMenu({ open }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 , y: -100}}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y:-100 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-20 left-0 w-full h-screen z-20 "
                >
                    
                    <div id="responsive-menu"className='text-xl font-semibold  backdrop-blur-xl text-white m-6 rounded-3xl'>
                        <ul className="flex flex-col justify-center items-center gap-4">
                            <li>Home</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>
                            <li><a className="sign-in-button"href="#">Sign in</a></li>
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
