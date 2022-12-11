import Navbar from "../components/Navbar/Navbar";
import MainSection from "../components/Homepage/MainSection";
import ChartSection from "../components/ChartSection/ChartSection";
import CryptoTable from "../components/Table/CryptoTable";
import TradeFreeAction from "../components/TradeBitcoin/TradeFreeAction";
export default function Home() {
  return (
    <div className="bg-gray-0">
      <div className="  ">
        <Navbar />
        <MainSection />
      </div>
      <div className=" mb-24 py-12 px-5 overflow-hidden absolute w-full bg-gray-50 ">
        <ChartSection />
      </div>
      <div className="mt-[52rem] px-4  lg:mt-[35rem]">
        <CryptoTable />
      </div>
      <div className="mt-[8rem] w-full ">
        <TradeFreeAction />
      </div>
      <div className="mb-96"></div>
    </div>
  );
}
