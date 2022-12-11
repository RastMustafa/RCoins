import React from "react";
import Image from "next/image";
function MainSection() {
  return (
    <div className="  font-header  grid grid-cols-12 pt-8 md:pt-24 	   container mx-auto  ">
      <div className=" col-span-12    md:col-span-6 sm:pl-4 pl-12  flex flex-col px-4    w-full">
        <h1 className="xl:text-6xl tracking-[0.25rem]	  xs:bg-black  sm:mx-12 sm:text-4xl  lg:text-4xl  md:text-[1.7rem] text-2xl text-left text-emerald-600 font-semibold leading-sung sm:mt-12 lg::mt-24   ">
          Your Gateway To Exchange{" "}
          <span className=" text-black">Cryptocurrency</span>
        </h1>
        <h3 className="text-sm font-display sm:mx-12 sm:text-md lg:text-lg xl:text-xl mt-2 sm:mt-3 lg:mt-6 font-semibold">
          Secured and easy to use.
        </h3>
        <div className="mt-4 sm:mx-12 font-display">
          <button className="border-2 text-[12px] sm:text-lg border-emerald-800 md:font-bold hover:text-white transition-all duration-300 hover:bg-black rounded shadow-xl px-2.5 py-1 md:px-3 md:py-1 lg:px-6 lg:py-1.5 font-semibold">
            Trade Now
          </button>
        </div>
      </div>
      <div className="img xl:p-0 my-16 sm:mt-0 px-8  w-[50rem] justify-self-center lg:px-12 md:px-8  col-span-12  md:col-span-6 	">
        <img src="/hero1.jpg" alt="" />
      </div>
    </div>
  );
}

export default MainSection;
