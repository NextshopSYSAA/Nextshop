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
  { id: 1, category: 'Phones', name: '', avatarUrl: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Pro-Max/Blue-Titanium/Apple-iPhone-15-Pro-Max-Blue-Titanium-thumbnail.png' },
  { id: 2, category: 'Computers', name: '', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBsnNUIhpAk3JpZE6_KlQ2zIpfzrnQjGP_A&usqp=CAU' },
  { id: 3, category: 'SmartWatch', name: '', avatarUrl: 'https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/850354/1.jpg?3058' },
  { id: 4, category: 'Camera', name: '', avatarUrl: 'https://m.media-amazon.com/images/I/51T3ZomxaCL._AC_UF894,1000_QL80_.jpg' },
  { id: 5, category: 'HeadPhones', name: '', avatarUrl: 'https://m.media-amazon.com/images/I/71C-sMCpLWL._AC_UF1000,1000_QL80_.jpg' },
  { id: 6, category: 'Gaming', name: '', avatarUrl: 'https://www.tunisianet.com.tn/85554-large/console-playstation-4-hits-500-go-3-jeux.jpg' },
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