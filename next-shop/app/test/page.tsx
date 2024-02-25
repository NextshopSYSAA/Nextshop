'use client'
import React, { useState } from 'react';
import Navbar from '../navbar/page';
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

const CustomSelect: React.FC = () => {
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
    <div>
        <div>
         <Navbar/>
         </div>
        <div  style={{"display":"flex","justifyContent":"space-around","gap":"4rem"}} className='ml-28 mt-20'>
       
    <section className='w-3/4'>
    <div className="grid grid-cols-4 gap-12 justify-center">
    {options.map(option => (
        <div className='bg-[#f5f5f5] w-64'>
            <div className='text-center font-semibold'>25 Products</div>
        <div>
            <img src={option.avatarUrl} alt="" className='w-full h-40'/>
        </div>
        <div className='text-center font-bold'>{option.category}</div>
        </div>
    ))}
</div>
</section>

 
</div>
<section>
   <div className="font-bold font-['Inter'] uppercase mt-10 text-4xl text-center">The best sellers</div>
   </section>
    </div>
  );
};

export default CustomSelect;
