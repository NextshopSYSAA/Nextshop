"use client"
import React, { useEffect, useState } from 'react';
const NewProduct = () => { 
  const [data,setData] = useState<Product[]>()
  useEffect(()=>{ 
    
  fetch(`http://localhost:3001/saler/getallprod/${1}`,{next : {revalidate : 2}})
    .then((result)=>result.json())
    .then((data)=>{
      console.log(data,'data new product');
      setData(data)
    })
        // const jsonData = await response.json();
        // setData(jsonData);
      .catch((err)=>{
        console.log('err',err);
      })

  },[])
  if (data) {
    console.log(data, 'new data in store');
  }


  console.log(data, 'new data in store');
  console.log(data ,'neww  data in store ');
    return (
        <div>
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
                        className="px-16 py-3 text-left text-xs  font-semibold text-red-500 uppercase tracking-wider"
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
                        className="px-7 py-3 text-left text-xs  font-semibold text-red-500 uppercase tracking-wider"
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
                      <tr >
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
                            className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                          >
                            {ele.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">
                          {/* {ele.rate} */}
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
                          <button
                            // onClick={()=>{
                            //     updateProductspecific(ele.idproduct)
                            // }}
                            className=" text-red-500 hover:text-black"
                          >
                            Edit
                          </button>
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
        </div>
    );
};

export default NewProduct;