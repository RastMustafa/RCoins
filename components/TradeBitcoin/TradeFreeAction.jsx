import React from "react";
import Image from "next/image";
function TradeFreeAction() {
  return (
    <div className="w-full relative container mx-auto py-12  ">
      <div className="">
        <div className="shadow-xl bg-white bg-opacity-70	 rounded-md  m-12 max-w-[45rem] border">
          <div className="bg-yellow-200 text-center h-8">Header</div>

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
      <div className="bg-hero w-[30rem] top-0 p-12 right-0  absolute h-full bg-no-repeat  bg-[length:600px_850px]"></div>
    </div>
  );
}

export default TradeFreeAction;
