import React from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'

const Home = () => {
  return (
    <>
      <div className='flex flex-wrap justify-center items-center min-h-[70vh]'>
        <div className='left w-[45%] lg:w-[100%] lg:text-center '>
          <h6 className='uppercase font-medium font-Roboto'>Welcome to</h6>
          <h2 className='uppercase font-Poppins text-5xl mt-2 font-bold'>ABhi <span className='tracking-wider'>Ecommerce</span></h2>
          <p className='font-Roboto font-medium mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia pariatur <br /> magni ex sequi fuga aperiam, vitae recusandae <br /> aliquid eius? Pariatur.</p>
          <Link to={"/product"}><button className='px-3 bg-slate-300 py-2 mt-3 cursor-pointer'>Shop Now</button></Link>
        </div>
        <div className="image-container relative lg:mt-[50px]">
          <img className='w-[350px] lg:w-[100%]' src="https://plus.unsplash.com/premium_photo-1683121817275-85d1dcf9e4c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhbWlseSUyMHNob3BwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
      </div>
      <Product />
    </>
  )
}

export default Home