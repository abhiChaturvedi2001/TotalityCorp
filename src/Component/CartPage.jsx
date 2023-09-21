import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CartPage = ({ cartData, setCartData, cart, setCart = { setCart } }) => {
    let [quantity, setQuantity] = useState(1);
    let [totalPrice, settotalPrice] = useState([0])
    const deleteItems = (id) => {
        const updatedCartData = cartData.filter(item => item.id !== id);
        setCartData(updatedCartData);
        setCart(--cart);
    }
    const increment = (price) => {
        setQuantity(++quantity);
        settotalPrice(price)
        const amount = totalPrice.reduce((a, b) => {
            return a + b;
        });

        console.log(amount)

    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(--quantity);
        }
    }
    if (cartData.length == 0) return <h1 className='text-center'>Cart Is Empty.....</h1>
    return (
        <>
            <div className='px-4'>
                <div className='flex justify-between mx-auto pb-4 w-[70%] md:w-[100%] mt-10 border-b-2 items-center'>
                    <h1>Shopping Cart</h1>
                    <h2>{cart} items</h2>
                </div>
                <div>
                    <div className='flex sm:hidden justify-between mx-auto w-[70%] md:w-[100%]  items-center h-[10vh]'>
                        <h4>Products Details</h4>
                        <div className='flex justify-around w-[45%] md:w-[100%] '>
                            <h4>Quantity</h4>
                            <h4>Price</h4>
                            <h4>Total</h4>
                        </div>
                    </div>

                    {
                        cartData.map((items) => {
                            return (
                                <>
                                    <div className='flex justify-between overflow-scroll w-[70%] md:w-[100%]  mx-auto mt-3  px-2 '>
                                        <div className='image-section flex sm:block mr-2'>
                                            <img className='w-[150px]' src={items.image[0].url} alt="" />
                                            <div className='ml-3'>
                                                <h2>{items.name}</h2>
                                                <h3>{items.company}</h3>
                                                <button onClick={() => deleteItems(items.id)} >Remove</button>
                                            </div>
                                        </div>
                                        <div className='flex justify-between w-[16rem]'>
                                            <div>
                                                <button onClick={() => increment(items.price)} className='text-lg font-medium'>+</button>
                                                <span className='border px-2 py-2 ml-2'>{quantity}</span>
                                                <button onClick={() => decrement(items.price)} className='ml-2'>-</button>
                                            </div>
                                            <h2>{items.price}</h2>
                                            <h3>{totalPrice == 0 ? items.price : totalPrice}</h3>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='w-[20%] h-[10vh] mt-5 md:w-[100%] pb-4 px-3 relative mx-auto'>
                    <div className='flex justify-between' >
                        <h3>SubTotal : </h3>
                        <h3>1000</h3>
                    </div>
                    <Link to={"/cart/checkoutpage"}><button className='absolute mt-2 right-0 border px-3 py-2  rounded-r-md cursor-pointer'>checkout</button></Link>
                </div>

            </div>
        </>
    )
}

export default CartPage