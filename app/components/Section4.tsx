"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';

const Section4: React.FC = () => {
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
    <div className="common-container flex flex-col justify-center md:flex-row w-full lg:border-t lg:border-border">
      <div className="flex flex-col justify-center p-4 md:p-6 lg:border-border lg:border-r">
        <div className="space-y-2">
          <h3 className="text-[36px] dark:text-black text-[#00A7E0] font-bold">Actionable & Consolidated Data</h3>
          <p className="text-muted-foreground dark:text-black text-white text-[20px] max-w-lg">
            
            The Voice Dashboard streamlines accessibility feedback
            
            offering actionable insights directly from lived patron experiences.
          </p>
        </div>
      </div>
      <div className="relative aspect-video object-cover dark:text-black text-white w-full md:w-[650px] h-auto">
        <div onClick={() => handleOpenModal({ src: 'https://ucarecdn.com/b32f09ef-86ed-4310-860b-3475071931c3/-/preview/808x434/', title: 'Product Image' })} className="cursor-pointer">
          <Image
            src="https://ucarecdn.com/e5910d0c-206e-4df7-9be6-7cb685626933/-/preview/1000x589/"
            alt="Product Image"
            layout="fill"
            className="p-8 px-10"
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

export default Section4;
