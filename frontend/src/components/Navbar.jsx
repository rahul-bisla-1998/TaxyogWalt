import React from 'react'
import Logo from './Logo'

export default function Navbar() {
  return (
    <div className="flex flex-auto">
    <div className="flex flex-auto">
    <div className="flex flex-col justify-between text-center">
    <Logo/>
      </div>

    <div className="p-4 ml-auto -tracking-wide">
    <button className="p-1">Add Puchase</button>
    <button className="p-1">Add Paymentadsa</button>
    <button className="p-1 font-semibold">Download</button>
    </div>
    
    </div>
    
    </div>
  )
}
