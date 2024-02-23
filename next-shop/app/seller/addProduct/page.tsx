import React from 'react';
import Form1 from './Form1';
const page = () => {
    return (
        <div>
            <div className="h-full w-full">
        <div>
        </div>
        <div  className="w-full h-full  font-semibold mt-8 ">
          <p className='ml-36'>
            Welcome! <span className="text-red-500  ">MR Amine</span>
          </p>
        </div>
  
        <div className="flex items-center justify-center p-12 text-center font-semibold ml-36 mt-3">
            <Form1/>
          
        </div>
        <div>
          {/* <Fotter /> */}
        </div>
      </div>
        </div>
    );
};

export default page;