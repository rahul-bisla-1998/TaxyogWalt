import React, { useState } from 'react'
import { Dropdown } from 'rsuite'

export default function Purchase() {

  const [date,setDate] = useState('')
  const [from, setFrom ] = useState('')
  const [to,setTo] = useState('')
  const [utr,setUTR] = useState('')
  const [taxAmnt, setTaxAmnt] = useState('')
  const [attachemnt,setAttachment] = useState([]);
  const [voucher,setVoucher] = useState('Sale')

  const handleKeyDown = (event) =>{
    const charCode = event.target.value;
    if (
      charCode === 8 || charCode === 46 || (charCode >= 48 && charCode <=57)
    ){
      return;
    }else {
      event.preventDefault();
    }
  };

  const Option = [
    {value: 'Sale', label:'Sale'},
    {value: 'Purchase', label:'Purchase'}
  ]

  return (
    <div className="flex flex-col justify-center items-center my-10 mx-16 md:mx-36 lg:mx-40 xl:mx-96 rounded-xl bg-blue-800 ">
    <div className="flex text-5xl font-bold -tracking-wide my-5 text-orange-600">Sale/Purchase</div>
    <div className="flex rounded-lg mb-10 bg-blue-600">
         <form className=" flex flex-col text-center p-2" action="">
         <label className="flex items-center text-white">Date: <input type="date" className="p-1 m-1 text-black" value={date} onChange={(e)=> setDate(e.target.value)} /> </label>
         
         <label className="flex items-center text-white">From: <input type="text" className="p-1 m-1 text-black" placeholder="From" value={from} onChange={(e)=>setFrom(e.target.value)} /></label>
         
         <label className="flex items-center text-white">To: <input type="text" className="p-1 m-1 text-black" placeholder="To" value={to} onChange={(e)=>setTo(e.target.value)} /></label>

         <label className="flex items-center text-white">Taxable Amount: <input className="p-1 m-1 text-black" type="number" value={taxAmnt} onChange={(e)=> setTaxAmnt(e.target.value)} /></label>

          <label className="flex items-center text-white">TDS: <input type="number" className="p-1 m-1 text-black" placeholder="TDS"/></label>

        <label className="flex items-center text-white">SER FEES(Bal): <input type="number" className="p-1 m-1 text-black" placeholder="SER FEES"/></label>

        
        <label className="flex items-center text-white">Voucher: <div className="flex bg-white text-black mx-10">
          <select value={voucher} onChange={(e)=>setVoucher(e.target.value)}>
          {Option.map((option)=>(
            <option key={option.value} value={option.value}>
            {option.label}
            </option>
          ))}
          </select>
         </div> </label>
        
         <label className=" flex items-center text-white">Attachment: <input type="file" className="p-1 m-1" onChange={(e)=>setAttachment(e.target.files[0])} /></label>

         <label className="flex items-center text-white">Remarks: <input type="text" className="p-1 m-1 text-black" placeholder="Remarks" name="" id="" /></label>
        
         <label className="flex items-center text-white">Group: <input type="text" className="p-1 m-1 text-black" placeholder="Group" name="" id="" /></label>
         <button type="submit" className="text-black p-1 m-1 mx-28 rounded-xl mt-2 bg-white">Submit</button>

         </form>
        </div>
     
    </div>
  )
}
