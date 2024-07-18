"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';

const Section2: React.FC = () => {
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
    <div className="common-container flex flex-col justify-center md:flex-row w-full lg:border-t lg:border-b lg:border-border">
      <div className="flex flex-col justify-center p-4 md:p-6 lg:border-border lg:border-r">
      <div className="space-y-2">
          <h3 className="text-xl dark:text-black text-white font-bold">Unlock Insights</h3>
          <div className="text-muted-foreground dark:text-black text-white max-w-lg">
            <p>
              With a quick scan of a QR code, Voice revolutionizes daily
              experiences for individuals with disabilities
              and their communities through a proactive, centralized platform.<br /><br />
              Voice is a patron feedback tool specifically designed
              to gather critical accessibility feedback
              about services and accommodations provided by
              a public establishment.
            </p>
          </div>
        </div>
      </div>
      <div className="relative aspect-video lg:border-l lg:border-border object-cover dark:text-black text-white w-full md:w-[650px] h-auto">
        <div onClick={() => handleOpenModal({ src: 'https://ucarecdn.com/d3ef8d35-ec14-4ef8-916e-ad81dc146453/-/preview/755x432/', title: 'Product Image' })} className="cursor-pointer">
          <Image
            src="https://ucarecdn.com/d3ef8d35-ec14-4ef8-916e-ad81dc146453/-/preview/755x432/"
            alt="Product Image"
            layout="fill"
            className="p-8 px-10 "
          />
        </div>
      </div>
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.title}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Section2;
