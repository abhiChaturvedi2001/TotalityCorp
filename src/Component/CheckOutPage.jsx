import React, { useState } from 'react'

const CheckOutPage = ({totalAmount}) => {
  const [Name, setName] = useState(" ")
  const [LastName, setLastName] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [Address, setAddress] = useState(" ")
  const [City, setCity] = useState(" ")
  const [pincode, setpincode] = useState(" ")
  const [Phone, setPhone] = useState(0)

  const OrderPlaceComponent = () =>{
     if(Name == " " && LastName === " " && email === " " && Address === " " && City === " " && pincode === " " && Phone === 0){
      alert("Please enter Shipping Information")
      }else{ alert("Hurray ! Your Order Has been Places With amount of " + totalAmount)}
  }
  return (
    <>
      <div className='w-[70%] mx-auto'>
        <h1 className='font-Poppins font-bold ml-4'>Please Enter your Shipping Details</h1>
        <form action="" className='px-3 mt-4'>
          <div>
            <label className='block'>Name</label>
            <input className='border w-[100%] py-1 mt-1 mb-1' value={Name} onChange={(e) => setName(e.target.value)} required type="text" />
          </div>
          <div>
            <label className='block'>Last Name</label>
            <input className='border w-[100%] py-1 mt-1 mb-1' value={LastName} onChange={(e) => setLastName(e.target.value)} required type="text" />
          </div>
          <div>
            <label className='block'>E-mail</label>
            <input className='border w-[100%] py-1 mt-1 mb-1' value={email} onChange={(e) => setEmail(e.target.value)} required type="email" />
          </div>
          <div>
            <label className='block'>Address</label>
            <input className='border w-[100%] py-1 mt-1 mb-1' value={Address} onChange={(e) => setAddress(e.target.value)} required type="text" />
          </div>
          <div>
            <label className='block'>Phone</label>
            <input className='border w-[100%] py-1 mt-1 mb-1' value={Phone} onChange={(e) => setPhone(e.target.value)} required type="number" />
          </div>
          <div>
            <label className='block'>Zip Code</label>
            <input className='border w-[100%] py-1 mt-1 mb-1' value={pincode} onChange={(e) => setpincode(e.target.value)} required type="text" />
          </div>
          <div>
            <label className='block'>City</label>
            <input className='border w-[100%] py-1 mt-1 mb-1' value={City} onChange={(e) => setCity(e.target.value)} required type="text" />
          </div>
          <button onClick={() => OrderPlaceComponent() } className='border w-[100%] px-3 py-2 mt-3'>Place Your Order</button>
        </form>
      </div>
    </>
  )
}

export default CheckOutPage