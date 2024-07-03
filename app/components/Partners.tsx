/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VoGCX8JxbQh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from 'next/image';
import React from 'react';

interface Logo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const logos: Logo[] = [
  { src: "/passportparking.png", width: 160, height: 40, alt: "Logo 1" },
  { src: "/zooatlanta.png", width: 100, height: 40, alt: "Logo 2" },
 
];

export default function Component() {
  return (
    <div className="flex justify-center bg-transparent rounded-xl  gap-6">
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          width={logo.width}
          height={logo.height}
          alt={logo.alt}
          className="transition-opacity duration-300 hover:opacity-50"
        />
      ))}
    </div>
  );
}
