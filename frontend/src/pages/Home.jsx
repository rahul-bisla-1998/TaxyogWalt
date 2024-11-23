import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Payment from '../components/Payment'
import Purchase from '../components/Purchase'
import Logo from '../components/Logo'
import {useNavigate } from 'react-router-dom'



export default function Home() {

const navigate = useNavigate();
const [payment,setPayment ] = useState(false)
const handlePurchaseClick=  ()=>{
    setPayment(true)
}
    
const handlePaymentClick= ()=>{
    setPayment(false)
}

const handleDownload= ()=>{
  navigate("/download")
}
  return (
    <div className="overflow-x-hidden ">
    <div className="fixed top-0 -z-10 h-full w-full">
    <div className="relative h-full w-full bg-white"><div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div></div>
    </div>
      <div className="flex flex-auto">
    <div className="flex justify-between text-center ">
    <Logo/>
    </div>

    <div className="p-4 ml-auto -tracking-wide">
    <button onClick={handlePurchaseClick} className="p-1">Add Puchase</button>
    <button onClick={handlePaymentClick} className="p-1" >Add Payment</button>
    <button onClick={handleDownload} className="p-1 font-semibold">Download</button>
    </div>
    
    </div>
   {payment ? <Purchase/> : <Payment/>} 
   
    </div>
  )
}
