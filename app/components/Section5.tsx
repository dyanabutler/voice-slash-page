"use client";
import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import ImageModal from './ImageModal'; 

const Section5: React.FC = () => {
  const images = [
    { src: '/1.svg', title: 'Reputation Management' },
    { src: '/2.svg', title: 'Market Differentiation' },
    { src: '/3.svg', title: 'Improved Satisfaction & Loyalty' },
    { src: '/4.svg', title: 'Most Legal & Regulatory Requirements' },
    { src: '/5.svg', title: 'Increase Foot Traffic' },
    { src: '/6.svg', title: 'Identify Operational Inefficiences' },
  ];
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const handleOpenModal = (image: { src: string; title: string }) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="common-container">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:border-border lg:border-b lg:border-t">
        <div className="flex flex-col justify-center items-center  mx-2 lg:border-border lg:border-r">
          <Image src="https://ucarecdn.com/aa58cfc6-db9e-4e81-8c8f-26fdfe66de00/-/preview/999x560/" alt="Logo" width={278} height={73} className="mb-6" />
          <button
            onClick={() => handleOpenModal({ src: '/logo2.png', title: 'Logo' })}
            className="relative rounded px-5 py-2.5 overflow-hidden group bg-[#00A7E0] hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative text-[24px]">CONTACT US FOR A DEMO</span>
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-4 my-8 mx-8 rounded-xl ">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <div onClick={() => handleOpenModal(image)} className="cursor-pointer">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={300}
                  height={200}
                  className="object-contain w-full mb-4 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="flex text-center justify-center items-center inset-0 ">
                  <h3 className="text-white text-center font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.title}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )} */}
    </section>
  );
};

export default Section5;
