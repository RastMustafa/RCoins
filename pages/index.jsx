import Navbar from "../components/Navbar/Navbar";
import MainSection from "../components/Homepage/MainSection";
import TradeFreeAction from "../components/TradeBitcoin/TradeFreeAction";
import Footer from "../components/Footer/Footer";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Table = dynamic(() => import("../components/Table/MockData"), {
  suspense: true,
});
const Chart = dynamic(() => import("../components/ChartSection/ChartSection"), {
  suspense: true,
});

export default function Home() {
  return (
    <div className="bg-gray-0">
      <div className="  layer1 bg-cover spacer">
        <Navbar />
        <MainSection />
      </div>

      <h1 className="  text-2xl md:text-4xl xl:text-5xl  mb-24 mt-36 lg:mt-36 xl:mt-24 2xl:mt-0 xl:mb-12 w-full text-center px-12    font-semibold font-display ">
        <span>Today's Cryptocurrency Prices by Market Cap</span>
      </h1>
      <div className=" relative md:pb-[14rem] 2xl:h-[40rem] layer2 spacer lg:mt-12 mt-24  px-2  md:px-5 mx-0   w-full  ">
        <Suspense fallback={`Loading...`}>
          <Chart />
        </Suspense>
      </div>

      <div className="   layer3 bg-cover lg:pt-0 pt-36  spacer  px-5 mx-0   w-full">
        <h1 className=" mb-[3rem] text-2xl md:text-4xl xl:text-5xl   w-full text-center px-12    font-semibold font-display ">
          <span> Buy, Trade, And Hold 350+ Cryptocurrencies</span>
        </h1>
        <Suspense fallback={`Loading...`}>
          <Table />
        </Suspense>
      </div>

      <div className="mt-[8rem] relative layer4 spacer  w-full ">
        <TradeFreeAction />
      </div>
      <div className="w-full relative bg-yellow-50">
        <Footer />
      </div>
    </div>
  );
}
