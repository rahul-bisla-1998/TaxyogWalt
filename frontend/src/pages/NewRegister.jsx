import React from 'react'
import LoginForm from '../components/LoginForm'
import Logo from '../components/Logo'
import NewRegisterForm from '../components/newRegisterForm'
import RegisterForm from '../components/RegisterForm'


export default function NewRegister() {
  return (
    <div className="overflow-x-hidden">
     <div className="fixed top-0 -z-10 h-full w-full">
    <div class="relative h-full w-full bg-white"><div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div></div>
    </div>
   <Logo/>
    <div className="flex justify-center items-center mt-56 p-16">
    <NewRegisterForm/>
    </div>
    </div>
  )
}
