"use client";
import React, { useState, useEffect } from "react";
interface Product {
    idproduct: number;
    name: string;
    initalprice: number;
    category: string;
    imgproducts: { image: string }[];
    promo: number;
  }
const Productimage = () => {
  const [photo, setPhoto] = useState<imgproducts[]>([]);
  const [product, setProduct] = useState<Product>(); // Initial null state

  useEffect(() => {
    const aymen = async () => {
      try {
        const respponse = await fetch(
          `http://localhost:3001/saler/getproduct/1`
        )
          .then((result) => result.json())
          .then((data) => {
            console.log(data, "data new product");
            setPhoto(data.imgproducts);
          });
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    aymen();
  }, []);
  console.log(product?.imgproducts[2].image)
  console.log(photo)


    const swap = (index) => {
      if (index !== 0) {
        const cl = photo[index];
        const newimg = [...photo];
        newimg[index] = newimg[0];
        newimg[0] = cl;
        setPhoto(newimg);
      }
    };

  return (
    <div className="flex justify-center items-center w-1/2  mt-12">
      <div className="flex flex-col justify-between  mt-4 w-1/6">
        {photo?.slice(1).map((ele, index) => {
          return (
            <div className="w-full m-2" key={index}>
              <img src={ele.image} className="p-2 hover:scale-125" />
              <div className="w-full h-full rounded-md">
                <div className=" w-4/5   bg-center">
                  <img
                    src={photo[0].image}
                    className=" w-full h-full  hover:scale-105 mt-4 hover:mr-4 ml-5"
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productimage;
