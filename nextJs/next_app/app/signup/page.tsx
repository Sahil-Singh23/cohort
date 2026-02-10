"use client"

import axios from "axios"
import Link from "next/link"
import { useState } from "react"

const SignUp = () => {
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-black border border-white rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-light text-white mb-2 text-center">
          Sign up
        </h1>
        <p className="text-white/60 mb-8 text-sm text-center">
          Welcome back to your todo workspace
        </p>
        
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Username"
            onChange={(e)=>{
                setUser(()=>e.target.value)
            }}
            className="w-full bg-transparent border border-white/30 text-white placeholder-white/50 py-3 px-4 rounded focus:border-white focus:outline-none transition duration-200"
          />
          <input 
            type="password" 
            placeholder="Password"
            onChange={(e)=>{
                setPassword(()=>e.target.value)
            }}
            className="w-full bg-transparent border border-white/30 text-white placeholder-white/50 py-3 px-4 rounded focus:border-white focus:outline-none transition duration-200"
          />
          
          <button 
            onClick={()=>{
               axios.post("/api/v1/signup",{
                 user,password
               })
            }}
            className="w-full bg-white hover:bg-white/90 text-black font-medium py-3 px-6 rounded transition duration-200 mt-6"
          >
            Sign up
          </button>
        </div>
         
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <Link href={"/signin"} className="text-xs text-white/40">
            Already have an account? Sign in instead
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
