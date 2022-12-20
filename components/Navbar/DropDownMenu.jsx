import Link from "next/link";
import React, { useState } from "react";

function DropDownMenu({ title, explorTabData }) {
  const [hoverOnTitle, setHoverOnTitle] = useState(false);
  const [contol, setContorl] = useState(true);
  const [contol2, setContorl2] = useState(true);

  function handleToggle() {
    setTimeout(() => {
      if (contol && contol2) {
        console.log(contol);
        setHoverOnTitle(false);
      }
    }, 1000);
  }

  return (
    <div className=" hover:block    sm:flex">
      <div
        onMouseEnter={() => {
          setTimeout(() => {
            setHoverOnTitle(true);
            setContorl(true);
            setContorl2(false);
          }, 10);
        }}
        onMouseLeave={() => handleToggle()}
        className="text-gray-900 text-lg font-display hover:border-b-2  border-emerald-600 z-10  ml-4  cursor-pointer relative  hover:text-emerald-800  font-semibold py-1 px-3 "
      >
        {title}
      </div>
      {hoverOnTitle ? (
        <div
          onMouseEnter={() => {
            setHoverOnTitle(true);
            setContorl2(false);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setHoverOnTitle(false);
              setContorl(false);
            }, 10);
          }}
          className={`absolute  bg-white hover:z-0  animate-fade  animate-fadeOut border-yellow-50 border-4   rounded-xl text-xl top-[5.4rem] left-0 w-full  p-4   shadow-xl `}
        >
          <div className="flex flex-wrap mx-auto  ">
            {explorTabData.map((item) => {
              return (
                <div
                  key={item.title}
                  className=" hover:bg-gray-200 rounded-lg font-display transform transition-all duration-1500 ease-out  sm:w-[20rem] lg:min-w-[30rem] flex  flex-row  my-2 items-center p-2 gap-4 "
                >
                  <img className=" border-2 shadow border-yellow-500 w-12  p-1 rounded-full" src={item.icon} alt="" />
                  <div className=" ">
                    <Link href="'/'+item.title.toLocaleLowerCase()">
                      <>
                        <h1 className="text-lg  font-semibold ">{item.title}</h1>
                        <p className="text-sm font-display">{item.description}</p>
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
