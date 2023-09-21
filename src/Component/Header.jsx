import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";

const Header = ({ cart }) => {
    const[Navbar, setNavbar] = useState(false);
    return (
        <>
            <nav className='flex z-50 font-Roboto flex-1 justify-between px-[70px] items-center min-h-[10vh]'>
                <Link to={"/"}><h4 className='font-Poppins font-bold tracking-wider text-2xl uppercase'>E-commerce</h4></Link>
                <ul className='flex justify-around items-center w-[30%] xl:w-[50%] lg:w-[70%] md:hidden'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About Us</Link>
                    <Link to={"/product"}>Product</Link>
                    <Link to={"/cart"}>
                        <div className='relative'>
                            <AiOutlineShoppingCart />
                            <p className='absolute -top-4 left-1'>{cart}</p>
                        </div>
                    </Link>
                    <Link><button className='border px-3 py-2  bg-indigo-500 text-white font-Poppins uppercase cursor-pointer '>Login</button></Link>
                </ul>
                <HiMenuAlt3 className=' text-2xl cursor-pointer hidden md:block' />
            </nav>
        </>
    )
}

export default Header