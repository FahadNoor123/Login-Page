import { getSession } from "next-auth/react"
import { useSession, signOut, signIn, } from "next-auth/react";
import { useRouter } from "next/router"
import { useEffect } from "react";
import Link from "next/link";

export default function SignUp () {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      window.location.href = '/auth/login';
      return null;
    }
  }, [session]);


 
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Your Profile Page
          {session ? (
        <>
     
          <h5>Your Email Address: {session.user.email}</h5>
         
        </>
      ) : (
        <p></p>
      )}
           
           
            
          </h1>
        </div>
        </div>
    )
};

export async function getServerSideProps({req}){
  const session=await getSession({req});

  return{
    props:{
       session
   }}}

  // if(session){
  //   return{
    //   redirect:{
    //     destination:"/auth/profile",
    //     permanent:false
     
    // }
//   }

// }else if(!session){
//   return{
  //   redirect:{
  //     destination:"/auth/login",
  //     permanent:false
  // }
// }}
// return{
//  props:{
//     session
// }
// }