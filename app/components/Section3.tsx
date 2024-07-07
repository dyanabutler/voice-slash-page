"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';

const Section3: React.FC = () => {
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
    <div className="common-container flex flex-col justify-center dark:text-black text-white md:flex-row lg:border-border">
      <div className="relative aspect-[9/16] dark:text-black text-white w-full md:w-[375px] h-auto">
        <div onClick={() => handleOpenModal({ src: 'https://ucarecdn.com/9c6ee463-fc2c-4d75-adaf-4d547159c9d9/-/preview/371x650/', title: 'Product Image' })} className="cursor-pointer">
          <Image
            src="https://ucarecdn.com/9c6ee463-fc2c-4d75-adaf-4d547159c9d9/-/preview/371x650/"
            alt="Product Image"
            layout="fill"
            className="rounded-md object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-[375px] bg-card p-4 md:p-6 lg:border-border lg:border-l lg:border-r flex flex-col justify-center">
        <div className="space-y-2 m-4">
          <h3 className="text-xl mb-8 font-bold">Capture Valuable Accessibility Insights</h3>
          <p className="text-muted-foreground">
            Capture real-time insights by encouraging individuals to share their accessibility experience, allowing your businesses to make informed and inclusive enhancements to premises and resources.
          </p>
        </div>
      </div>
      <div className="relative aspect-[9/16] lg:border-border lg:border-l w-full md:w-[375px] h-auto">
        <div onClick={() => handleOpenModal({ src: 'https://ucarecdn.com/9c6ee463-fc2c-4d75-adaf-4d547159c9d9/-/preview/371x650/', title: 'Product Image' })} className="cursor-pointer">
          <Image
            src="https://ucarecdn.com/9c6ee463-fc2c-4d75-adaf-4d547159c9d9/-/preview/371x650/"
            alt="Product Image"
            layout="fill"
            className="rounded-md object-cover"
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

export default Section3;
