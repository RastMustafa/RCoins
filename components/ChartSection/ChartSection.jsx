import React from "react";
import Chart from "./Chart";
import { Option, Select } from "@material-tailwind/react";
function ChartSection() {
  return (
    <div className="flex lg:flex-row border-4 border-gray-100  relative flex-col shadow-xl bg-white bg-opacity-10 backdrop-blur-3xl	 bg-slate-200  font-header  md:px-8 gap-12  w-full   container mx-auto  py-5">
      <div className=" w-auto  px-4 ">
        <Select variant="static" label="Coins">
          <Option>Bitcoin</Option>
          <Option>Etherum</Option>
          <Option>TRX</Option>
          <Option>XRP</Option>
        </Select>
        <div className="mt-4 p-4 text-md grid grid-cols-2 text-xs sm:text-sm  font-semibold font-display lg:flex lg:flex-col gap-4 w-full">
          <div>
            Price : <span className="font-normal">$1023</span>
          </div>
          <div>
            Market Cap(24) : <span className="font-normal">$1023</span>
          </div>
          <div>
            Volume(24) : <span className="font-normal">$1023</span>
          </div>
          <div>
            1h % : <span className="font-normal">$1023</span>
          </div>
          <div>
            24h % : <span className="font-normal">$1023</span>
          </div>
          <div>
            7d % : <span className="font-normal">$1023</span>
          </div>
        </div>
      </div>
      <div className="w-full  flex-1  ">
        <Chart />
      </div>
    </div>
  );
}

export default ChartSection;
