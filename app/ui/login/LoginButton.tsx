'use client';
import { useSession } from "next-auth/react";
import { signIn, signOut} from "next-auth/react";
export default function LoginButton() {
   const { data: session } = useSession();
   if (session && session.user){
      return(
   <button onClick={()=>signOut()} className='border-2 border-gray-300 rounded-full w-16 h-16 p-2'>
       SignOut
   </button>
      )
   }
      return <button onClick={()=>signIn()} className='border-2 border-gray-300 rounded-full w-16 h-16 p-2'>
            SignIn
    </button>
    
}
