import React from "react";
import Form1 from "./Form1";
import { motion } from "framer-motion";
const page = () => {
  return (
    <div>
      <div className="h-full w-full">
        
        <div className="w-full h-full  font-semibold mt-8 ">
          <p className="ml-36 ">
            Welcome! <span className="text-blue-400  ">MR Amine</span>
          </p>
        </div>

        <div className="  flex items-center justify-center p-12 text-center font-semibold ml-36 mt-3">

            <Form1 />
        </div>
      </div>
    </div>
  );
};

export default page;
