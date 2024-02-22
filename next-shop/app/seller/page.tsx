import React from 'react';
import Productseller from './allProduct/Productseller';
import SellerCard from './components/SellerCard';
import NewProduct from './components/NewProduct';
import axios from 'axios';
// import ThemeSwitcher from './components/ThemeSwitcher';

const page = () => {
    return (
        <div>
        <div className="flex flex-col bg-white">
        </div>
        <div className=" mt-10 ml-31  w-full h-full">
        
          <div className="w-full  ">
            <div className="flex w-full">
              {/* <ThemeSwitcher/> */}
              <div className="w-full h-full font-semibold  mt-8">
                <SellerCard/>
                <p className="mb-7 ml-40">
                  Welcome! <span className="text-red-500">What's new here </span>
                </p>
                {/* <div className="flex flex-col  w-10/12 mb-3">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-white">
                            <tr>
                              {[
                                "Name",
                                "Category /Description",
                                "Status",
                                "Rate",
                              ].map((heading, index) => (
                                <th
                                  key={index}
                                  scope="col"
                                  className={`px-${
                                    index === 0 ? 16 : 14
                                  } py-3 text-left text-xs font-semibold text-red-500 uppercase tracking-wider`}
                                >
                                  {heading}
                                </th>
                              ))}
                              <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200 font-semibold">
                            {data?.map((data) => (
                              <tr key={data?.idproduct}>
                                <td className="px-16 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                      <img
                                        className="h-10 w-10 rounded-full"
                                        src={data.imgurlmain}
                                        alt=""
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-semibold text-gray-900">
                                        {data.name}
                                      </div>
                                      <div className="text-sm">{data.email}</div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-16 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {data.category}
                                  </div>
                                  <div className="text-sm">
                                    {data.description}
                                  </div>
                                </td>
                                <td className="px-16 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    {data.status}
                                  </span>
                                </td>
                                <td className="px-16 py-4 whitespace-nowrap text-sm">
                                  {data.rate}
                                </td>
                                <td className="flex px-6 py-4 whitespace-nowrap text-right text-sm font-semibold"></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div> */}
                <NewProduct/>
              </div>
            </div>
          </div>
        </div>{" "}
        
      </div>
    );
};

export default page;