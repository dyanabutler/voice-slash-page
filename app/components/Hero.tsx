"use client";
import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import Partners from "./Partners";
import Modal from './Modal';
import CustomButton from './CustomButton';

const Hero: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 p-6 lg:p-12">
        <div className="max-w-md mx-auto">
          <header className="flex items-center mt-8">
            <Link href="#" className="mr-auto mb-8">
              <Image 
                src="https://ucarecdn.com/aa58cfc6-db9e-4e81-8c8f-26fdfe66de00/-/preview/999x560/" 
                alt="Logo" 
                width={378} 
                height={173} 
                className={`transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoadingComplete={() => setImageLoaded(true)}
              />
            </Link>
          </header>
          <div className="relative mx-4 my-4">
            <h1 className="text-[36px] font-bold text-white dark:text-black mb-4 text-shadow-lg">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Every VOICE Matters
              </span>
            </h1>
            <p className="text-[24px] text-white dark:text-black">
              The Tech-Powered Feedback Solution for Venue Accessibility
            </p>
          </div>
          <div className="grid gap-6 p-4 rounded-md">
            <button
              onClick={handleOpenModal}
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-[#00A7E0] hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative text-[22px]">CONTACT US FOR A DEMO</span>
            </button>
          </div>
          <div className="">
            {/* <Partners /> */}
          </div>
        </div>
      </div>
      <div className="flex-1 bg-transparent p-6 lg:p-12">
        <Image 
          src="https://ucarecdn.com/557a273a-070c-4324-811f-eae46d7c45db/-/preview/1000x905/" 
          alt="Hero Image" 
          width={1000} 
          height={500} 
          className={`transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Hero;
