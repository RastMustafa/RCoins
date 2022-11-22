import Navbar from "../components/Navbar/Navbar";
import MainSection from "../components/Homepage/MainSection";
import ChartSection from "../components/ChartSection/ChartSection";
export default function Home() {
  return (
    <div>
      <div className="  ">
        <Navbar />
        <MainSection />
      </div>
      <div className=" absolute w-full bg-whitish ">
        <ChartSection />
      </div>
      <div className="mb-96"></div>
    </div>
  );
}
