'use client'
import React, { useEffect,useState } from 'react'
import axios from 'axios'

interface Product {
  idproduct: number;
  name: string;
  description: string;
  initalprice: number;
  category: string;
  imgproducts: { id: number, image: string }[];
  quantity: number;

  promo: number;
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


  return (
    <div className="p-4">
    <h1 className="text-3xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 pb-2">Products</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {category.map((product: Product, index: number) => (
        <div key={product.idproduct} className="bg-white rounded-lg ring-1 ring-gray-300 overflow-hidden relative">
       
          <img
            className="w-full h-60 w-60  object-cover rounded-t-lg"
            src={product.imgproducts}
            alt="Product Image"
          />
          <div className="p-4 flex flex-col justify-center">
           
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">{product.name}</h2>
            <p className="text-base text-gray-600 mb-4 text-center">{product.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-lg text-gray-500 line-through mb-2">${product.initalprice}</span>
              
              </div>
              <button className="bg-[#d0cfd0] text-white px-3 py-2 rounded-md hover:bg-[#241c24] transition duration-300 text-sm" onClick={() => addToCart(product.idproduct)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default page
