import Image from "next/image";
import Services from "./components/Services";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Clients from "./components/Clients";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#0d1016] min-h-screen">
      <NavBar />
      <About />
      <Clients />
      <Services />
    </div>
  );
}
