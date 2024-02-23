"use client"
import React from 'react';
const SellerCard = async () => {
    const resultuser = await fetch(`http://localhost:3001/user/getuser/${1}` , {next : {revalidate : 20 }})
    const data = await resultuser.json()
    console.log(data , 'info user ');
    
    // const result = fetch(`http://localhost:3001/user/updateuser/${1}`)

    return (
        <div>
              <div className=" text-center mt-4 w-full items-center h-full flex justify-center">
            <div className=" items-center bg-white shadow-lg rounded-2xl w-96 ">
              <img
                alt="profil"
                src="https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8fDA%3D"
                className="w-full mb-4 rounded-t-lg h-28"
              />
              <div className="flex flex-col items-center justify-center p-4 -mt-16">
                <a  className="relative block">
                  <img
                    alt="profil"
                    src="https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8fDA%3D"
                    className="mx-auto object-cover rounded-full h-16 w-16  border-2 border-white dark:border-gray-800"
                  />
                </a>
                <p className="mt-2 text-xl font-medium text-gray-800 ">{data.firstname}</p>
                <p className="mb-4 text-xs text-gray-400">{data.email}</p>
                <p className="p-2 px-4 text-xs text-white bg-black rounded-full">
                  saller
                </p>
                <div className="w-full p-2 mt-4 rounded-lg">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <p className="flex flex-col">
                      Your Products
                      <span className="font-bold text-black ">
                        {/* {prodseller.length} */}
                      </span>
                    </p>
                    <p className="flex flex-col">
                      top Product
                      <span className="font-bold text-black ">
                        {/* {datatoprate.length} */}
                      </span>
                    </p>
                    <p className="flex flex-col">
                      Rating
                      <span className="font-bold text-black ">calculating ..</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default SellerCard;