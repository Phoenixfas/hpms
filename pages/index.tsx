import Image from "next/image";
import { Inter } from "next/font/google";
import TopSection from "./TopSection";
import MainBody from "./MainBody";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="blog min-h-screen p-16 pt-5">
        <TopSection />
        <MainBody />
    </div>
  );
}
