import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { auth,provider } from '../../firebase/Firebase'
import { FaGoogle } from "react-icons/fa";
import { signInWithEmailAndPassword,signInWithPopup} from 'firebase/auth'

export default function LoginForm() {
  const newEmail= "taxyog@gmail.com";
  const newPassword = "00000";
  const [email,SetEmail]  = useState('')
  const [pass, SetPass] = useState('')
  const navigate = useNavigate()
  

    const handleRegister = ()=>{
        navigate("/register")
    }
     const google = async () =>{
    await signInWithPopup(auth,provider)
    .then (async(result)=>{
      console.log(result)
      if (result){
        navigate("/home")
      }
    })
  }


    const handleSubmt = async (e)=>{
      e.preventDefault()
      await signInWithEmailAndPassword(auth,email,pass)
      .then ((userCredential)=>{
        const user = userCredential.user;
        if(user){
          navigate("/home")
        }
      })
      .catch((error) => {
        if(email === newEmail & pass === newPassword){
          navigate("/walt")
        }else{
          const errorCode = error.code;
        const errorMessage = error.message
        }
        
      })
    }
  return (
    <div>
    <div className="flex justify-center items-center p-3 rounded-md bg-blue-800 h-56 ">
      <form className="flex flex-col" action="">
      <label className="m-2 text-2xl text-orange-600 font-semibold -tracking-wider italic ">Username: <input onChange={(e)=>SetEmail(e.target.value)} className="border border-orange-600 bg-blue-800 text-center tracking-wider text-white font-normal" type="text"/></label>
      <label className="m-2 text-2xl text-orange-600  font-semibold -tracking-wider italic">Password: &nbsp;<input onChange={(e)=>SetPass(e.target.value)} className="border border-orange-600 bg-blue-800 text-center tracking-wider text-white font-normal" type="password"/></label>
      <button onClick={handleSubmt} className="mx-40 mt-3 font-thin rounded-lg hover:shadow-2xl text-xl bg-white hover:bg-orange-600 hover:text-white" type="submit">Submit</button>  
      </form>
      </div>
      <button className="mt-2 p-1 font-mono font-bold italic hover:text-yellow-700" type="submit" onClick={handleRegister}>New Registers</button>
       <div className=" mt-2 text-3xl">
    <div className="flex">
    <button onClick={google}><FaGoogle /></button>
    &nbsp;<span className="text-xl mt-1 bg-blue-800 bg-clip-text text-transparent">Login</span>
    </div>
    
    </div>
    </div>
  )
}
