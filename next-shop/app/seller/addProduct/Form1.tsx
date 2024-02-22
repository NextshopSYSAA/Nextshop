"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer , toast } from 'react-toastify';
const Form1 = () => {
  const route = useRouter()
  const [name , setName] = useState<string>('')
  const [Category ,setCategory] = useState<string>('')
  const [rate , setRate] = useState<number>()
  const [Inital,setIntialPrice]=useState<number>()
  const [Quantity,setQuantity]=useState<number>()
  const [promo,setPromo] = useState<number>()
  const [description,setDescription]=useState<string>()
  const [photo,setPhoto] = useState<any>()
  const [image,setImage]= useState<string>('image1')

  const handleImageChange =(e:any)=>{
    const selectedImages = Array.from(e.target.files);
    console.log(selectedImages);
    setPhoto(selectedImages );
  }
  const uploadImage = async (image : string) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "AmineTessiku");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/du0wpkjrs/upload",
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };


  const notifySuccess = () => toast.success("Product added successfully!");
    const addProduct =  async ()=> 
    {
      // need the id of the seller how add this product 
      try{
        const image = await uploadImage(photo[0]);
        const images = await Promise.all(photo.slice(1).map(uploadImage));
        await axios.post(`http://localhost:3001/saler/createprod/${1}`, {
          name: name,
          category: Category,
          rate: rate,
          status: 'availabe',
          initalprice: Inital,
          promo:promo,
          quantity: Quantity,
          description: description,
          image : {
          image1 : image,
          image2 :images[0],
          image3 : images[1],
          image4 : images[2],
          image5 : images[3]
          }
        })
        notifySuccess()
        route.push('/seller')
      }
      catch(err){
        console.log('err',err);
      }
      
    }
    return (
        <>
        <ToastContainer/>
        <div className="mx-auto w-full max-w-[550px] bg-white ">
        <div className="">
          <label
            htmlFor="number"
           
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            <span className="text-red-500">Product</span> name
          </label>
          <input
            onChange={(ele)=>{
              setName(ele.target.value)
            }}
            id='nameProduct'
            placeholder="name product"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          <div className="mb-5">
            <label
              htmlFor="text"
              className="mb-5 block text-base font-medium text-[#07074D]"
            >
              <span className="text-red-500">Category</span> Product
            </label>
            <input
             onChange={(ele)=>{
              setCategory(ele.target.value)
            }}
              type="text"
              name="text"
              id='CategoryProduct'
              placeholder="Category"
              className="w-full  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            // for="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            <span className="text-red-500">Rate</span> Product
          </label>
          <input
           onChange={(ele)=>{
            setRate(parseInt(ele.target.value))
          }}
            type="number"
            placeholder="rate"
            id='RateProduct'
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            // for="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            <span className="text-red-500">Inital</span> Price
          </label>
          <input
             onChange={(ele)=>{
              setIntialPrice(parseInt(ele.target.value))
            }}
            id='PriceProduct'
            placeholder="Initial Price"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div> <div className="mb-5">
          <label
            htmlFor="number"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            <span className="text-red-500">Promo</span>
          </label>
          <input
             onChange={(ele)=>{
              setPromo(parseInt(ele.target.value))
            }}
            id='PriceProduct'
            placeholder="Promo"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <div className="mb-5">
            <label
              htmlFor="number"
             
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              <span className="text-red-500">Quantity</span>
            </label>
            <input
               onChange={(ele)=>{
                setQuantity(parseInt(ele.target.value))
              }}
              id='QuantityProduct'
              type="number"
              placeholder="Quantity"
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
          <span className="text-red-500">Description</span>
        </label>
        <input
           onChange={(ele)=>{
            setDescription(ele.target.value)
          }}
          id='DsecriptionProduct'
          type="text"
          placeholder="Description"
          className="w-full h-40  text-center rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-6 pt-4">
        <label className="mb-5 block text-xl font-semibold text-[#07074D]">
          Upload File
        </label>

        <div className="mb-8">
          <input type="file" name="file" id="file" className="sr-only" multiple onChange={
           
             handleImageChange
           
          } />

          <label
            htmlFor="file"
            className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
          >
            <div>
              <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                Drop files here
              </span>
              <span className="mb-2 block text-base font-medium text-[#6B7280]">
                Or
              </span>
              <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                Browse
              </span>
            </div>
          </label>
        </div>

        <div>
          <button onClick={()=>{
            addProduct()
          }} className="hover:shadow-div w-full rounded-md bg-rose-600 py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Add The New Product
          </button>
        </div>
      </div>
    </div>
        </>
    );
};

export default Form1;