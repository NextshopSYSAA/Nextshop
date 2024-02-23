import React from "react";
import Form1 from "./Form1";
import { motion } from "framer-motion";
const page = () => {
  return (
    <div>
      <div className="h-full w-full">
        <div></div>
        <div className="w-full h-full  font-semibold mt-8 ">
          <p className="ml-36">
            Welcome! <span className="text-red-500  ">MR Amine</span>
          </p>
        </div>

        <div className="flex items-center justify-center p-12 text-center font-semibold ml-36 mt-3">
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
          </motion.div> */}
            <Form1 />
        </div>
      </div>
    </div>
  );
};

export default page;
