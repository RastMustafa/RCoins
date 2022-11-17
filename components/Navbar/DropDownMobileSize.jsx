import React from "react";
import Link from "next/link";
function DropDownMobileSize({navbarTabTitles,icon}) {
  return (
    <>
      <div className="absolute right-0 z-20 w-full px-5 mt-16 transition">
        <ul className="flex flex-col bg-white w-full rounded shadow-md overflow-hidden">
          <li className="flex">
            <h3 className="flex flex-1 text-emerald-600 font-semibold px-5 py-4">
              Navigation
            </h3>
          </li>
          <li className="flex border-t">
            <Link
              href="/login"
              className="flex flex-1 text-lg text-emerald-600 hover:bg-gray-200 font-semibold px-8 py-4"
            >
              <img
                className=" border-2 w-8 mr-6  my-auto  p-1 rounded-full"
                src={icon[5]}
                alt=""
              />
              <span className="my-auto">Login</span>
            </Link>
          </li>
          {navbarTabTitles.map((n, i) => {
            return (
              <div key={n}>
                <li className="flex ">
                  <Link
                    href="'/'+ navbarTabTitles[n].toLocaleLowerCase()"
                    className="flex flex-1 text-lg text-emerald-600 hover:bg-gray-200 font-semibold px-8 py-4"
                  >
                    <img
                      className=" border-2 w-8 mr-6  my-auto  p-1 rounded-full"
                      src={icon[i]}
                      alt=""
                    />
                    <span>{navbarTabTitles[i]}</span>
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
