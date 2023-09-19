import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className='flex font-Roboto justify-between px-[100px] items-center min-h-[10vh]'>
                <Link to={"/"}><h4 className='font-Poppins font-bold tracking-wider text-2xl uppercase'>E-commerce</h4></Link>
                <ul className='flex justify-around w-[30%] xl:w-[40%] lg:w-[50%]'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About Us</Link>
                    <Link to={"/product"}>Product</Link>
                    <Link><button>Login</button></Link>
                </ul>
            </nav>
        </>
    )
}

export default Header