'use client'
import React, { useState } from 'react';
interface Option {
  id: number;
  list: string;
}

const options: Option[] = [
  { id: 1, list: 'All Product'},
  { id: 2, list: 'All Seller'},
  { id: 3, list: 'All clients'},
  { id: 4, list: 'All Admins'},
];


const CustomSelects: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [showAllList, setShowAllList] = useState<boolean>(false);
  
    const handleOptionClick = (option: Option) => {
      setSelectedOption(option);
      setShowAllList(false);
    };
  
    const handleHover = () => {
      setShowAllList(true);
    };
  
    const handleMouseLeave = () => {
      setShowAllList(false);
    };
  
  return (
    <div className="relative w-28 " onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
      <button type="button" className=" px-4 py-2 w-28 text-left  rounded-md  hover:bg-black hover:text-white shadow-sm">
        
          <span className=''>Managing</span>
    
      </button>
      {showAllList && (
        <ul className="absolute z-10 w-full py-1 mt-1 overflow-y-auto border rounded-md shadow-lg bg-[#D0CFD0]">
          {options.map(option => (
            <li key={option.id} onClick={() => handleOptionClick(option)} className="px-4 py-2 cursor-pointer  hover:bg-black hover:text-white">
              <div className="flex items-center">
               
                  <div className="text-sm font-semibold">{option.list}</div>
                
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
)
}

export default CustomSelects