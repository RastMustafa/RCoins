import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import LazyNavbarDropDownMenu from "./DropDownMenu";
import { navbarTabTitles } from "../../public/assets/data/navbarTabTitles";
import { company } from "../../public/assets/data/companyTabData";
import { businesses } from "../../public/assets/data/businessesTabData";
import { individuals } from "../../public/assets/data/individualsTabData";
import { learn } from "../../public/assets/data/learnTabData";
import { explor } from "../../public/assets/data/explorTabData";
import { icon } from "../../public/assets/data/DropdownMenuIcons";
import DropDownMobileSize from "./DropDownMobileSize";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const catagories = [explor, learn, individuals, businesses, company];

  return (
    <nav className="flex font-header tracking-widest		 relative h-20 justify-center   border-b-2 border-teal-600    container mx-auto px-5 py-5">
      {/*========================== website logo START ==========================*/}
      <div className="w-20  rounded-full -z-10  top-4 mr-2  left-0 absolute">
        <Link href="/">
          <Image width={120} height={75} src="/RcoingLogo.png" alt="" />
        </Link>
      </div>
      {/******************************** website logo END ******************************* */}

      {/*========================== navbar catagories on large screen START ==========================*/}
      <ul className="hidden lg:flex my-auto   items-center h-8 space-x-5 ">
        {catagories.map((item, i) => {
          return (
            <LazyNavbarDropDownMenu
              key={`${item}_${i}`}
              explorTabData={catagories[i]}
              title={navbarTabTitles[i]}
            />
          );
        })}
      </ul>
      {/******************************** navbar catagories on large screen END ********************************/}

      {/*========================== login Btn START ==========================*/}
      <div className="hidden  lg:block top-6 w-20  mr-12  right-0 absolute">
        <button className="border-2 font-display border-emerald-600 rounded font-semibold font-sans   hover:bg-black transition-all duration-200  hover:text-white px-8 text-lg">
          Login
        </button>
      </div>
      {/******************************** login Btn END ********************************/}

      {/*========================== dropdown section on mobile screen  START ==========================*/}
      <div className="flex lg:hidden  bg-red-400">
        <a href="#" className="flex-none absolute right-0 px-5 z-30">
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="text-emerald-600  w-full font-semibold tracking-wide hover:bg-gray-900 hover:bg-opacity-30 rounded px-2 py-2"
          >
            {/* dropdown logo start */}
            <span className=" block w-6 border-b-2  border-emerald-600 "></span>
            <span className=" block  my-1 w-6 border-b-2 border-emerald-600 "></span>
            <span className=" block  w-4 border-b-2 border-emerald-600 "></span>
            {/* dropdown logo end */}
          </div>
        </a>
        <div className="w-full">
        {showMenu ? (
          <DropDownMobileSize navbarTabTitles={navbarTabTitles} icon={icon} />
        ) : (
          ""
        )}

        </div>
      </div>
      {/******************************* dropdown section on mobile screen END ********************************/}
    </nav>
  );
}

export default Navbar;
