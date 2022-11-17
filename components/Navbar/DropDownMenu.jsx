import Link from "next/link";
import React, { useState } from "react";

function DropDownMenu({ title, explorTabData }) {
  const [hoverOnTitle, setHoverOnTitle] = useState(false);
  const [contol, setContorl] = useState(true);
  return (
    <div className=" hover:block    sm:flex">
      <div
        onMouseEnter={() => {
          setTimeout(() => {
            setHoverOnTitle(true);
          }, 100);
        }}
        onMouseLeave={() => {
          if (contol) {
            setTimeout(() => {
              setHoverOnTitle(false);
            }, 200);
          }
        }}
        className="text-gray-900  hover:border-b-2  border-emerald-600 z-10  ml-4 font-quicksand cursor-pointer relative  hover:text-emerald-800 text font-semibold py-1 px-3 "
      >
        {title}
      </div>
      {hoverOnTitle ? (
        <div
          onMouseEnter={() => {
            setTimeout(() => {
              setContorl(false);
            }, 20);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setHoverOnTitle(false);
            }, 10);
          }}
          className={`absolute  bg-white hover:z-0  animate-fade  animate-fadeOut border-emerald-600 border-2   rounded-xl text-xl top-[5.4rem] left-0 w-full  p-4   shadow-xl `}
        >
          <div className="flex flex-wrap mx-auto  ">
            {explorTabData.map((item) => {
              return (
                <div
                  key={item.title}
                  className=" hover:bg-gray-200 rounded-lg transform transition-all duration-1500 ease-out  sm:w-[20rem] lg:min-w-[30rem] flex  flex-row  my-2 items-center p-2 gap-4 "
                >
                  <img
                    className=" border-2 w-12  p-1 rounded-full"
                    src={item.icon}
                    alt=""
                  />
                  <div className=" ">
                    <Link href="'/'+item.title.toLocaleLowerCase()">
                      <>
                        <h1 className="text-lg">{item.title}</h1>
                        <p className="text-sm">{item.description}</p>
                      </>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DropDownMenu;
