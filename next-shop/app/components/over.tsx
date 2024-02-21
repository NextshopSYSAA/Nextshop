import Slide from "./slide";

function Over() {
    return (
        <div style={{display:"flex"}}  className=" mb-24 mt-24 justify-center">
            <div   className=" justify-center items-center gap-[88px] inline-flex">
                <div className="flex-col justify-start items-center gap-6 inline-flex">
                    <div className="w-20 h-20 relative">
                        <div className="w-20 h-20 left-0 top-0 absolute">
                            <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full"></div>
                            <div className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full"></div>
                        </div>
                        <div className="w-10 h-10 left-[23px] top-[20px] absolute">
                            {/* <box-icon type='solid' name='truck' color="white" size="md"></box-icon> */}
                            </div>
                    </div>
                    <div className="flex-col justify-start items-center gap-2 flex">
                        <div className="text-black text-xl font-semibold font-['Poppins'] leading-7">
                            FREE AND FAST DELIVERY
                        </div>
                        <div className="text-center text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                            Free delivery for all orders over $140
                        </div>
                    </div>
                </div>
                <div className="w-[262px] flex-col justify-start items-center gap-6 inline-flex">
                    <div className="w-20 h-20 relative">
                        <div className="w-20 h-20 left-0 top-0 absolute">
                            <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full"></div>
                            <div className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full"></div>
                        </div>
                        <div className="w-10 h-10 left-[23px] top-[20px] absolute">
                            {/* <box-icon name='headphone' color="white" size="md" ></box-icon>  */}
                            </div>
                    </div>
                    <div className="flex-col justify-start items-center gap-2 flex">
                        <div className="text-black text-xl font-semibold font-['Poppins'] leading-7">
                            24/7 CUSTOMER SERVICE
                        </div>
                        <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                            Friendly 24/7 customer support
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-center gap-6 inline-flex">
                    <div className="w-20 h-20 relative">
                        <div className="w-20 h-20 left-0 top-0 absolute">
                            <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full"></div>
                            <div className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full"></div>
                        </div>
                        <div className="w-10 h-10 left-[23px] top-[23px] absolute">
                            {/* <box-icon type='solid' name='message-alt-check' color="white" size="md" ></box-icon>  */}
                            </div>
                    </div>
                    <div className="flex-col justify-start items-center gap-2 flex">
                        <div className="text-black text-xl font-semibold font-['Poppins'] leading-7">
                            MONEY BACK GUARANTEE
                        </div>
                        <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                            We reurn money within 30 days
                        </div>
                    </div>
                </div>
            </div>
            <Slide/>
        </div>
    )
}
export default Over;