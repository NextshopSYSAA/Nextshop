// import ProductCountdown2 from "./time/ProductCountdown2";
function Product() {
  return (
    <div style={{ display: "flex", marginTop: "5%", justifyContent: "center" }}>
      <div className="w-[1170px] h-[500px] relative bg-black">
        <div className="w-[504px] h-[500px] left-[552px] top-0 absolute opacity-30 bg-zinc-300 rounded-full blur-[200px]" />
        <div className="w-[443px] left-[56px] top-[85px] absolute text-[#D0CFD0] text-5xl font-semibold font-['Inter'] leading-[60px] tracking-widest">Enhance Your Music Experience</div>
        <div className="left-[56px] top-[300px] absolute justify-start items-start gap-6 inline-flex">

          {/* <ProductCountdown2 /> */}
        </div>
        <div className="px-12 py-4 left-[56px] top-[400px] absolute bg-[#3066BE] rounded justify-center items-center gap-2.5 inline-flex">
          <div className="text-[#D0CFD0] text-base font-medium font-['Poppins'] leading-normal">Buy Now!</div>
        </div>
        <div className="left-[56px] top-[45px] absolute text-[#3066BE] text-base font-semibold font-['Poppins'] leading-tight">Categories</div>
        <div className="w-[600px] h-[420px] px-4 py-[45px] left-[526px] top-[37px] absolute justify-center items-center inline-flex">
          <img className="w-[535px] h-[535px] origin-top-left " src="https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwda6e3b95/JBL_CHARGE5_WIFI_HERO%20_LEFT_37890_x3.png?sw=535&sh=535" />
        </div>
      </div>
    </div>
  )
}
export default Product;