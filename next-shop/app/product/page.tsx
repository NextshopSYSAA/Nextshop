"use client"

// Import necessary types
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FiHeart, FiRefreshCcw } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaTruck } from "react-icons/fa";

interface Product {
  idproduct: number;
  name: string;
  initalprice: number;
  category: string;
  imgproducts: { image: string }[];
  promo: number;
}

const Detailsproduct = () => {
  const [count, setCount] = useState(1);
  const [size, setSize] = useState<string>("M"); // Ensure state type
  const [product, setProduct] = useState<Product>(); // Initial null state
  const [wish, setWish] = useState(false);

  useEffect(() => {
    const aymen = async ()=>{
      try {
        const respponse =  await axios.get(
          `http://localhost:3001/saler/getproduct/1`
        );
        console.log(respponse.data)
        setProduct(respponse.data)
        console.log('amine')
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    aymen()
  }, []);
  console.log(product?.imgproducts)

  // Extract and display image links (safely handling potential null values)
  // const imageLinks = product?.imgproducts?.map((imageObject) => imageObject.image);

  return (
    <div>
      {/* Display product details here */}
      {/* {imageLinks && (
        <div>
          {imageLinks.map((imageLink, index) => (
            <img key={index} src={imageLink} alt={`Product image ${index + 1}`} />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Detailsproduct;

    
    
  //   return (
  //     <div className="w-1/3 h-[450px] ml-4">
  //     <div className="flex-col">
  //       <div className=" flex-col text-black text-xl font-semibold font-Inter'] leading-normal-wide">
  //         <div>{product.name}</div>{" "}
  //         <div className="mt-2">${product.initalprice}.00</div>
  //       </div>
  //       <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
  //       <div className="flex flex-col mt-4">
  //         <div className="flex justify-between">
  //           <div className="text-black text-lg font-normal font-['Poppins'] leading-[21px]">
  //             ({product.rate} )
  //             Reviews
  //           </div>
  //           <div className="text-green-500 text-sm font-normal font-['Poppins'] leading-[21px]">
  //             In Stock
  //           </div>
  //         </div>
  //         <div className="text-black  text-xl font-normal font-['Poppins'] leading-[21px] mt-2">
  //           {product.Descriptin}
  //         </div>
  //       </div>
  //       <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
  //       <div className="flex justify-between mt-4">
  //         <div className="text-black text-xl font-normal font-['Inter'] leading-tight tracking-wide">
  //           Size:
  //         </div>
  //         <div className="flex">
  //           <div
  //             className={`w-8 h-8 flex justify-center items-center  border border-black border-opacity-50 rounded mr-2 ${
  //               size === "XS" ? "bg-[#3066BE]" : ""
  //             }`}
  //             onClick={() => {
  //               setSize("XS");
  //             }}
  //           >
  //             <div
  //               className={`w-3 h-5 mr-1 text-sm font-medium font-['Poppins']  ${
  //                 size === "XS" ? "text-white" : "text-black"
  //               }`}
  //               >
  //               <button>XS</button>
  //             </div>
  //           </div>

  //           <div
  //             className={`w-8 h-8 flex justify-center items-center  border border-black border-opacity-50 rounded mr-2 ${
  //               size === "XL" ? "bg-[#3066BE]" : ""
  //             }`}
  //             onClick={() => {
  //               setSize("XL");
  //             }}
  //             >
  //             <div
  //               className={`w-3 h-5 mr-1 text-sm font-medium font-['Poppins']  ${
  //                 size === "XL" ? "text-white" : "text-black"
  //               }`}
  //               >
  //               <button>XL</button>
  //             </div>
  //           </div>

  //           <div
  //             className={`w-8 h-8 flex justify-center items-center  border border-black border-opacity-50 rounded mr-2 ${
  //               size === "S" ? "bg-[#3066BE]" : ""
  //             }`}
  //             onClick={() => {
  //               setSize("S");
  //             }}
  //             >
  //             <div
  //               className={`w-3 h-5 mr-1 text-sm font-medium font-['Poppins']  ${
  //                 size === "S" ? "text-white" : "text-black"
  //               }`}
  //               >
  //               <button>S</button>
  //             </div>
  //           </div>

  //           <div
  //             className={`w-8 h-8 flex justify-center items-center  border border-black border-opacity-50 rounded mr-2 ${
  //               size === "M" ? "bg-[#3066BE]" : ""
  //             }`}
  //             onClick={() => {
  //               setSize("M");
  //             }}
  //             >
  //             <div
  //               className={`w-3 h-5 mr-1 text-sm font-medium font-['Poppins']  ${
  //                 size === "M" ? "text-white" : "text-black"
  //               }`}
  //               >
  //               <button>M</button>
  //             </div>
  //           </div>
  //           <div
  //             className={`w-8 h-8 flex justify-center items-center  border border-black border-opacity-50 rounded mr-2 ${
  //               size === "L" ? "bg-[#3066BE]" : ""
  //             }`}
  //             onClick={() => {
  //               setSize("L");
  //             }}
  //           >
  //             <div
  //               className={`w-3 h-5 mr-1 text-sm font-medium font-['Poppins']  ${
  //                 size === "L" ? "text-white" : "text-black"
  //               }`}
  //               >
  //               <button>L</button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
  //       <div className="flex mt-4">
  //         <div className="w-15 h-11 relative rounded-tl rounded-bl border border-black border-opacity-50 flex items-center">
  //           <div
  //             className="w-[41px] h-9 flex justify-center items-center rounded-tr rounded-br"
  //             onClick={() => {
  //               if (count > 0) {
  //                 setCount(count - 1);
  //               }
  //             }}
  //             >
  //             <button className=" text-black text-2xl">-</button>
  //           </div>
  //         </div>
  //         <div className="w-[100px] h-11 flex border-t border-b border-black border-opacity-50 justify-center  items-center">
  //           <p className="text-center">{count}</p>
  //         </div>
  //         <div
  //           className="w-[41px] h-11 flex justify-center items-center bg-[#3066BE] rounded-tr rounded-br"
  //           onClick={() => {
  //             setCount(count + 1);
  //           }}
  //           >
  //           <button className=" text-white ">+</button>
  //         </div>
  //         <div className="w-[165px] h-11 ml-5 bg-[#3066BE] rounded justify-center items-center gap-2.5 inline-flex">
  //           <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
  //             <button
  //               onClick={() => {
  //                 //   add();
  //                 //   navigate(`/${id1}`)
  //               }}
  //               >
  //               Buy Now
  //             </button>
  //           </div>
  //         </div>
  //         {/* <button onClick={addwishlist}>
  //             <FiHeart className={wish ? "text-[#3066BE] w-28  h-8" : "text-black w-28  h-8"} />
  //           </button> */}
  //         <IoMdHeartEmpty
  //           className={
  //             wish ? "text-[#3066BE] w-28  h-8" : "text-black w-28  h-8"
  //           }
  //           />
  //       </div>
  //     </div>
  //     <div className="w-full rounded border flex-col border-black border-opacity-50 mt-8">
  //       <div className="p-2">
  //         <div className="flex justify-start items-center gap-4">
  //           <div className="">
  //             <FaTruck size="2em" />
  //           </div>
  //           <div className="p-2 flex-col">
  //             <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
  //               Free Delivery
  //             </div>
  //             <div className="text-black text-xs font-medium font-['Poppins'] underline leading-none">
  //               Enter your postal code for Delivery Availability
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="border border-black opacity-50"></div>
  //       <div className="p-2">
  //         <div className="flex justify-start items-center gap-4">
  //           <div className="">
  //             <FiRefreshCcw size="2em" />
  //           </div>
  //           <div className=" p-2 flex-col">
  //             <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
  //               Return Delivery
  //             </div>
  //             <div>
  //               <span className="text-black text-xs font-medium font-['Poppins'] leading-none">
  //                 Free 30 Days Delivery Returns.
  //               </span>
  //               <span className="text-black text-xs font-medium font-['Poppins'] underline leading-none">
  //                 Details
  //               </span>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
// };



    //   const addwishlist = async () => {
  //     const ob={
  //       user_iduser:id1,
  //       product_idproduct:1
  //     }
  //     if (wish === false) {
  //      await axios.post(`http://localhost:8000/cart/addwhis`,ob).then(() => {
  //     }).catch((err)=>console.log(err))
  //     }
  //     else {
  //     await axios.delete(`http://localhost:8000/cart/delwhis`,{ data: ob }).then(() => {
  //     }).catch((err)=>console.log(err))
  //     }
  //     setWish((prev) => !prev);
  //   };
  //   const add = async () => {
  //     try {
  //       const cartt = await axios.get(`http://localhost:8000/cart/getcart/${id1}`);
  //       if (cartt.data.length > 0) {
  //         const objj = {
  //           quantitycp: count,
  //           cart_idcart: cartt.data[0].idcart,
  //           product_idproduct:id2,
  //         };
  //         await axios.post("http://localhost:8000/cart/carthasp", objj);
  //       } else {
  //         const obj = {
  //           status: "encours",
  //           user_iduser: id1,
  //         };
  //         const xt = await axios.post("http://localhost:8000/cart/createcart", obj);
  //         console.log(xt.data);
  //         const ob = {
  //           quantitycp: count,
  //           cart_idcart: xt.data.idcart,
  //           product_idproduct: id2,
  //         };
  //         await axios.post("http://localhost:8000/cart/carthasp", ob);
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };