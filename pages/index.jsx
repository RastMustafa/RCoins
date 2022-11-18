import Navbar from "../components/Navbar/Navbar";
import MainSection from "../components/Homepage/MainSection";
export default function Home() {
  return (
    <div>
      <div className="bg-[length:1000px_7px]  bg-[url('/bg.png')] ">
        <Navbar />
        <MainSection />
      </div>
      <div>hello</div>
    </div>
  );
}
