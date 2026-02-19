"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
   
  return (
   <SessionProvider>
   
    <RealHome></RealHome>
    </SessionProvider>
  );
}

function RealHome(){
  const session = useSession(); 
  return(
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {session.status === "authenticated" && <button onClick={()=>signOut()}>Log Out</button>}
      {session.status === "unauthenticated" && <button onClick={()=>signIn()}>Sign In</button>}
      
    </div>
  )
}
