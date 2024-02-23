"use client";

import React from 'react';
import { IconContext } from 'react-icons';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";
const CustomCard = ({ icon, title }) => {
  return (
    <div className="w-[170px] h-[145px] pl-[51px] pr-[52px] pt-[25px] text-black text-base font-normal font-['Poppins'] leading-normal pb-6 bg-neutral-100 hover:bg-[#3066BE]  hover:text-[#D0CFD0] rounded shadow flex-col justify-center items-center gap-4 inline-flex">
      <div className="w-14 h-14 relative flex-col justify-center  gap-10 flex">
        <IconContext.Provider value={{ size: "3em" }}>
          {icon}
        </IconContext.Provider>
      </div>
      {title}
    </div>
  );
};

const MyComponent = () => {
  return (
    <div className='justify-center  gap-10 flex mt-12'>
      <CustomCard icon={<IoPhonePortraitOutline />} title="Phones" />
      <CustomCard icon={<HiOutlineComputerDesktop />} title="Computers" />
      <CustomCard icon={<BsSmartwatch />} title="SmartWatch" />
      <CustomCard icon={<FaHeadphones />} title="HeadPhones" />
      <CustomCard icon={<SiYoutubegaming />} title="Gaming" />
    </div>
  );
};

export default MyComponent;