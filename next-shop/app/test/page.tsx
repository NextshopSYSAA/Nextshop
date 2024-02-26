'use client'
import React, { useState } from 'react';
import Navbar from '../navbar/page';
interface Option {
  id: number;
  category: string;
  Quantity: string;
  avatarUrl: string;
}

const options: Option[] = [
  { id: 1, category: 'Phones', Quantity: '5', avatarUrl: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Pro-Max/Blue-Titanium/Apple-iPhone-15-Pro-Max-Blue-Titanium-thumbnail.png' },
  { id: 2, category: 'Computers', Quantity: '14', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBsnNUIhpAk3JpZE6_KlQ2zIpfzrnQjGP_A&usqp=CAU' },
  { id: 3, category: 'SmartWatch', Quantity: '20', avatarUrl: 'https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/850354/1.jpg?3058' },
  { id: 4, category: 'Camera', Quantity: '17', avatarUrl: 'https://m.media-amazon.com/images/I/51T3ZomxaCL._AC_UF894,1000_QL80_.jpg' },
  { id: 5, category: 'HeadPhones', Quantity: '28', avatarUrl: 'https://m.media-amazon.com/images/I/71C-sMCpLWL._AC_UF1000,1000_QL80_.jpg' },
  { id: 6, category: 'Gaming', Quantity: '9', avatarUrl: 'https://www.tunisianet.com.tn/85554-large/console-playstation-4-hits-500-go-3-jeux.jpg' },
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
         <section>
   <div className="font-bold font-['Inter'] uppercase mt-20 text-4xl text-center text-blue-600 ">All Products</div>
   </section>
        <div  style={{"display":"flex","justifyContent":"space-around","gap":"4rem"}} className='ml-28 mt-20'>
       
    <section className='w-3/4'>
    <div className="grid grid-cols-4 gap-12 justify-center">
    {options.map(option => (
        <div className='bg-[#f5f5f5] w-64'>
            <div className='text-center font-semibold text-[#241C24]'>{option.Quantity} Product</div>
        <div>
            <img src={option.avatarUrl} alt="" className='w-full h-52'/>
        </div>
        <div className='text-center font-bold text-[#241C24] mt-7'>{option.category}</div>
        </div>
    ))}
</div>
</section>

 
</div>
    </div>
  );
};

export default CustomSelect;
