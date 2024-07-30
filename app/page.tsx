import { Suspense } from 'react';

import Loading from './loading';
import React from 'react';
const Hero = React.lazy(() => import('./components/Hero'));
const Partners = React.lazy(() => import('./components/Partners'));
const Section2 = React.lazy(() => import('./components/Section2'));
const Section3 = React.lazy(() => import('./components/Section3'));
const Section4 = React.lazy(() => import('./components/Section4'));
const Reviews = React.lazy(() => import('./components/Reviews'));
const Footer = React.lazy(() => import('./components/Footer'));
const Section5 = React.lazy(() => import('./components/Section5'));
const Navbar = React.lazy(() => import('./components/Navbar'));



  
  export default async function Home() {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return (
      <div className="bg-[#141414] dark:bg-[#F0F0F0] w-full min-h-screen relative">
        <main className="container mx-auto px-4 py-12 md:py-24 lg:py-32 relative z-10 ">
          <Suspense fallback={<Loading />}>
            <Hero />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Reviews />
            <Footer />
          </Suspense>
        </main>
        <div className="fixed top-0 left-0 w-[300px] h-[300px] bg-[#2887C3] blur-[100px] opacity-50 dark:opacity-30 z-0" />
        <div className="fixed bottom-0 right-0 w-[300px] h-[300px] bg-[#2887C3] blur-[100px] opacity-50 dark:opacity-30 z-0" />
      </div>
    );
  }
  