"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
const Page = ({ params }: { params: any }) => {
  interface Productupdate {
    idproduct: number;
    name: string;
    category: string;
    status: string;
    initalprice: number;
    promo: number;
    quantity: number;
    description: string;
    userIduser: number;
    imgproducts: imgproducts[];
  }
  const id: number = parseInt(params.upprod, 10);
  const [data, setData] = useState<Productupdate>();
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:3001/saler/getproduct/${id}`
        );
        console.log(result.data); // Access data property of the response
        setData(result.data); // Set data using result.data
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  console.log(data, "dattttttttta");
  console.log(params.upprod, "this id");

  // console.log(data.name,'name');

  const route = useRouter();

  const [name, setName] = useState<string | undefined >(data?.name);
  const [Category, setCategory] = useState<string | undefined>(data?.category);
  const [status, setstatus] = useState<any>(data?.status);
  const [Inital, setIntialPrice] = useState<number | undefined>(data?.initalprice);
  const [Quantity, setQuantity] = useState<number | undefined>(data?.quantity);
  const [promo, setPromo] = useState<number | undefined>(data?.promo);
  const [description, setDescription] = useState<string>(
    data?.description || ""
  );
 

  const notifySuccess = () => toast.success("Product added successfully!");
  const updateProduct = async () => {
    // need the id of the seller how add this product
    try {
      await axios.put(`http://localhost:3001/saler/update/${params.upprod}`, {
          name: name,
          category:Category,
          status: status,
          initalprice: Inital ,
          promo: promo,
          quantity: Quantity,
          description: description,
          
      });
      notifySuccess();
      route.push("/seller");
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <div >
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
         
      <div className="h-full w-full">
        <div></div>
        <div className="w-full h-full  font-semibold mt-8 ">
          <p className="ml-36">
            Welcome! <span className="text-blue-400  ">MR Amine</span>
          </p>
        </div>

        <div className="flex items-center justify-center p-12 text-center font-semibold ml-36 mt-3">
          <>
            <ToastContainer />
            <div className="mx-auto w-full max-w-[550px] bg-white ">
              <div className="">
                <label
                  htmlFor="number"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  <span className="text-blue-400">Product</span> name
                </label>
                <input
                  onChange={(ele) => {
                    setName(ele.target.value);
                  }}
                  id="nameProduct"
                  placeholder={data?.name}
                  className="w-full  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                <div className="mb-5">
                  <label
                    htmlFor="text"
                    className="mb-5 block text-base font-medium text-[#07074D]"
                  >
                    <span className="text-blue-400">Category</span> Product
                  </label>
                  <input
                    placeholder={data?.category}
                    onChange={(ele) => {
                      setCategory(ele.target.value);
                    }}
                    type="text"
                    name="text"
                    id="CategoryProduct"
                    className="w-full  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  // for="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  <span className="text-blue-400">status</span> Product
                </label>
                <input
                  placeholder={data?.status}
                  onChange={(ele) => {
                    setstatus(ele.target.value);
                  }}
                  type="text"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  // for="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  <span className="text-blue-400">Inital</span> Price
                </label>
                <input
                  type="number"
                  placeholder={toString(data?.initalprice)}
                  onChange={(ele) => {
                    setIntialPrice(parseInt(ele.target.value));
                  }}
                  id="PriceProduct"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>{" "}
              <div className="mb-5">
                <label
                  htmlFor="number"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  <span className="text-blue-400">Promo</span>
                </label>
                <input
                  placeholder={ toString(data?.promo)}
                  onChange={(ele) => {
                    setPromo(parseInt(ele.target.value));
                  }}
                  id="PriceProduct"
                  className="w-full  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <div className="mb-5">
                  <label
                    htmlFor="number"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    <span className="text-blue-400">Quantity</span>
                  </label>
                  <input
                    placeholder={ toString(data?.quantity)}
                    onChange={(ele) => {
                      setQuantity(parseInt(ele.target.value));
                    }}
                    id="QuantityProduct"
                    type="number"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[550px] bg-white ">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-4 block text-base font-medium text-[#07074D]"
                >
                  <span className="text-blue-400">Description</span>
                </label>
                <input
                  placeholder={data?.description}
                  onChange={(ele) => {
                    setDescription(ele.target.value);
                  }}
                  id="DsecriptionProduct"
                  type="text"
                  className="w-full h-40  text-center rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-6 pt-4">
                <div>
                  <button
                    onClick={() => {
                      updateProduct();
                    }}
                    className="hover:shadow-div w-full rounded-md bg-blue-400 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Page;
