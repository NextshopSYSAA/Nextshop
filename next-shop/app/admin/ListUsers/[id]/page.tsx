'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';


const page = ({params}) => {
    const [user,setUser]=useState([])
    const [refresh,setRefresh]=useState(false)
      const router = useRouter()

    useEffect(()=>{
        axios.get(`http://localhost:3001/user/oneUser/${params.id}`)
        .then(r=>setUser(r.data)).catch(err=>console.log(err))
    },[!refresh])
    const modify1=()=>{
        axios.put(`http://localhost:3001/user/updateuser1/${params.id}`,{firstname:fname,lastname:lname,role:role,phone:phone}).then(r=>console.log('updated')).catch(err=>console.log(err))
    }
    const delete1=()=>{
        axios.delete(`http://localhost:3001/user/deleteuser/${params.id}`).then((res)=>{
        console.log(res);
        setRefresh(!refresh)
         
        }).catch((err)=>{
          console.log(err);
          
        })
    }
    const[fname,setFname]=useState("")
    const[lname,setLname]=useState("")
    const[role,setRole]=useState("")
    const[phone,setPhone]=useState(0)
    
    



    const[inp,setInp]=useState(false)
  return (
    <div className="flex-column space-x-8">
  <div className="flex space-x-8 w-full p-20">
    {/* Left side: Display user information */}
    <div className="border p-8 mb-5 w-1/2 shadow-md rounded">
      <h1 className="border-b pb-5 text-xl font-bold">User Information</h1>
      <h1 className="border-b pb-3">User ID: {user && user.iduser}</h1>
      <h1 className="border-b pb-3">Name: {user && user.firstname}</h1>
      <h1 className="border-b pb-3">Last Name: {user && user.lastname}</h1>
      <h1 className="border-b pb-3">Email: {user && user.email}</h1>
      <h1 className="border-b pb-3">Phone: {user && user.phone}</h1>
      <h1 className="border-b pb-3" >Role: {user && user.role}</h1>

      <div className="mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => setInp(true)}
        >
          Modify
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => { delete1(); router.push('/admin/ListUsers'); }}
        >
          Delete
        </button>
      </div>
    </div>

    {/* Right side: Display input fields for modification */}
    {inp && (
      <div className="border p-8 w-1/2 shadow-md rounded">
        <h1 className="border-b pb-5 text-xl font-bold">edit User..!</h1>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            onChange={(e) => setFname(e.target.value)}
            placeholder="First Name"
            className="border p-2 rounded"
          />
          <input
            type="text"
            onChange={(e) => setLname(e.target.value)}
            placeholder="Last Name"
            className="border p-2 rounded"
          />
          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="border p-2 rounded"
          />

          <select
            name="seller"
            id=""
            onChange={(e) => setRole(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="seller">Seller</option>
            <option value="client">Client</option>
          </select>

          <button
            onClick={() => {
              modify1();
              router.push('/admin/ListUsers');
            }}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
          <button onClick={()=>{setInp(false)}}>preview</button>
        </div>
      </div>
    )}
  </div>
</div>
  )
}

export default page