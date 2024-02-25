
import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import axios from 'axios';


const page = () => {
  
  return (
    <div className='flex flex-row space-x-10 bg-white' >
        
        <div  style={{paddingTop:'150px', paddingLeft:'10%' }}>
            <div className='flex flex-row space-x-6'>
            <div style={{ width: '40px', height: '40px',borderRadius: '50%',backgroundColor: '#DB4444',display: 'flex',alignItems: 'center',justifyContent: 'center',
}}>
  <IoCallOutline />
</div>
            <h5 className='text-2xl'>Call To Us</h5>
            </div>
            <h6>We are available 24/7, 7 days a week.</h6>
            <h6>Phone: +8801611112222</h6>
          <div style={{paddingTop:'15px', paddingBottom:'15px'}}>
          <hr style={{width:'100%', height:'2px', background:'grey', border:'none', paddingTop:'0px'}}/>
            </div>
            <div className='flex flex-row space-x-6'>
            <div style={{width: '40px', height: '40px',borderRadius: '50%',backgroundColor: '#DB4444',display: 'flex',alignItems: 'center',justifyContent: 'center',
}}>
  <CiMail />
</div>
           
            <h5 className='text-2xl'>Write To US</h5>
            </div>
          <div>
            <h6 className='	text-neutral-700 text-[#000000] '>Fill out our form and we will contact </h6>
            <h6 className='	text-slate-950 text-[#000000] '> you within 24 hours..</h6>
            </div>

            <h6 	className='	text-slate-950 text-[#000000] '> Emails: customer@exclusive.com</h6>
            <h6 className='	text-neutral-700 text-[#000000] '> Emails: support@exclusive.com</h6>
        </div>
      <div className='flex-column ' >
        <div className='flex flex-row space-x-6 ' style={{paddingLeft:'20%', paddingTop:'150px', paddingBottom:'15px'}}>
          <input style={{background:'#F5F5F5', width:'250px', height:'40px'}}  type="text" />
          <input  style={{background:'#F5F5F5', width:'250px', height:'40px'}} type="text" />
          <input  style={{background:'#F5F5F5', width:'250px', height:'40px'}} type="text" /> 
        </div> 
        
          <input  style={{background:'#F5F5F5', width:'695px', height:'170px', marginLeft:'20%'}} type="text" />
  <div style={{paddingTop:'15px', marginLeft:'88%'}}>
          <button type="button"className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" style={{width:'151px', height:'36px'}}>Send Massage</button>

</div>
          
        </div>
       

    </div>
  )
}

export default page