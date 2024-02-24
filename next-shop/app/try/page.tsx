// "use client"
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from 'react-router-dom';
// console.log("aaaaa")
// const Productimage = () => {
//   const [photo , setPhoto] = useState([])
//   useEffect(()=>{
//     const getdata =async()=>{
//       const result  = await fetch(`http://localhost:3001/saler/getproduct/1`)
//   const data : Product[]= await (result.json());
//   console.log(data ,'ssss');
//   console.log(data[0].imgproducts[0].image)
//     }
//     getdata()
//   },[])
//   // data[0].imgproducts.map((ele) => (
      
//   //     console.log(ele.image)))
              
          
//   // const swap = (index) => {
//   //   if (index !== 0) {
//   //     const cl = images[index];
//   //     const newimg = [...images];
//   //     newimg[index] = newimg[0];
//   //     newimg[0] = cl;
//   //     setImages(newimg);
//   //   }
//   // };

//   return (
//     <div className="flex justify-center items-center w-1/2  mt-12">
//       <div className="flex flex-col justify-between  mt-4 w-1/6">
//         {/* {data.slice(1).map((image, index) => (
//           <div className="w-full m-2" key={index}>
//             <img
//               src={image.imageurl}
//               alt={`Small ${index}`}
//               className="p-2 hover:scale-125"
//               onClick={() => swap(index + 1)}
//             />
//           </div>
//         ))} */}
//       </div>
//       <div className="w-full h-full rounded-md">
//         {/* <div className=" w-4/5   bg-center">
//           <img
//             src={images[0] ? images[0].imageurl : ''}
//             className=" w-full h-full  hover:scale-105 mt-4 hover:mr-4 ml-5"
//             alt=""
//           />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Productimage;
