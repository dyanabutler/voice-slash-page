import React from 'react';
import Image from 'next/image';

const Section2: React.FC = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row ">
      <div className="flex flex-col justify-center p-4 md:p-6  border-t border-b border-r border-border">
        <div className="space-y-2">
          <h3 className="text-xl dark:text-black text-white font-bold">Unlock Insights</h3>
          <p className="text-muted-foreground dark:text-black text-white">
                     
             <br></br>
             With a quick scan of a QR code, Voice revolutionizes daily 
             <br></br>
             experiences for individuals with disabilities 
             <br></br>
             and their communities through a proactive, centralized platform.
             <br></br>
             <br></br>

             Voice is a patron feedback tool specifically designed 
             <br></br>
             to gather critical accessibility feedback 
             <br></br>
             about services and accommodations provided by 
             <br></br>
             a public establishment.
          </p>
        </div>
      </div>
      <div className="relative aspect-video  border-t border-b border-l border-border object-cover dark:text-black text-whitew-full md:w-[650px] h-auto">
      
        <Image
          src="https://ucarecdn.com/d3ef8d35-ec14-4ef8-916e-ad81dc146453/-/preview/755x432/"
          alt="Product Image"
          layout="fill"
          className="p-8 px-10"
        />
        
      </div>
    </div>
  );
};

export default Section2;
