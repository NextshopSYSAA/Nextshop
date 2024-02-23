"use client";
import { motion } from "framer-motion";
import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { FaHeart } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
// import Productseller from '../../allProduct/Productseller';
// import NewProduct from '../NewProduct';

const NavBar = () => {
  return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
    <div className="h-[38px] w-[1100px] flex justify-between items-center mx-auto mt-10">
      <div className="h-[50px] w-[550px] flex justify-between items-center">
        <h1 className="font-bold  ">Exclusive</h1>
          <ul className="w-[450px] flex justify-between items-center  text-sm/[16px] font-semibold  ">
          <motion.circle cx={500} animate={{ cx: [null, 100] }} /><li>
              <button>Home</button>
            </li>
            <motion.circle/>
            <motion.circle cx={500} animate={{ cx: [null, 100] }} />
            <li>
              <Link href={"/seller"}>
                <button className="text-red-500">My Zone</button>
              </Link>
            </li>
            <motion.circle/>
            <motion.circle cx={500} animate={{ cx: [null, 100] }} />
            <li>
              <Link href={"/seller/addProduct"}>
                <button className="text-red-500">Add Product</button>
              </Link>
            </li>
            <motion.circle/>
            <motion.circle cx={500} animate={{ cx: [null, 100] }} />
            <li>
              <Link href={"/seller/allProduct"}>
                <button className="text-red-500">ALL Product</button>
              </Link>
            </li>
            <motion.circle/>
            <motion.circle cx={500} animate={{ cx: [null, 100] }} />
            <li>
              <button>Log out</button>
            </li>
            <motion.circle/>
          </ul>
      </div>
      <div className="flex justify-between items-center w-[395px]">
        <div className="search-box w-[243px] flex justify-between items-center bg-[#f5f5f5] p-4">
          <input
            className="w-[153px] bg-[#f5f5f5] text-xs    "
            type="text"
            // onChange={(e)=>{
              //   setSearch(e.target.value);
              // }}
              />
          <CiSearch />
        </div>
        <button>
          <FaHeart />
        </button>
        <button>
          <FaCcMastercard className="w-14" />
        </button>
        <button>
          <RxAvatar />
        </button>
      </div>
    </div>
              </motion.div>
  );
};

export default NavBar;
