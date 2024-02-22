
'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

function Nav() {
  return (
    <>
      <div style={{textAlign:"center"}} className="w-full h-12  pl-96 pr-[136px] py-3 bg-black justify-center items-center inline-flex">
        <div className="justify-start items-start gap-[231px] inline-flex">
          <div className="justify-start items-center gap-2 flex">
            <div className="w-[474px] h-[18px]  text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </div>
            <div className="text-center text-neutral-50 text-sm font-semibold font-['Poppins'] underline leading-normal">
              ShopNow
            </div>
          </div>
          <div className="justify-center items-center gap-[5px] flex">
            <div className="text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">
              English
            </div>
            <div className="w-6 h-6 pl-1.5 pr-[5.27px] pt-2 pb-[8.22px] justify-center items-center flex"></div>
          </div>
        </div>
      </div>
      {/* THE NAv bar */}
      <div  style={{marginTop:"3%" ,width:"100%"}} className="  justify-center items-center gap-[9.25rem] inline-flex">
        <div className="justify-center items-start gap-[11.8rem] flex">
          <div className="w-[7.3rem] h-6 justify-center items-center flex">
            <div className="text-black text-2xl font-bold font-['Inter'] leading-normal tracking-wide">
              Exclusive
            </div>
          </div>
          <div className="justify-start items-start gap-12 flex">
            <div className="flex-col justify-center items-center inline-flex">
              <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
               <a href='/'>Home</a> 
              </div>
              <div className="w-12 h-[0px] opacity-50 justify-center items-center inline-flex">
                <div className="w-12 h-[0px] border border-black"></div>
              </div>
            </div>
            <div className="w-[66px] h-6 justify-center items-center flex">
              <p className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
                <a href='/'> Contact</a>
              </p>
            </div>
            <div className="w-12 h-6 justify-center items-center flex">
              <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
                <a href='/'>About</a>
              </div>
            </div>
            <div className="w-[61px] h-6 justify-center items-center flex">
              <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
                <a href=''>Sign Up</a>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center gap-6 flex">
          <div className="pl-5 pr-3 py-[7px] bg-neutral-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="justify-center items-center gap-[34px] inline-flex">
              <input className="opacity-50 text-black text-xs font-normal font-['Poppins'] leading-[18px] pl-5 pr-3 py-[7px] bg-neutral-100 rounded flex-col justify-center items-center gap-2.5 inline-flex" type="text" id="lname" name="lname" placeholder="What are you looking for?" />
              <button>
                {/* <box-icon name='search'></box-icon> */}
              </button>
            </div>
          </div>
          <div className="justify-center items-center gap-4 flex">
            {/* <a href='/wishList'> <box-icon name='heart' ></box-icon> </a> */}
            {/* <a href='/cart'>   <box-icon name='cart' ></box-icon></a> */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  {/* <box-icon name='user' ></box-icon> */}
                  <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;

