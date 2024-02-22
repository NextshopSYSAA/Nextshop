function New() {
  return (
    <div style={{ display: "flex" , marginTop:"10%" }} className="justify-center">
      <div className=" flex-col justify-center items-start gap-[60px] inline-flex">
        <div className="flex-col justify-start items-start gap-5 flex">
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
              <div className="w-5 h-10 bg-red-500 rounded"></div>
            </div>
            <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">
              Featured
            </div>
          </div>
          <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">
            New Arrival
          </div>
        </div>
        <div className="justify-start items-start gap-[30px] inline-flex">
          <div className="w-[570px] h-[600px] relative bg-black rounded">
            <img
              className="w-full h-full  bg-center bg-cover"
              src="https://shorturl.at/sUW34"
            />
            <div className="left-[32px] top-[446px] absolute flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="text-neutral-50 text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">
                  PlayStation 5
                </div>
                <div className="w-[242px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">
                  Black and White version of the PS5 coming out on sale.
                </div>
              </div>
              <div className="flex-col justify-start items-start flex">
                <div className="text-white text-base font-medium font-['Poppins'] leading-normal">
                  Shop Now
                </div>
                <div className="w-[81px] h-[0px] opacity-50 justify-center items-center inline-flex">
                  <div className="w-[81px] h-[0px] border border-white"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-8 inline-flex">
            <div className="w-[570px] h-[284px] relative bg-stone-950 rounded">
              <img
                className="w-full h-full  bg-center bg-cover "
                src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D"
              />
              <div className="left-[24px] top-[138px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="text-neutral-50 text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">
                    Women’s Collections
                  </div>
                  <div className="w-[255px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">
                    Featured woman collections that give you another vibe.
                  </div>
                </div>
                <div className="flex-col justify-start items-start flex">
                  <div className="text-white text-base font-medium font-['Poppins'] leading-normal">
                    Shop Now
                  </div>
                  <div className="w-[81px] h-[0px] opacity-50 justify-center items-center inline-flex">
                    <div className="w-[81px] h-[0px] border border-white"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center items-center gap-[30px] inline-flex">
              <div className="w-[270px] h-[284px] relative bg-black rounded">
                  <img
                    className="w-full h-full bg-center bg-cover "
                    src="https://shorturl.at/dxDV2"
                  />
                <div className="left-[24px] top-[175px] absolute flex-col justify-start items-start gap-2 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-neutral-50 text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">
                      Speakers
                    </div>
                    <div className="w-[191px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">
                      Amazon wireless speakers
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start flex">
                    <div className="text-white text-base font-medium font-['Poppins'] leading-normal">
                      Shop Now
                    </div>
                    <div className="w-[81px] h-[0px] opacity-50 justify-center items-center inline-flex">
                      <div className="w-[81px] h-[0px] border border-white"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[270px] h-[284px] relative bg-black rounded">
                  <img
                    className="w-full h-full  bg-center bg-cover"
                    src="https://shorturl.at/rCP56"
                  />
                
                <div className="left-[24px] top-[175px] absolute flex-col justify-start items-start gap-2 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-neutral-50 text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">
                      Perfume
                    </div>
                    <div className="w-[191px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">
                      GUCCI INTENSE OUD EDP
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start flex">
                    <div className="text-white text-base font-medium font-['Poppins'] leading-normal">
                      Shop Now
                    </div>
                    <div className="w-[81px] h-[0px] opacity-50 justify-center items-center inline-flex">
                      <div className="w-[81px] h-[0px] border border-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default New;