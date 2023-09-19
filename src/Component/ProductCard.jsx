import React from 'react'

const ProductCard = (props) => {
  // destructring the items
  const { products } = props;
  const { id, image, name, price, description } = products;

  return (
    <>
      <div className=' min-w-[80%] mx-auto cursor-pointer min-h-[50vh] bg-[#eaeaea] rounded-lg'>
        <img className='w-[100%] rounded-tr-lg rounded-tl-lg' src={image} alt="" />
        <div className="details flex justify-between items-center h-[5vh] px-2">
          <h2 className='font-bold font-Poppins uppercase'>{name}</h2>
          <h2>{price}</h2>
        </div>
        <p className='mt-3 px-3'>{description.substring(0, 76)}</p>
      </div>
    </>
  )
}

export default ProductCard



