import Navbar from "../components/Navbar/Navbar";
import MainSection from "../components/Homepage/MainSection";
import ChartSection from "../components/ChartSection/ChartSection";
import CryptoTable from "../components/Table/CryptoTable";
import TradeFreeAction from "../components/TradeBitcoin/TradeFreeAction";
import Footer from "../components/Footer/Footer";
export default function Home() {
  return (
    <div className="bg-gray-0">
      <div className="  layer1 bg-cover spacer">
        <Navbar />
        <MainSection />
      </div>
      <div className="   layer2 spacer lg:mt-0 mt-24  px-2  md:px-5 mx-0   w-full  ">
        <ChartSection />
      </div>
      <div className="   layer3 bg-cover lg:pt-0 pt-36  spacer  px-5 mx-0   w-full">
        <CryptoTable />
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
