'use client'
import React from 'react';
import {useRouter } from 'next/navigation'
import Link from 'next/link';

const Productseller = async () => {
  // need to get the id from salah !
    const router = useRouter()
    const result  = await fetch(`http://localhost:3001/saler/getallprod/${1}` , {next : {revalidate : 10 }})
    const data : Product[]= await (result.json());
    console.log(data ,'ssss');
    const updateProductspecific = (id : number) =>{
      console.log("test");
      
      router.push(`/seller/${id}`)
    } 
    return (
        <div>
          <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-white">
                    <tr>
                      <th
                        scope="col"
                        className="px-28 py-3 text-left text-xs  font-semibold text-red-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-7 py-3 text-left text-xs  font-semibold text-red-500 uppercase tracking-wider"
                      >
                       Category /Description 
                      </th>
                      <th
                        scope="col"
                        className="px-10 py-3 text-left text-xs  font-semibold text-red-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-7 py-3 text-left text-xs  font-semibold text-red-500 uppercase tracking-wider"
                      >
                        Rate
                      </th>
                      <th
                        scope="col"
                        className="px-8 py-6 text-left text-xs  font-semibold text-red-500 uppercase tracking-wider"
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
                              <div className="text-sm  font-semibold text-gray-900">
                                {ele.name}
                              </div>
                              <div className="text-sm ">email</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {ele.category}
                          </div>
                          <div className="text-sm ">sddd</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className="px-6 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                          >
                            {ele.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">
                         rate.....
                        </td>
                        <td className=" flex px-6 py-4 whitespace-nowrap text-right text-sm  font-semibold">
                          <button
                            // onClick={()=>{
                            //     deleteProductspecific(ele.idproduct)
                            // }}
                            className=" text-black-500 hover:text-red-400"
                          >
                            Delete
                          </button>
                          <div className="ml-6">
                            <Link href={`/seller/${ele.idproduct}`}>
                          <button
                            // onClick={()=>{
                            //   updateProductspecific(ele.idproduct)
                            // }}
                            // className=" text-red-500 hover:text-black"
                            >
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
    );
};

export default Productseller;