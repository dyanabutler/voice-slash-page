import React from 'react';
import Image from 'next/image';

const Section4: React.FC = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row ">
      <div className="flex flex-col justify-center p-4 md:p-6  border-t border-b border-r border-border">
        <div className="space-y-2">
          <h3 className="text-xl dark:text-black text-white font-bold ">Actionable & Consolidated Data </h3>
          <p className="text-muted-foreground dark:text-black text-white">
                     
             <br></br>
             The Voice Dashboard streamlines accessibility 
              <br></br>
              feedback offering actionable insights 
            <br></br>
            directly from lived patron experiences.
          </p>
        </div>
      </div>
      <div className="relative aspect-video  border-t border-b border-l border-border object-cover dark:text-black text-whitew-full md:w-[650px] h-auto">
      <div>
        <div>
        <Image
          src="https://ucarecdn.com/b32f09ef-86ed-4310-860b-3475071931c3/-/preview/808x434/"
          alt="Product Image"
          layout="fill"
          className="p-4 px-10"
        />
        </div>
    
        </div>
        
      </div>
    </div>
  );
};

export default Section4;
