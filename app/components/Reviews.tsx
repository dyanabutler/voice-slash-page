import React from 'react';
import Image from 'next/image';

const Reviews: React.FC = () => {
  return (
    <div className="relative mt-16">
      <div className="flex flex-col md:flex-row items-center p-4 mt-6 rounded-sm bg-card shadow-sm max-w-xl mx-auto group hover:ring-2 hover:ring-blue-500 transition-all duration-300">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image 
            src="https://ucarecdn.com/17174945-ba31-4db1-95c2-6621837e4327/-/preview/540x462/" 
            alt="Product Image" 
            width={200} 
            height={200} 
            className="rounded-lg object-cover" 
          />
        </div>
        <div className="flex-1 space-y-4 text-white">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">The Zoo</h3>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl
              aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-amber-400">
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default Reviews;
