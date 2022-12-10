import Navbar from "../components/Navbar/Navbar";
import MainSection from "../components/Homepage/MainSection";
import ChartSection from "../components/ChartSection/ChartSection";
import CryptoTable from "../components/Table/CryptoTable";
export default function Home() {
  return (
    <div>
      <div className="  ">
        <Navbar />
        <MainSection />
      </div>
      <div className=" mb-24 py-12 px-5 overflow-hidden absolute w-full bg-whitish ">
        <ChartSection />
      </div>
      <div className="mt-[52rem] px-4  lg:mt-[35rem]">
        <CryptoTable />
      </div>
      <div className="mb-96"></div>
    </div>
  );
}
