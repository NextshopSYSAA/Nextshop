'use client'
import React, { useEffect,useState } from 'react'
import axios from 'axios'
import MinBar from '@/app/seller/components/MinBar/MinBar';
import Navbar from '@/app/admin/navbar/page';

interface Product {
  idproduct: number;
  name: string;
  description: string;
  initalprice: number;
  category: string;
  imgproducts: imgproducts[],
  quantity: number;
}


const page = (props:any) => {
  const [category,setCategory]=useState<Product[]>([])

useEffect(
  ()=>{
    async function fetch(id:string) {
     
     await   axios.get(`http://localhost:3001/saler/productcategory/${id}`).then((res)=>{
          setCategory(res.data)
          console.log(res.data);
          
        })
        .catch((err)=>{console.log(err);
        })
      
      }
      
    fetch(props.params.categorys)
  },[]
)
console.log(category);


  return (
    <div>
      <Navbar/>
    <div className="p-4">
    <h1 className="text-3xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 pb-2">Products</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {category?.map((e) => (
        <div key={e.idproduct} className="bg-white rounded-lg ring-1 ring-gray-300 overflow-hidden relative">
       
          <img
            className="w-full h-60 object-cover rounded-t-lg"
            src={e.imgproducts[0]?.image}
            alt="Product Image"
          />
          <div className="p-4 flex flex-col justify-center">
           
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">{e.name}</h2>
            <p className="text-base text-gray-600 mb-4 text-center">{e.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-lg text-blue-500 ">${e.initalprice}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
  )
}

export default page
