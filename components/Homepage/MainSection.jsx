import React from "react";
import Image from "next/image";
function MainSection() {
  return (
    <div className=" grid grid-cols-12 mt-12   container mx-auto  py-5">
      <div className=" col-span-12   md:col-span-6   flex flex-col px-4    justify-self-center w-full">
        <h1 className="xl:text-5xl xs:bg-black  sm:mx-12 sm:text-4xl  lg:text-4xl filemin-[]: md:text-[1.7rem] text-2xl text-left text-emerald-600 font-semibold leading-sung sm:mt-12 md:mt-24   ">
          Your Gateway To Exchange{" "}
          <span className="text-black">Cryptocurrency</span>
        </h1>
        <h3 className="text-sm sm:mx-12 sm:text-md lg:text-lg xl:text-xl mt-2 sm:mt-3 lg:mt-6 font-semibold">Secured and easy to use.</h3>
        <div className="mt-4 sm:mx-12">
          <button className="border-2 text-sm border-emerald-800 md:font-bold hover:text-white transition-all duration-500 hover:bg-black rounded shadow-xl px-2.5 py-1 md:px-3 md:py-1 lg:px-6 lg:py-1.5 font-semibold">Trade Now</button>
        </div>
      </div>
      <div className="img xl:p-0 p-20 lg:p-12 md:p-8  col-span-12  md:col-span-6 justify-self-end	">
        <img src="/heroImage.png" alt="" />
      </div>
    </div>
  );
}

export default MainSection;
