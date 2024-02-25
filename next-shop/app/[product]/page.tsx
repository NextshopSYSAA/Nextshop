"use client";

// Import necessary types
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FiHeart, FiRefreshCcw } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaTruck } from "react-icons/fa";

import { getCookies } from "cookies-next";
import { jwtDecode } from "jwt-decode";

interface Product {
  idproduct: number;
  name: string;
  initalprice: number;
  category: string;
  imgproducts: { image: string }[];
  promo: number;
}

const Detailsproduct = ({ params }: { params: any }) => {
  const id: number = parseInt(params.product);
  console.log(params.product)
  console.log(id)

  const [count, setCount] = useState(1);
  const [size, setSize] = useState<string>("M"); // Ensure state type
  const [product, setProduct] = useState<Product>(); // Initial null state
  const [wish, setWish] = useState(false);
  const [photo, setPhoto] = useState<imgproducts[]>([]);
  const token : token = getCookies('token')
  const dec  : dectoken = jwtDecode(token.token) 

  useEffect(() => {
    const aymen = async () => {
      try {
        const respponse = await fetch(
          `http://localhost:3001/saler/getproduct/${id}`
        )
          .then((result) => result.json())
          .then((data) => {
            console.log(data, "data new product");
            setProduct(data);
            setPhoto(data.imgproducts);
          });
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    aymen();
  }, []);

  console.log(product?.imgproducts[2].image);
  console.log(photo[0]);
  const firstimg =photo[0]?.image
  console.log(firstimg)
  const swap = (index) => {
    if (index !== 0) {
      const cl = photo[index];
      const newimg = [...photo];
      newimg[index] = newimg[0];
      newimg[0] = cl;
      setPhoto(newimg);
    }
  };

//yessine s work
const addtocart = async (id: number) => {
  const response = await fetch(`http://localhost:3001/panier/addtoCart/${dec.id}/${id}`, {
    method: 'POST',
  });
  const data = await response.json();
  console.log(data);
};
const addtowishlist= async (id: number) => {
  const response = await fetch(`http://localhost:3001/wishlist/add/${id}/${dec.id}`, {
    method: 'POST',
  });

  const data = await response.json();
  console.log(data);
};
//

  return (
    <div className="flex w-full h-[600px]  flex-row items-center">
      <div className="w-1/3 h-[450px] ml-4">
        <div className="flex justify-center items-center w-1/2  mt-12">
          <div className="flex flex-col justify-between  mt-4 w-1/6">
            {photo?.slice(1).map((ele, index) => {
              return (
                <div className="w-full m-2" key={index}>
                  <img
                    src={ele.image}
                    alt={`Small ${index}`}
                    className="p-2 hover:scale-125"
                    onClick={() => swap(index + 1)}
                  />
                </div>
              );
            })}
          </div>
          <div className="w-full h-full rounded-md">
            <div className=" w-4/5   bg-center">
              <img
                src={firstimg}
                className=" w-full h-full  hover:scale-105 mt-4 hover:mr-4 ml-5"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex-col">
          <div className=" flex-col text-black text-xl font-semibold font-Inter'] leading-normal-wide">
            <div>{product?.name}</div>{" "}
            <div className="mt-2">${product?.initalprice}.00</div>
          </div>
          <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
          <div className="flex flex-col mt-4">
            <div className="flex justify-between">
              <div className="text-black text-lg font-normal font-['Poppins'] leading-[21px]">
                ({product?.rate} ) Reviews
              </div>
              <div className="text-green-500 text-sm font-normal font-['Poppins'] leading-[21px]">
                In Stock
              </div>
            </div>
            <div className="text-black  text-xl font-normal font-['Poppins'] leading-[21px] mt-2">
              {product?.Descriptin}
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
          <div className="flex justify-between mt-4">
            <div className="text-black text-xl font-normal font-['Inter'] leading-tight tracking-wide">
              Size:
            </div>
            <div className="flex">
              <div
                className={`w-8 h-8 flex justify-center items-center  border border-black border-opacity-50 rounded mr-2 ${
                  size === "XS" ? "bg-[#3066BE]" : ""
                }`}
                onClick={() => {
                  setSize("XS");
                }}
              >
                <div
                  className={`w-3 h-5 mr-1 text-sm font-medium font-['Poppins']  ${
                    size === "XS" ? "text-white" : "text-black"
                  }`}
                >
                  <button>XS</button>
                </div>
              </div>

              <div
                className={`w-8 h-8 flex justify-center items-center  border border-black border-opacity-50 rounded mr-2 ${
                  size === "XL" ? "bg-[#3066BE]" : ""
                }`}
                onClick={() => {
                  setSize("XL");
                }}
              >
                <div
                  className={`w-3 h-5 mr-1 text-sm font-medium font-['Poppins']  ${
                    size === "XL" ? "text-white" : "text-black"
                  }`}
                >
                  <button>XL</button>
                </div>
              </div>

              <div
                className={`w-8 h-8 flex justify-center items-center  border border-black border-opacity-50 rounded mr-2 ${
                  size === "S" ? "bg-[#3066BE]" : ""
                }`}
                onClick={() => {
                  setSize("S");
                }}
              >
                <div
                  className={`w-3 h-5 mr-1 text-sm font-medium font-['Poppins']  ${
                    size === "S" ? "text-white" : "text-black"
                  }`}
                >
                  <button>S</button>
                </div>
              </div>

              <div
                className={`w-8 h-8 flex justify-center items-center  border border-black border-opacity-50 rounded mr-2 ${
                  size === "M" ? "bg-[#3066BE]" : ""
                }`}
                onClick={() => {
                  setSize("M");
                }}
              >
                <div
                  className={`w-3 h-5 mr-1 text-sm font-medium font-['Poppins']  ${
                    size === "M" ? "text-white" : "text-black"
                  }`}
                >
                  <button>M</button>
                </div>
              </div>
              <div
                className={`w-8 h-8 flex justify-center items-center  border border-black border-opacity-50 rounded mr-2 ${
                  size === "L" ? "bg-[#3066BE]" : ""
                }`}
                onClick={() => {
                  setSize("L");
                }}
              >
                <div
                  className={`w-3 h-5 mr-1 text-sm font-medium font-['Poppins']  ${
                    size === "L" ? "text-white" : "text-black"
                  }`}
                >
                  <button>L</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
          <div className="flex mt-4">
            <div className="w-15 h-11 relative rounded-tl rounded-bl border border-black border-opacity-50 flex items-center">
              <div
                className="w-[41px] h-9 flex justify-center items-center rounded-tr rounded-br"
                onClick={() => {
                  if (count > 0) {
                    setCount(count - 1);
                  }
                }}
              >
                <button className=" text-black text-2xl">-</button>
              </div>
            </div>
            <div className="w-[100px] h-11 flex border-t border-b border-black border-opacity-50 justify-center  items-center">
              <p className="text-center">{count}</p>
            </div>
            <div
              className="w-[41px] h-11 flex justify-center items-center bg-[#3066BE] rounded-tr rounded-br"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <button className=" text-white ">+</button>
            </div>
            <div className="w-[165px] h-11 ml-5 bg-[#3066BE] rounded justify-center items-center gap-2.5 inline-flex">
              <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
                <button
                  onClick={() => {
                    //   add();
                    //   navigate(`/${id1}`)
                    addtocart(id)
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
            {/* <button onClick={addwishlist}>
            <FiHeart className={wish ? "text-[#3066BE] w-28  h-8" : "text-black w-28  h-8"} />
          </button> */}
            <IoMdHeartEmpty
            onClick={()=>{
              addtowishlist(id)
            }}
              className={
                wish ? "text-[#3066BE] w-28  h-8" : "text-black w-28  h-8"
              }
            
            />
          </div>
        </div>
        <div className="w-full rounded border flex-col border-black border-opacity-50 mt-8">
          <div className="p-2">
            <div className="flex justify-start items-center gap-4">
              <div className="">
                <FaTruck size="2em" />
              </div>
              <div className="p-2 flex-col">
                <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                  Free Delivery
                </div>
                <div className="text-black text-xs font-medium font-['Poppins'] underline leading-none">
                  Enter your postal code for Delivery Availability
                </div>
              </div>
            </div>
          </div>
          <div className="border border-black opacity-50"></div>
          <div className="p-2">
            <div className="flex justify-start items-center gap-4">
              <div className="">
                <FiRefreshCcw size="2em" />
              </div>
              <div className=" p-2 flex-col">
                <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                  Return Delivery
                </div>
                <div>
                  <span className="text-black text-xs font-medium font-['Poppins'] leading-none">
                    Free 30 Days Delivery Returns.
                  </span>
                  <span className="text-black text-xs font-medium font-['Poppins'] underline leading-none">
                    Details
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-1/2  mt-12"></div>
      </div>
    </div>
  );
};

export default Detailsproduct;

{

}
