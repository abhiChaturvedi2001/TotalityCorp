import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'

const ProductPage = ({ setCart, cart, setCartData, cartData }) => {

    const { id } = useParams();
    let items = 0;
    const API = `https://api.pujakaitem.com/api/products`;
    const [SingleProduct, setSingleProduct] = useState([]);

    const AddToCart = (data) => {
        // Check if the product is already in the cart
        const isProductInCart = cartData.some(item => item.id === data.id);

        if (!isProductInCart) {
            // If the product is not in the cart, add it
            setCartData(prevCartData => [...prevCartData, { ...data, quantity: 1 }]);
            setCart(cart + 1);
            alert("Successfully Added item in the cart 😍");
        } else {
            // If the product is already in the cart, update its quantity
            const updatedCartData = cartData.map(item => {
                if (item.id === data.id) {
                    // Increase the quantity of the existing item
                    return { ...item, quantity: item.quantity };
                }
                return item;
            });
            setCartData(updatedCartData);
            alert("Please go to the cart Items is already exist")
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(`${API}?id=${id}`);
        const json = await data.json();
        setSingleProduct(json);
    }

    if (SingleProduct.length === 0) return <h1>Loading.........</h1>
    return (
        <>
            <div className="flex justify-around flex-wrap w-[80%] lg:w-[90%] md:w-[100%] px-3 m-auto items-center h-[80vh]">
                <div className="left mt-4 lg:flex lg:justify-around  lg:w-[60%]">
                    <img className={`w-[200px] md:w-[150px]`} src={SingleProduct.image[0].url} alt="" />
                    <img className={`w-[200px] md:w-[150px] mt-3`} src={SingleProduct.image[1].url} alt="" />
                    <img className={`w-[200px] md:w-[150px] mt-3`} src={SingleProduct.image[2].url} alt="" />
                </div>
                <div className="details w-[60%] lg:w-[100%] ml-5 mt-4">
                    <h1 className="text-4xl font-Poppins font-bold uppercase">{SingleProduct.name}</h1>
                    <h4 className="mt-3">MRP : {SingleProduct.price}</h4>
                    <p className="mt-3 text-lg">{SingleProduct.description}</p>
                    <h5 className="mt-3">Available : {SingleProduct.stock > 0 ? `In Stock (${SingleProduct.stock})` : "Out of Stock"}</h5>
                    <h5 className="mt-3">Product ID : {SingleProduct.id}</h5>
                    <h6 className="mt-3">Brand : {SingleProduct.company}</h6>
                    <h6 className="mt-3">Rating : {SingleProduct.stars} ({SingleProduct.reviews} reviewed by customer) </h6>
                    <button onClick={() => AddToCart(SingleProduct)} className="px-3  py-2 bg-red-700 text-white font-Roboto md:w-[100%] lg:w-[100%] mt-5 ">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductPage;
