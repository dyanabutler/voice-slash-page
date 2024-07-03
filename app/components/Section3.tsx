import React from 'react';
import Image from 'next/image';

const Section3: React.FC = () => {
  return (
    <div className="flex flex-col justify-center dark:text-black text-white md:flex-row">
      <div className="relative aspect-[9/16] dark:text-black text-white border-border border-r w-full md:w-[375px] h-auto">
        <Image
          src="/mobile.png"
          alt="Product Image"
          layout="fill"
          className="rounded-md object-cover"
          
        />
      </div>
      <div className="w-full md:w-[375px] bg-card p-4 md:p-6 border-border border-t border-l border-r border-b flex flex-col justify-center">
        <div className="space-y-2 m-4 ">
          <h3 className="text-xl  mb-8 font-bold">Capture Valuable Accessibility
          Insights</h3>
          <p className="text-muted-foreground">
          Capture real-time insights by encouraging individuals to share their accessibility experience, allowing your businesses to make informed and inclusive enhancements to premises and resources.
          </p>
        </div>
      </div>
      <div className="relative aspect-[9/16] border-border border-l w-full md:w-[375px] h-auto">
        <Image
          src="/mobile.png"
          alt="Product Image"
          layout="fill"
          className="rounded-md  object-cover"
          
        />
      </div>
    </div>
  );
};

export default Section3;
