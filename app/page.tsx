"use client"
import { Suspense } from 'react';
import React from 'react';
import Loading from './loading';
import useImageLoader from './hooks/useImageLoader'; 

const Hero = React.lazy(() => import('./components/Hero'));
const Partners = React.lazy(() => import('./components/Partners'));
const Section2 = React.lazy(() => import('./components/Section2'));
const Section3 = React.lazy(() => import('./components/Section3'));
const Section4 = React.lazy(() => import('./components/Section4'));
const Reviews = React.lazy(() => import('./components/Reviews'));
const Footer = React.lazy(() => import('./components/Footer'));
const Section5 = React.lazy(() => import('./components/Section5'));
const Navbar = React.lazy(() => import('./components/Navbar'));

export default function Home() {
  const images = [
    "https://ucarecdn.com/aa58cfc6-db9e-4e81-8c8f-26fdfe66de00/-/preview/999x560/" ,
    'https://ucarecdn.com/d3ef8d35-ec14-4ef8-916e-ad81dc146453/-/preview/755x432/',
    "https://ucarecdn.com/1f27e385-9f0a-4114-8be6-2e160a8b383d/-/preview/1000x541/",
    "https://ucarecdn.com/44c41ac9-60fb-4b19-87ae-bed6081b1a09/-/preview/576x1000/",
    'https://ucarecdn.com/029f598e-bc24-4e83-8344-b3072092c794/-/preview/576x1000/',
    "https://ucarecdn.com/029f598e-bc24-4e83-8344-b3072092c794/-/preview/576x1000/",
    "https://ucarecdn.com/aa58cfc6-db9e-4e81-8c8f-26fdfe66de00/-/preview/999x560/",

  ];

  const imagesLoaded = useImageLoader(images);

  return (
    <div className="bg-[#141414] w-full min-h-screen relative">
      {!imagesLoaded ? (
        <div className='mx-auto px-4 py-12 md:py-24 lg:py-32'>
        <Loading />
        </div>
      ) : (
        <main className="container mx-auto px-4 py-12 md:py-24 lg:py-32 relative z-10 animate-fade-in">
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
      )}
      <div className="fixed top-0 left-0 w-[300px] h-[300px] bg-[#2887C3] blur-[100px] opacity-50 dark:opacity-30 z-0" />
      <div className="fixed bottom-0 right-0 w-[300px] h-[300px] bg-[#2887C3] blur-[100px] opacity-50 dark:opacity-30 z-0" />
    </div>
  );
}
