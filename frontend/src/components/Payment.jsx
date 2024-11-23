import React, { useState } from 'react'


export default function Payment() {

  const [date,setDate] = useState('')
  const [from, setFrom ] = useState('')
  const [to,setTo] = useState('')
  const [utr,setUTR] = useState('')
  const [file,setFile] = useState([]);
  const [voucher,setVoucher] = useState('Sale')


  const Option =[
    {value: 'Payment' , label:'Payment'},
    {value: 'Receipt', label:'Receipt'}
  ]

  return (
    <div className="flex flex-col justify-center items-center my-10 mx-16 md:mx-36 lg:mx-40 xl:mx-96 rounded-xl bg-blue-800 ">
    <div className="flex text-3xl sm:text-5xl font-bold -tracking-wide my-5 text-orange-600 ">Receipt/Payment</div>
    <div className="flex rounded-lg mb-5 p-2 bg-blue-600">
         <form className=" flex flex-col text-center" action="">
         <label className=" flex text-white items-center">Date: <input type="date" className="p-1 m-1 ml-10 flex text-black" value={date} onChange={(e)=> setDate(e.target.value)} /> </label>
         
         <label className="flex items-center text-white">From: <input type="text" className="p-1 m-1 ml-9 text-black" placeholder="From" value={from} onChange={(e)=>setFrom(e.target.value)} /></label>
         
         <label className="flex items-center text-white">To: <input type="text" className="p-1 m-1 ml-14 text-black" placeholder="To" value={to} onChange={(e)=>setTo(e.target.value)} /></label>
         
         <label className="flex items-center text-white">UTR: <input type="text" className="p-1 m-1 ml-10 text-black" placeholder="UTR" value={utr} onChange={(e)=> setUTR(e.target.value)} /></label>
        
        <label className="flex items-center text-white">Voucher: <div className="flex bg-white text-black ml-10 mx-10">
          <select value={voucher} onChange={(e)=>setVoucher(e.target.value)}>
          {Option.map((option)=>(
            <option key={option.value} value={option.value}>
            {option.label}
            </option>
          ))}
          </select>
         </div> </label>
        
         <label className="flex items-center text-white">File: <input type="file" className="p-1 m-1 ml-11" onChange={(e)=>setFile(e.target.files[0])} /></label>
        
         <label className="flex items-center text-white">Group: <input type="text" className="p-1 m-1 ml-8 text-black" placeholder="Group" name="" id="" /></label>
         <button type="submit" className="text-black p-1 m-1 mx-32 rounded-xl mt-2 bg-white">Submit</button>

         </form>
        </div>
     
    </div>
  )
}
