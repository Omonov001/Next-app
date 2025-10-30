import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

export default function Home() {
  return <>
  <div className="w-screen h-auto bg-black">
    <Navbar/>
    <Main/>
    <Footer/>
  </div>
  </>;
}
