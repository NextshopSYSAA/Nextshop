"use client";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

interface objlog {
  email : string,
  pwd : string
}
interface dec {
  email : string,
  id : number,
  firstname : string,
  role :string,
  iat : number
}
const Form1 = () => {
  
  const router = useRouter();
  // const cookiesstore  = cookies()
  const navigate = (path: string) => {
    router.push(path);
  };

  const [email, setEmail] = useState<string>();
  const [psw, setPsw] = useState<string>();
  const [token, setToken] = useState();
  const [decode , setDecode] = useState <dec>()

  const obj = {
    email : email,
    pwd : psw
  }
  const sleep = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));
  const handleSubmit = async (obj: { email: any; pwd: any; }) => {
    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        email: obj.email,
        pwd: obj.pwd,
      });
     
      if (response.status === 200) {
        setCookie('token', response.data);
        setToken(response.data);
        setDecode(jwtDecode(response.data.token));
        return true;
      } else {
        console.log('You are not valid');
        return false;
      }
    } catch (err) {
      console.error(err);
      return false;
    }
  };
  
  const redirect = async () => {
    const success = await handleSubmit(obj);
    await sleep(2000);
    if (success) {
      if (decode.role === 'admin') {
        navigate('/Sign/aboutUs');
      } else if (decode.role === 'seller') {
        console.log('It is a seller');
      } else if (decode.role === 'client') {
        console.log('It is a client');
      }
    }
  };
    console.log('token',token)
    console.log('decode',decode)
  
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
            paddingTop: "100px",
          }}
        >
          <div className="flex flex-col" style={{ paddingBottom: "7px" }}>
            <h3 className="text-2xl		">Log in to Exclusive</h3>
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
              placeholder="Password"
              type="text"
              onChange={(e) => setPsw(e.target.value)}
            />
            <div className="flex flex-row space-x-20">
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                style={{ width: "120px", height: "46px" }}
                onClick={() =>
                  // handleSubmit(obj)
                  redirect()
                }
              >
                Log In
              </button>
              <h6 className="text-xxs text-[#ef4444] whitespace-nowrap">
                Forget password?
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1;
