import React from "react";
import Image from "next/image";
function MainSection() {
  return (
    <div className="  font-header  flex lg:flex-row pt-8 flex-col   container mx-auto  ">
      <div className=" z-10 lg:mt-24 mt-12     sm:pl-4   flex flex-col px-4   w-full">
        <h1 className="lg:text-6xl drop-shadow tracking-[0.25rem]	   xs:bg-black text-5xl   md:text-6xl   lg:text-left text-emerald-600 font-semibold leading-sung  ">
          Your Gateway To Exchange Cryptocurrency
        </h1>
        <h3 className="text-sm font-display sm:mx-12 sm:text-lg lg:text-xl xl:text-xl mt-2 sm:mt-3 lg:mt-6 font-semibold">
          Secured and easy to use.
        </h3>
        <div className="mt-4 sm:mx-12 font-display">
          <button className="border-2  sm:text-lg border-black md:font-bold hover:text-white transition-all duration-300 hover:bg-black rounded shadow-xl px-2.5 py-1 md:px-3 md:py-1 lg:px-6 lg:py-1.5 font-semibold">
            Trade Now
          </button>
        </div>
      </div>
      <div className=" w-full   xl:p-0  sm:mt-0          	">
        <img className="w-[50rem] lg:mt-24 h-[25rem]  " src="/hero1-transformed.png" alt="" />
      </div>
    </div>
  );
}

export default MainSection;
