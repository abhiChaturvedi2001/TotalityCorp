import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";

const Header = ({ cart }) => {
    const [Navbar, setNavbar] = useState(false);
    return (
        <>
            <nav className='flex z-50 font-Roboto  justify-between px-[70px] items-center min-h-[10vh]'>
                <Link to={"/"}><h4 className='font-Poppins font-bold tracking-wider text-2xl uppercase'>E-commerce</h4></Link>
                <ul className='flex  text-right justify-around items-center w-[30%] xl:w-[50%] lg:w-[70%] md:hidden'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About Us</Link>
                    <Link to={"/product"}>Product</Link>
                </ul>
                <Link to={"/cart"}>
                        <div className='relative'>
                            <AiOutlineShoppingCart />
                            <p className='absolute -top-4 left-1'>{cart}</p>
                        </div>
                    </Link>
                {!Navbar ? <HiMenuAlt3 onClick={() => setNavbar(true)} className=' text-2xl cursor-pointer hidden md:block' /> : <RxCross1 onClick={() => setNavbar(false)} className=' text-2xl cursor-pointer hidden md:block' />}
            </nav>


            {/* mobile design */}
            <div className={`hidden shadow-md h-[30vh] ${Navbar ? `md:block` : 'hidden'} `}>
            <ul className=' navlinks flex flex-col justify-center items-center w-[100%]'>
                    <Link onClick={() => setNavbar(false)} to={"/"}>Home</Link>
                    <Link onClick={() => setNavbar(false)} to={"/about"}>About Us</Link>
                    <Link onClick={() => setNavbar(false)} to={"/product"}>Product</Link>
                </ul>
            </div>
        </>
    )
}

export default Header