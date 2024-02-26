"use client";
import Link from 'next/link'

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
interface aa  {
  firstname :  string,
  lastname: string,
  email: string,
  role: string,
  adress: string,
  phone: string
  pwd: string
};
const Form1 = () => {
  const [name, setName] = useState<string>();
  const [lastname, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [role, setRole] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [adress, setAdress] = useState<string>();
  const [pwd, setPwd] = useState<string>();
  
  const router = useRouter();
  const navigate=(path:string)=>{
    router.push(path)
    }
  
  const obj = {
    firstname: name,
    lastname: lastname,
    email: email,
    role: role,
    adress: adress,
    phone: phone,
    pwd: pwd,
  };

 

  const hundlesub = async (obj : aa) => {
    try{
      await  axios.post("http://localhost:3001/user/signup",obj)
      console.log('obj ', obj)
      navigate('/Sign/signIn')
    }
    catch(err){
      console.log('err',err)
    }
      
     
  };

  return (
    <div>
      <div
        className="flex flex-row"
        style={{
          height: "750px",
          width: "800px",
          paddingTop: "80px",
          gap: "129px",
        }}
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ei8Obc480OzLO4I-exiLNDwpkdceHtc8xun5uPHq0aqbZstVMhVJAaNQ25q-n03w93qcFgaMvrwDzRtJW4D394cWc~sMk9wFCOZaq4Sgjv17FgGcLdsmAgUeFr1tqkTGFvfgvf~rNFYNK2b3JEaVyL93BI9TON9I1eg5CD0LfXOKCFDrbK-A551Y0C~wE4H2laxYopK2fjQQL~cnH4BJ1Vowjq7Ii5tbk8t6rgPxilKXIPdKFL61W5S5RGsojj6OULhclHVHLlBmmlOQll5BtLQ6uwqORuPQsKXGKqHHZoS7bhTVEpcHbvEOWUmLTwimcG-~9~Ytmsug8RxpdrV91A__"
          alt="no Content"
        />

        <div
          className="flex flex-col"
          style={{
            width: "371px",
            height: "530px",
            gap: "48px",
            paddingTop: "80px",
          }}
        >
          <div className="flex flex-col" style={{ paddingBottom: "7px" }}>
            <h3 className="text-2xl">Create an account</h3>
            <h5 className="	text-xs	">Enter your details below</h5>
          </div>
          <div className="flex flex-col">
            <input
              style={{
                marginBottom: "15px",
                width: "300px",
                height: "32px",
                borderBottom: "2px solid #d3d3d3",
              }}
              placeholder="first name "
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              style={{
                marginBottom: "15px",
                width: "300px",
                height: "32px",
                borderBottom: "2px solid #d3d3d3",
              }}
              placeholder="last name"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              style={{
                marginBottom: "15px",
                width: "300px",
                height: "32px",
                borderBottom: "2px solid #d3d3d3",
              }}
              placeholder="Email or phone number"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              style={{
                marginBottom: "15px",
                width: "300px",
                height: "32px",
                borderBottom: "2px solid #d3d3d3",
              }}
              placeholder="adress"
              type="text"
              onChange={(e) => setAdress(e.target.value)}
            />
            <input
              style={{
                marginBottom: "15px",
                width: "300px",
                height: "32px",
                borderBottom: "2px solid #d3d3d3",
              }}
              placeholder="phone"
              type="text"
              onChange={(e) => setPhone(e.target.value)} 
            />
            <input
              style={{
                marginBottom: "15px",
                width: "300px",
                height: "32px",
                borderBottom: "2px solid #d3d3d3",
              }}
              placeholder="Password"
              type="text"
              onChange={(e) => setPwd(e.target.value)}
            />
            <input
              style={{
                marginBottom: "15px",
                width: "300px",
                height: "32px",
                borderBottom: "2px solid #d3d3d3",
              }}
              placeholder="client/seller"
              type="text"
              onChange={(e) => setRole(e.target.value)}
            />
            <button
              type="button"
              onClick={()=>
               hundlesub(obj)
              }
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Create Account
            </button>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 align-items: center"
              style={{ height: "40px" }}
            >
              <FcGoogle className="align-items: center" /> Sign up with Google
            </button>
            <div className="flex flex-row space-x-6">
              <h6 className="text-sm text-[#64748b] ">Already have account?</h6>
              <Link href="\Sign\signIn"> <h6 className="text-sm">log in </h6></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1;
