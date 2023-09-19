import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'

const ProductPage = () => {
    const { id } = useParams();
    const API = `https://api.pujakaitem.com/api/products`;
    const [SingleProduct, setSingleProduct] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(`${API}?id=${id}`);
        const json = await data.json();
        setSingleProduct(json);
    }

    if (SingleProduct.length === 0) return <h1>Loading......</h1>
    return (
        <>
            <div className="flex justify-around flex-wrap w-[80%] m-auto items-center h-[80vh]">
                <div className="left mt-4 lg:flex lg:justify-around lg:w-[80%]">
                    <img className={`w-[200px]`} src={SingleProduct.image[0].url} alt="" />
                    <img className={`w-[200px] mt-3`} src={SingleProduct.image[1].url} alt="" />
                    <img className={`w-[200px] mt-3`} src={SingleProduct.image[2].url} alt="" />
                </div>
                <div className="details w-[60%] lg:w-[100%] ml-5 mt-4">
                    <h1 className="text-4xl font-Poppins font-bold uppercase">{SingleProduct.name}</h1>
                    <h4 className="mt-3">MRP : {SingleProduct.price}</h4>
                    <p className="mt-3 text-lg">{SingleProduct.description}</p>
                    <h5 className="mt-3">Available : {SingleProduct.stock > 0 ? `In Stock (${SingleProduct.stock})` : "Out of Stock"}</h5>
                    <h5 className="mt-3">Product ID : {SingleProduct.id}</h5>
                    <h6 className="mt-3">Brand : {SingleProduct.company}</h6>
                    <h6 className="mt-3">Rating : {SingleProduct.stars} ({SingleProduct.reviews} reviewd by customer) </h6>
                    <button className="px-3 mt-3 py-2 bg-red-700 text-white font-Roboto ">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductPage