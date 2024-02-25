import React from 'react';
import Productseller from './allProduct/Productseller';
import SellerCard from './components/SellerCard';
import axios from 'axios';
import NewProduct from './components/NewProduct';
const page = () => {
    return (
        <div>
        <div className="flex flex-col bg-white">
        </div>
        <div className=" mt-10 ml-31  w-full h-full">
        
          <div className="w-full  ">
            <div className="flex w-full">
              <div className="w-full h-full font-semibold  mt-8">
                <SellerCard/>
                <p className="mb-7 ml-40">
                  Welcome! <span className="text-blue-400">What's new here </span>
                </p>
                <NewProduct/>
              </div>
            </div>
          </div>
        </div>    
      </div>
    );
};

export default page;