import React, { useEffect, useState } from 'react'
import { buttons } from '../Utlis/constant'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const Product = () => {
  // making a copy and transfer original to another copy
  const [ProductsData, setProductsData] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const data = await fetch(`https://api.pujakaitem.com/api/products`)
    const json = await data.json();
    setProductsData(json);
    setFilterProducts(json);
  }
  // filter the items
  const filterItems = (category) => {
    const filterData = ProductsData.filter((items) => {
      if (items.category === category) {
        return items;
      } else if (category === "All") return items;
    })

    setFilterProducts(filterData);
  }

  if (filterProducts.length === 0) return <h1>Loading..........</h1>

  return (
    <>
      <div className='flex justify-center min-h-[100vh] mt-10'>
        <div>
          <h6 className=' text-center uppercase font-Roboto font-medium'>Check Out</h6>
          <h1 className=' text-center font-bold text-4xl font-Poppins'>Our Products</h1>
          <div className='flex justify-center items-center h-[20vh]'>
            {
              buttons.map((btn) => {
                return (
                  <>
                    <button className='px-4 md:px-2 border ml-2 py-2 cursor-pointer' key={btn.id} onClick={() => filterItems(btn.type)} type={btn.type}>{btn.buttonName}</button>
                  </>
                )
              })
            }
          </div>
          <div className='mt-4 w-[100%] px-4 grid grid-cols-3 justify-items-center justify-center gap-3 md:flex md:flex-wrap md:px-3'>
            {
              filterProducts.map((items) => {
                return (
                  <>
                    <Link to={`/productpage/${items.id}`}><ProductCard products={items} /></Link>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Product