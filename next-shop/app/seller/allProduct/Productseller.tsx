'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { motion } from 'framer-motion';

const Productseller =  () => {
  // need to get the id from salah ! get all product inserted by that user 
    const router = useRouter()
    const [data,setData] = useState<Product[]>()
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/saler/getallprod/${1}`, { next: { revalidate: 2 } });
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    useEffect(()=>{
     
  
      fetchData();
    },[])
    const deleteprod = (id : any)=>{
    
        axios.delete(`http://localhost:3001/saler/deleteprod/${id}`)
        .then(()=>{
          
          router.push('/seller')
        })
        .catch((err)=>{
          console.log('err',err);
        })
    
    }
    console.log(data ,'ssss');
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
        <div >
          <div className="flex flex-col mt-4 ">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-white">
                    <tr>
                      <th
                        scope="col"
                        className="px-28 py-3 text-left text-xs  font-semibold text-blue-600  uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-7 py-3 text-left text-xs  font-semibold text-blue-600  uppercase tracking-wider"
                      >
                       Category /Description 
                      </th>
                      <th
                        scope="col"
                        className="px-10 py-3 text-left text-xs  font-semibold text-blue-600  uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-7 py-3 text-left text-xs  font-semibold text-blue-600 uppercase tracking-wider"
                      >
                        Rate
                      </th>
                      <th
                        scope="col"
                        className="px-8 py-6 text-left text-xs  font-semibold text-blue-600  uppercase tracking-wider"
                      >
                        Manging
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200  font-semibold">
                    {data?.map((ele) => (
                      <tr key={ele.idproduct}>
                        <td className="px-16 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={ele.imgproducts[0].image}
                                
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm  font-semibold text-trueGray-300">
                                {ele.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-trueGray-300">
                            {ele.category}
                          </div>
                          <div className="text-sm ">sddd</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className="px-6 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-blue-400 text-trueGray-300"
                          >
                            {ele.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">
                         rate.....
                        </td>
                        <td className=" flex px-6 py-4 whitespace-nowrap text-right text-sm  font-semibold">
                          <button
                            onClick={ ()=>{
                                  deleteprod(ele.idproduct)
                              } 
                            }
                            className=" text-black-500 hover:text-blue-600"
                          >
                            Delete
                          </button>
                          <div className="px-6 py-4 whitespace-nowrap text-sm  hover:text-blue-600 ">
                            <Link href={`/seller/${ele.idproduct}`}>
                          <button>
                            Edit
                          </button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
        </motion.div>
    );
};

export default Productseller;