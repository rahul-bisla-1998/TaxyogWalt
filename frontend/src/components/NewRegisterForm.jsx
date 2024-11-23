import React, { useState } from 'react'
import { auth,db,storage,provider } from '../../firebase/Firebase';
import {  createUserWithEmailAndPassword ,signInWithRedirect,getRedirectResult} from "firebase/auth";
import { setDoc,doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function NewRegisterForm() {
  const navigate = useNavigate()
  const[email,setemail] = useState('')
  const [name,setName] = useState('')
  const [password,setPass] = useState('')
  const [ confirmPass, setConfirmPass] = useState('')

 

  const handleRegister = async(e) =>{
    e.preventDefault()
    
      await createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        const user = userCredential.user
        console.log(user)
        if(user){
          navigate("/home")
          // setDoc(doc(db,"Users", user.uid),{
          //   email:user.email,
          //   Name: name
          // })
        }
        console.log("User login register ")
      })
      .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
      })

    
  }

  return (
    <div>
    <div className="flex justify-center items-center p-3 rounded-md bg-blue-800 h-auto hover:shadow-xl hover:shadow-orange-300">
    <form className="flex flex-col ">
    <label className="m-2 text-2xl text-orange-600 font-semibold -tracking-wider italic">Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" onChange={(e)=>setemail(e.target.value)} className="border border-orange-600 hover:border-2 bg-blue-800 text-center font-normal tracking-wider" /> </label>
    <label className="m-2 text-2xl text-orange-600 font-semibold -tracking-wider italic">Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" onChange={(e)=>setName(e.target.value)} className="border border-orange-600 bg-blue-800 hover:border-2 text-center font-normal tracking-wider" /> </label>
    <label className="m-2 text-2xl text-orange-600 font-semibold -tracking-wider italic">Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" onChange={(e)=>setPass(e.target.value)} className="border border-orange-600 bg-blue-800 text-center font-normal hover:border-2 tracking-wider" /> </label>
    <label className="m-2 text-2xl text-orange-600 font-semibold -tracking-wider italic">Confirm Password: <input type="password" onChange={(e)=>setConfirmPass(e.target.value)} className="border border-orange-600 bg-blue-800 text-center font-normal hover:border-2 tracking-wider" /> </label>
    <button onClick={handleRegister} className="mx-40 mt-3 font-thin rounded-lg hover:shadow-2xl text-xl bg-white hover:bg-orange-400 hover:text-white" type="submit">Submit</button>
    </form>
    </div>
   
    </div>
  )
}
