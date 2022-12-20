import React from "react";
import Link from "next/link";
import Image from "next/image";
function DropDownMobileSize({ navbarTabTitles, icon }) {
  return (
    <>
      <div className="absolute font-dislpay  right-0 z-20 w-full px-5 mt-16 transition">
        <ul className="flex  flex-col bg-white w-full rounded shadow-md overflow-hidden">
          <li className="flex">
            <h3 className="flex flex-1 font-display text-emerald-600 font-semibold px-5 py-4">
              <strong>Navigation</strong>
            </h3>
          </li>
          <li className="flex border-t  font-display w-full">
            <Link href="/login" className="">
              <a className="flex shadow gap-6 text-lg w-full text-emerald-600  hover:bg-gray-200 font-semibold px-8 py-4">
                <span className="rounded-full shadow flex justify-center  overflow-hidden border-2 h-12 w-12 border-yellow-500">
                  <Image width={30} height={28} className=" w-10 h-10    " src={icon[5]} alt="" />
                </span>
                <span className="my-auto">Login</span>
              </a>
            </Link>
          </li>
          {navbarTabTitles.map((n, i) => {
            return (
              <div key={n}>
                <li className="flex font-display ">
                  <Link href="'/'+ navbarTabTitles[n].toLocaleLowerCase()" className="">
                    <a className="flex shadow w-full gap-6 text-lg text-emerald-600 hover:bg-gray-200 font-semibold px-8 py-4">
                      <span className="rounded-full shadow flex justify-center  overflow-hidden border-2 h-12 w-12 border-yellow-500">
                        <Image width={30} height={28} className=" w-10 h-10    " src={icon[i]} alt="" />
                      </span>
                      <span className="my-auto">{navbarTabTitles[i]}</span>
                    </a>
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default DropDownMobileSize;
