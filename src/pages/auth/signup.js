import Form from "@/components/auth/form";
import React from "react";

export default function SignUp () {
    const onSubmit=async(email,password, name)=>{
try{
    const response= await fetch("/api/auth/signup",{
        method:"POST",
        body:JSON.stringify({email,password, name}),
        headers:{
            "Content-Type":"application/json"
        }
       })
       if(response.ok){
        alert("Succesfull Singinup")
       }
    }catch(err){
        console.error("Error:", err); // Log the error with more information
    }


    
    }
    return <Form signin={false} onFormSubmit={onSubmit}/>
};
