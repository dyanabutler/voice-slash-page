import Image from "next/image";
import Main from "./components/Hero";
import Partners from "./components/Partners";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Section5 from "./components/Section5";

export default function Home() {
  return (
    <div className="bg-[#141414] dark:bg-[#F0F0F0] w-full min-h-screen relative">
      
      
      <main className="container mx-auto px-4 py-12 md:py-24 lg:py-32 relative z-10">
        <Main />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Reviews />
        <Footer />
      </main>
      <div className="fixed top-0 left-0 w-[300px] h-[300px] bg-[#2887C3] blur-[100px] opacity-50 dark:opacity-30 z-0" />
      <div className="fixed bottom-0 right-0 w-[300px] h-[300px] bg-[#2887C3] blur-[100px] opacity-50 dark:opacity-30 z-0" />
    </div>
  );
}
