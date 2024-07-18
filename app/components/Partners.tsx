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
  { src: "https://ucarecdn.com/17174945-ba31-4db1-95c2-6621837e4327/-/preview/540x462/", width: 100, height: 60, alt: "Logo 1" },
  { src: "https://ucarecdn.com/9fae6443-c418-4fa4-b7cb-1e393282c788/-/preview/712x353/", width: 160, height: 40, alt: "Logo 2" },
 
];

export default function Component() {
  return (
    <div className="flex justify-center bg-transparent rounded-xl  gap-8">
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
