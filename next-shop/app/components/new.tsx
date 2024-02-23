import Product from "./product";
import Group from "./Group";

function New() {
  return (
    <div style={{ display: "flex" , marginTop:"5%" }} className="justify-center">
      <div className=" flex-col justify-center items-start gap-[10px] inline-flex">
        <div className="flex-col justify-center items-start gap-5 flex">
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
              <div className="w-5 h-10 bg-[#3066BE] rounded"></div>
            </div>
            <div className="text-[#3066BE] text-base font-semibold font-['Poppins'] leading-tight">
              Featured
            </div>
          </div>
          <div className="text-[#241C24] text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">
            New Arrival
          </div>
        </div>
       <Group/>
      </div>
    </div>
  );
}
export default New;