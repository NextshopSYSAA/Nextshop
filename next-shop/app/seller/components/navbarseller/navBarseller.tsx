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
import { BiSearch } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { deleteCookie } from 'cookies-next';
import Link from "next/link";
import { useRouter } from "next/navigation";
// import Productseller from '../../allProduct/Productseller';
// import NewProduct from '../NewProduct';

const NavBar = () => {
  const router = useRouter()
  const navigate=(path:string)=>{
    router.push(path)
    }
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
                <button className="text-blue-600 ">My Zone</button>
              </Link>
            </li>
            <motion.circle/>
            <motion.circle cx={500} animate={{ cx: [null, 100] }} />
            <li>
              <Link href={"/seller/addProduct"}>
                <button className="text-blue-600 ">Add Product</button>
              </Link>
            </li>
            <motion.circle/>
            <motion.circle cx={500} animate={{ cx: [null, 100] }} />
            <li>
              <Link href={"/seller/allProduct"}>
                <button className="text-blue-600 ">ALL Product</button>
              </Link>
            </li>
            <motion.circle/>
            <motion.circle cx={500} animate={{ cx: [null, 100] }} />
            <li>
              <button onClick={()=>{
                deleteCookie('token')
                navigate('/Sign/signIn')
              }}>Log out</button>
            </li>
            <motion.circle/>
          </ul>
      </div>
      <div className="flex justify-between items-center w-[395px]">
        <div className="search-box w-[243px] flex justify-between items-center bg-blue-400 rounded-full p-4">
          <input
            className="w-[153px]  bg-blue-400 text-xs    "
            type="text"
            // onChange={(e)=>{
              //   setSearch(e.target.value);
              // }}
              />
          <BiSearch color="white" />
        </div>
        <button>
          <FaHeart  size="30PX" color="#3066BE"/>
        </button>
        <button>
          <FaCcMastercard className="w-14" color="#3066BE" size="1,2rem" />
        </button>
      </div>
    </div>
              </motion.div>
  );
};

export default NavBar;
