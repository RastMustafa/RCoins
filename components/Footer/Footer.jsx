import React from "react";
import { BsDashLg } from "react-icons/as";
import { AiFillCloseCircle, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { FaLink } from "react-icons/aa";

function Footer() {
  return (
    <>
      <div className=" container md:pb-36 font-display mx-auto gap-12 justify-center items-center lg:justify-between flex-col flex lg:flex-row ">
        <div className="flex flex-col">
          <div className="max-w-[35rem] mb-12 h-auto top-6">
            <img className="" src="/hero3-WJx2cu3lj-transformed.png" alt="" />
          </div>
          <div className="border  bottom-[10rem] font-semibold  ">
            <div className="w-full shadow-xl flex flex-col gap-6 bg-white  bg-opacity-40	  backdrop-blur-lg	 rounded-md ">
              <div className="bg-yellow-300  backdrop-blur-lg	 bg-opacity-40 flex flex-row justify-between h-8">
                <h1 className="ml-4">Rcoin By Mustafa Arslan</h1>
              </div>

              <h2 className="px-6">If you have any sugesstion, or note fell free to reach out</h2>
              <div className="flex flex-row justify-around text-3xl pb-4   my-2">
                <span>
                  <AiFillGithub />
                </span>
                <span>
                  <AiFillLinkedin />
                </span>
                <span>
                  <FaLink />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" font-semibold w-full	  bg-white  bg-opacity-50 backdrop-blur-lg	   shadow-xl text-lg gap-12 flex flex-col flex-wrap">
          <div className="bg-yellow-200 backdrop-blur-xl	opacity-50  flex flex-row justify-between h-8">
            <h1 className="text-start px-4">Website Map</h1>
            <div className="flex flex-row">
              <span className="mx-4 my-auto text-lg">
                <BsDashLg />
              </span>
              <span className="mr-4 my-auto text-xl">
                <AiFillCloseCircle />
              </span>
            </div>
          </div>
          <div className="flex flex-row pb-4 font-display text-[16px] px-12 gap-12 flex-wrap">
            <div className="   ">
              <h1 className="text-xl">Explore :</h1>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg "> {">"} Exchange</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Learn & Earn</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Labs</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Charity</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Link</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Cloud</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Academy</h2>
            </div>
            <div className="learn  ">
              <h1 className="text-xl">Learn :</h1>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Tips and tutorials</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Market updates</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Articles</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Crypto basics</h2>
            </div>
            <div className="indivual  ">
              <h1 className="text-xl">Individuals :</h1>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Buy and Sell</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Private Client</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Card</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Earn</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Wallet</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Borrow</h2>
            </div>
            <div className="business  ">
              <h1 className="text-xl">Businesses :</h1>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Institutional</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Exchange</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Assethub</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Commerce</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Prime</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Compliance</h2>
            </div>
            <div className="company  ">
              <h1 className="text-xl">Company :</h1>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} About</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Blog</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Support</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Affiliates</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Careeres</h2>
              <h2 className="hover:bg-gray-100 hover:shadow px-2 rounded-lg ">{">"} Securtiy</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
