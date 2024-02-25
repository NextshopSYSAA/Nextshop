'use client'
import React, { useState } from 'react';
import axios from 'axios'
import Link from 'next/link';
import { log } from 'console';
interface Option {
  id: number;
  category: string;
  name: string;
  avatarUrl: string;
}

const options: Option[] = [
  { id: 1, category: 'Electronic', name: '', avatarUrl: 'https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309649.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1708646400&semt=ais' },
  { id: 2, category: 'Clothes', name: '', avatarUrl: 'https://images.herzindagi.info/image/2022/May/clothes-to-repeat-fashion-tips.jpg' },
  { id: 3, category: 'Furniture', name: '', avatarUrl: 'https://hogfurniture.com.ng/cdn/shop/articles/Home_collection.png?v=1657288179' },
  { id: 4, category: 'Cosmetics', name: '', avatarUrl: 'https://t4.ftcdn.net/jpg/01/24/86/35/360_F_124863579_IFn4aOOsedvSCmJpypm8ld0qT6tjL9fT.jpg' },
];


const CustomSelects: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [showAllCategories, setShowAllCategories] = useState<boolean>(false);
  






    const handleOptionClick = (option: Option) => {
      setSelectedOption(option);
      setShowAllCategories(false);
    };
  
    const handleHover = () => {
      setShowAllCategories(true);
    };
  
    const handleMouseLeave = () => {
      setShowAllCategories(false);
    };
  
  return (
    <div className="relative w-36 " onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
      <button type="button" className=" px-4 py-2 w-36 text-left  rounded-md  hover:bg-black hover:text-white shadow-sm">
        {selectedOption ? (
          <div className="flex items-center">
            <img src={selectedOption.avatarUrl} alt={selectedOption.name} className="w-8 h-8 mr-2 rounded-full" />
            {selectedOption.category}
          </div>
        ) : (
          <span className='ml-4'>Category</span>
        )}
      </button>
      {showAllCategories && (
        <ul className="absolute z-10 w-full py-1 mt-1 overflow-y-auto border rounded-md shadow-lg bg-[#D0CFD0]">
          {options.map(option => (
            <li key={option.id} onClick={() => handleOptionClick(option)} className="px-4 py-2 cursor-pointer  hover:bg-black hover:text-white">
              <div className="flex items-center">
                <img src={option.avatarUrl} alt={option.name} className="w-8 h-8 mr-2 rounded-full" />
                <div>
                  <div className="text-sm font-semibold">
                    <button ><a href={`/category/${option.category}`}>{option.category}</a> </button>
                    </div>
                  <div>{option.name}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
)
}

export default CustomSelects