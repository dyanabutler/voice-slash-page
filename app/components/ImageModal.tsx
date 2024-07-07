import React from 'react';
import Image from 'next/image';

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = () => {
    onClose();
  };

  const handleModalClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={handleBackgroundClick}
    >
      <div className="relative w-auto max-w-3xl" onClick={handleModalClick}>
        <button onClick={onClose} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
        <Image src={src} alt={alt} width={800} height={600} className="object-contain" />
      </div>
    </div>
  );
};

export default ImageModal;
