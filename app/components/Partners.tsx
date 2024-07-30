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

export default function Partners() {
  return (
    <section className="w-full py-4 md:py-8 lg:py-4">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter text-[#00A7E0] sm:text-4xl md:text-5xl">BECOME ONE OF OUR PARTNERS</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-white md:text-xl lg:text-base xl:text-xl">
            Join our network of trusted partners and help us deliver the best solutions to our customers.
          </p>
        </div>
        <div className="grid grid-cols-2 items-center justify-center gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {logos.map((logo, index) => (
            <div key={index} className="flex w-full items-center justify-center">
              <Image
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
                className="aspect-[2/1] w-full max-w-full overflow-hidden rounded-lg object-contain object-center "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
