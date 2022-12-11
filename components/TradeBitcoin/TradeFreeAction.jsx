import React from "react";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/Ai";
import { BsDashLg } from "react-icons/Bs";

AiFillCloseCircle;
function TradeFreeAction() {
  return (
    <div className="w-full  flex flex-row gap-12 container mx-auto py-12  ">
      <div className="z-10">
        <div className="shadow-xl bg-white bg-opacity-70	 rounded-md   max-w-[45rem] border">
          <div className="bg-yellow-200   flex flex-row justify-end h-8">
            <span className="mx-4 my-auto text-lg">
              <BsDashLg />
            </span>
            <span className="mr-4 my-auto text-xl">
              <AiFillCloseCircle />
            </span>
          </div>

          <div className=" p-6  flex text-center items-center flex-col justify-between  gap-12">
            <div className=" flex flex-row gap-6 items-center">
              <h1 className="  w-20 border-yellow-400 font-bold bg-gray-100 p-2 border-4 rounded-full ">1</h1>
              <span className="h-24 border-gray-400 border-l w-1"></span>
              <div className="w-48">
                <Image src="/verify.png" width={70} height={70} alt="" />
              </div>
              <div className="text-left">
                <h1 className="text-xl my-2">Verify Your Identity</h1>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, consectetur. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Sit, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, nesciunt!
                </div>
              </div>
            </div>
            <div className=" flex flex-row gap-6 items-center">
              <h1 className="  w-20 border-yellow-400 font-bold bg-gray-100 p-2 border-4 rounded-full ">2</h1>
              <span className="h-24 border-gray-400 border-l w-1"></span>
              <div className="w-48">
                <Image src="/fund.png" width={70} height={70} alt="" />
              </div>
              <div className="text-left">
                <h1 className="text-xl my-2">Fund your account</h1>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, consectetur. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Sit, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, nesciunt!
                </div>
              </div>
            </div>
            <div className=" flex flex-row gap-6 items-center">
              <h1 className="  w-20 border-yellow-400 font-bold bg-gray-100 p-2 border-4 rounded-full ">3</h1>
              <span className="h-24 border-gray-400 border-l w-1"></span>
              <div className="w-48">
                <Image src="/start_Trading.png" width={70} height={70} alt="" />
              </div>
              <div className="text-left">
                <h1 className="text-xl my-2">Start trading</h1>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, consectetur. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Sit, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, nesciunt!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-12 my-auto -z-0 absolute">
        <Image src="/hero2.jpg" width={1200} height={700} alt="" />
      </div>
    </div>
  );
}

export default TradeFreeAction;
