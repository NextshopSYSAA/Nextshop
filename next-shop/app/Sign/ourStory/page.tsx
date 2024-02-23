import React from 'react'
import { CiShop } from "react-icons/ci";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { TbShoppingBagCheck } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";







const page = () => {
  return (
    <div style={{marginBottom:'50px'}}>
        <div className='flex-column space-x-10 ' style={{paddingTop:'80px', paddingLeft:'150px'}} >
        <div  className='flex-column space-x-10 ' style={{paddingTop:'80px', paddingLeft:'50px'}}>
            <div className='flex space-x-40'>
                <div className='flex-column space-x-10'  style={{height:'336px', width:'425px', top:'422px', gap:'40px', paddingTop:'80px', paddingLeft:'50px'}}>
                    <h3 className='text-5xl'	>Our Story</h3>
                    <h5 className='text-lg'> Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </h5>
                    <h5 className='text-lg'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.. </h5>
                </div>
                <div style={{height:'709px', width:'605px', paddingRight:'0', marginRight:"0"}}>
    <img src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oSLI7bxdH8MKlG~5UbyOTJA9Rj92cUTtr---rQMN1TxAGP1Aq0WBIaZH-wF8C5P-6m-GCGyOUD6si86g2d8cztMFPugbg7jHMe0y~7caaoaoER3~xPjhA-cE1kWV0YWQxh03SgYLBNa0r08p9lTOBP77XmrV1L4pETJGRWoFkBNaFcJQJzEACSFETCojDlFx7WSpDVPyQKj-DM2eaE6TzYQivB4aip7l4cwFujCvQMpUD7NlRQ-Lky2vNqO124-GRx09EJ-g8ZfSIk4W9WkNqEi1527w505aNNCmeOcdkjQZ~TjSWfMmoLGDWQXxyYtnQQwcixrGaAVyHnliYgFnGQ__" alt="no content" style={{height:'70%'}} />
</div>
            </div>
           

        </div>
        <div className="flex justify-center space-x-5" style={{paddingRight:'60px'}}>
            <div className="box" style={{ border: '2px solid grey', flex: 1, height: '230px',width:"100px" , display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ border: '1px solid grey', borderRadius: '50%', padding: '10px' }}>

          <CiShop className="hover:text-blue-500 cursor-pointer" style={{ width: '100px', height: '100px' }}/>
          </div>
        </div>
        <div className="box" style={{ border: '2px solid grey', backgroundColor: '#DB4444', flex: 1, height: '230px',width:"100px" ,display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ border: '1px solid grey', borderRadius: '50%',backgroundColor: 'white', padding: '10px' }}>

          <AiTwotoneDollarCircle className="hover:text-red-500 cursor-pointer"  style={{ width: '100px', height: '100px' }}/>
          </div>
        </div>
        <div className="box" style={{ border: '2px solid grey', flex: 1, height: '230px',width:"100px" , display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ border: '1px solid grey', borderRadius: '50%', padding: '10px' }}>

          <TbShoppingBagCheck className="hover:text-blue-500 cursor-pointer"  style={{ width: '100px', height: '100px' }}/>
          </div>
        </div>
        <div className="box" style={{ border: '2px solid grey', flex: 1, height: '230px', width:"100px" , display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ border: '1px solid grey', borderRadius: '50%', padding: '10px' }}>

          <TbMoneybag className="hover:text-blue-500 cursor-pointer"  style={{ width: '100px', height: '100px' }}/>
          </div>
        </div>
        </div>
        <div className="flex justify-center space-x-10" style={{paddingTop:'50px', paddingRight:"10%", paddingLeft:'7%'}}>
 
        <div className="box" style={{ border: '1px solid white', flex: 1, height:'400px', width:'100px', paddingTop: 0,textAlign: 'start' ,boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)' }}>
    <img src="https://res.cloudinary.com/ali22/image/upload/v1698013241/koss/etpn0ndqpk0efxcr1nwf.jpg" alt="Your Image" style={{ width: '100%', height: '75%' }} />
    <p className="font-bold text-black text-lg mt-2">Salah Mbarki</p>
    <p >USER SIGN</p>
    <div className='flex space-x-4' style={{paddingTop:'7px'}}>
    <CiTwitter className="hover:text-blue-500 cursor-pointer"  />
    <CiInstagram className="hover:text-blue-500 cursor-pointer"  />
    <CiLinkedin  className="hover:text-blue-500 cursor-pointer" />
    </div>
    
</div>
   <div className="box" style={{ border: '1px solid white', flex: 1, height:'400px', width:'100px', paddingTop: 0,textAlign: 'start' ,boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)' }}>
    <img src="https://res.cloudinary.com/ali22/image/upload/v1698013241/koss/etpn0ndqpk0efxcr1nwf.jpg" alt="Your Image" style={{ width: '100%', height: '75%' }} />
    <p className="font-bold text-black text-lg mt-2">Salah Mbarki</p>
    <p >USER SIGN</p>
    <div className='flex space-x-4' style={{paddingTop:'7px'}}>
    <CiTwitter className="hover:text-blue-500 cursor-pointer" />
    <CiInstagram  className="hover:text-blue-500 cursor-pointer" />
    <CiLinkedin className="hover:text-blue-500 cursor-pointer" />
    </div>
</div>
<div className="box" style={{ border: '1px solid white', flex: 1, height:'400px', width:'100px', paddingTop: 0,textAlign: 'start' ,boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)' }}>
    <img src="https://res.cloudinary.com/ali22/image/upload/v1698013241/koss/etpn0ndqpk0efxcr1nwf.jpg" alt="Your Image" style={{ width: '100%', height: '75%' }} />
    <p className="font-bold text-black text-lg mt-2">Salah Mbarki</p>
    <p >USER SIGN</p>
    <div className='flex space-x-4' style={{paddingTop:'7px'}}>
    <CiTwitter className="hover:text-blue-500 cursor-pointer"  />
    <CiInstagram className="hover:text-blue-500 cursor-pointer"  />
    <CiLinkedin  className="hover:text-blue-500 cursor-pointer" />
    </div>
</div>
</div>
        <div className="flex justify-center space-x-10" style={{paddingTop:'50px', paddingRight:"20%", paddingLeft:'20%' }}>
 
        <div className="box" style={{ border: '1px solid white', flex: 1, height:'400px', width:'100px', paddingTop: 0,textAlign: 'start' ,boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)' }}>
    <img src="https://res.cloudinary.com/ali22/image/upload/v1698013241/koss/etpn0ndqpk0efxcr1nwf.jpg" alt="Your Image" style={{ width: '100%', height: '75%' }} />
    <p className="font-bold text-black text-lg mt-2">Salah Mbarki</p>
    <p >USER SIGN</p>
    <div className='flex space-x-4' style={{paddingTop:'7px'}}>
    <CiTwitter className="hover:text-blue-500 cursor-pointer"  />
    <CiInstagram className="hover:text-blue-500 cursor-pointer"  />
    <CiLinkedin  className="hover:text-blue-500 cursor-pointer" />
    </div>
</div>
<div className="box" style={{ border: '1px solid white', flex: 1, height:'400px', width:'100px', paddingTop: 0,textAlign: 'start' ,boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)' }}>
    <img src="https://res.cloudinary.com/ali22/image/upload/v1698013241/koss/etpn0ndqpk0efxcr1nwf.jpg" alt="Your Image" style={{ width: '100%', height: '75%' }} />
    <p className="font-bold text-black text-lg mt-2">Salah Mbarki</p>
    <p >USER SIGN</p>
    <div className='flex space-x-4' style={{paddingTop:'7px'}}>
    <CiTwitter className="hover:text-blue-500 cursor-pointer"  />
    <CiInstagram className="hover:text-blue-500 cursor-pointer"  />
    <CiLinkedin  className="hover:text-blue-500 cursor-pointer" />
    </div>
</div>
 
</div>

        </div>
        
        <div className="flex justify-center space-x-5" style={{ paddingRight: '10%', paddingTop: '30px', paddingLeft: '10%' }}>
  <div className="box" style={{  flex: 1, height: '230px', width: "100px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ border: '1px solid grey', borderRadius: '50%', padding: '10px' }}>
      <CiDeliveryTruck style={{ width: '100px', height: '100px' }} />
    </div>
    <h6  className="text-sm hover:text-base font-bold text-black">FREE AND FAST DELIVERY</h6>
    <p >Free delivery for all orders over $140</p>
  </div>
  <div className="box" style={{  flex: 1, height: '230px', width: "100px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ border: '1px solid grey', borderRadius: '50%', padding: '10px' }}>
      <RiCustomerService2Fill style={{ width: '100px', height: '100px' }} />
    </div>
    <h6  className="text-sm hover:text-base font-bold text-black">24/7 CUSTOMER SERVICE</h6>
    <p>Friendly 24/7 customer support</p>
  </div>
  <div className="box" style={{  flex: 1, height: '230px', width: "100px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ border: '1px solid grey', borderRadius: '50%', padding: '10px' }}>
      <MdOutlineSecurityUpdateGood style={{ width: '100px', height: '100px' }} />
    </div>
    <h6  className="text-sm hover:text-base font-bold text-black">MONEY BACK GUARANTEE</h6>
    <p>We reurn money within 30 days</p>
  </div>
</div>

    </div>
  )
}

export default page