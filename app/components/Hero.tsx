"use client"
import React, { useState } from 'react';
import Link from "next/link"
import Image from "next/image"
import Partners from "./Partners"
import Modal from './Modal';
import CustomButton from './CustomButton';


const Hero: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 p-6 lg:p-12">
        <div className="max-w-md mx-auto">
          <header className="flex items-center mb-8">
            <Link href="#" className="mr-auto" prefetch={false}>
              <Image src="/logo2.png" alt="Logo" width={378} height={173} />
            </Link>
          </header>
          <div className="relative dark:text-black text-white mb-8">
            Every VOICE Matters: The Tech-Powered Feedback Solution for Venue Accessibility
          </div>
          <div className="grid gap-6  p-4 rounded-md0">
  <button
    onClick={handleOpenModal}
    className="relative rounded px-5 py-2.5 overflow-hidden group bg-[#00A7E0] hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
  >
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <span className="relative">Contact Us for a Demo</span>
  </button>
</div>
          <div className="m-6">
            <Partners />
          </div>
        </div>
      </div>
      <div className="flex-1 bg-transparent p-6 lg:p-12">
        <Image 
          src="/hero-image.png" 
          alt="Hero Image" 
          width={1200} 
          height={800} 
          className="w-full h-full object-contain"
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Hero;