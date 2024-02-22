import { IoMdHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CiStar } from "react-icons/ci";
// import React, { useState, useEffect } from "react";
// import axios from "axios";


function Sales() {
  return (
    <div style={{ display: "flex", marginTop: "10%", justifyContent: "center" }}>
      <div className=" flex-col justify-center items-start gap-10 inline-flex">
        <div className="justify-start items-end gap-[470px] inline-flex">
          <div className="justify-start items-end gap-[87px] flex">
            <div className="h-[103px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
                  <div className="w-5 h-10 bg-red-500 rounded"></div>
                </div>
                <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">
                  Today’s
                </div>
              </div>
              <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">
                Flash Sales
              </div>
            </div>
            {/* timer down */}
            <div className="w-[302px] h-[50px] relative">
              <div className="w-[46px] left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-[31px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">
                  Days
                </div>
                <div className="w-[46px] h-7 text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">
                  03
                </div>
              </div>
              <div className="w-[42px] h-[50px] left-[84px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-[35px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">
                  Hours
                </div>
                <div className="text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">
                  23
                </div>
              </div>
              <div className="w-[49px] h-[50px] left-[164px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-[49px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">
                  Minutes
                </div>
                <div className="w-[39px] h-7 text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">
                  19
                </div>
              </div>
              <div className="w-[51px] h-[50px] left-[251px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-[52px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">
                  Seconds
                </div>
                <div className="text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">
                  56
                </div>
              </div>
              <div className="left-[63px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-1 h-1 bg-red-200 rounded-full"></div>
                <div className="w-1 h-1 bg-red-200 rounded-full"></div>
              </div>
              <div className="left-[143px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-1 h-1 bg-red-200 rounded-full"></div>
                <div className="w-1 h-1 bg-red-200 rounded-full"></div>
              </div>
              <div className="left-[230px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-1 h-1 bg-red-200 rounded-full"></div>
                <div className="w-1 h-1 bg-red-200 rounded-full"></div>
              </div>
            </div>
          </div>
          {/* arrow left and right */}
          <div className="justify-start items-start gap-2 flex">
            <div className="w-[46px] h-[46px] relative">
              <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full"></div>
              <div className="w-6 h-6 px-1 py-[5px] left-[11px] top-[11px] absolute justify-center items-center inline-flex"></div>
            </div>
            <div className="w-[46px] h-[46px] relative">
              <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full"></div>
              <div className="w-6 h-6 pl-[3.50px] pr-1 py-[5px] left-[11px] top-[11px] absolute justify-center items-center inline-flex"></div>
            </div>
          </div>
        </div>
        <div className="w-[1308px] justify-start items-start gap-[30px] inline-flex">
          {/* the card of item */}
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
              <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
                  -35%
                </div>
              </div>
              <div className="w-[270px] h-[41px] left-0 top-[209px] absolute bg-black rounded-bl rounded-br"></div>
              <div className="left-[87px] top-[217px] absolute text-white text-base font-medium font-['Poppins'] leading-normal">
                Add To Cart
              </div>
              <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[34px] h-[34px] relative">
                  <div className="w-[34px] h-[34px]  bg-white rounded-full flex justify-center items-center">
                      <IoMdHeartEmpty />
                  </div>
                  <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex"></div>
                </div>
                <div className="w-[34px] h-[34px] relative">
                  <div className="w-[34px] h-[34px]  bg-white rounded-full flex justify-center items-center">
                      <FaEye />
                  </div>
                  <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                    <div className="w-[19.23px] h-3.5 relative"></div>
                  </div>
                </div>
              </div>
              <div className="w-[190px] h-[180px] pt-10 pb-[39px] left-[40px] top-[15px] absolute justify-center items-center inline-flex">
                <img
                  className="w-[191px] h-[101px]"
                  src="https://m.media-amazon.com/images/I/61RVLvNTxnL._AC_UF894,1000_QL80_.jpg"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                AK-900 Wired Keyboard
              </div>
              <div className="justify-start items-start gap-3 inline-flex">
                <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">
                  $960
                </div>
                <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">
                  $1160
                </div>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="justify-start items-start flex"><CiStar /> <CiStar /><CiStar /><CiStar /></div>
                <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">
                  (75)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sales;