

import Image from 'next/image';
import React from 'react';

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin">
          <LoaderPinwheelIcon className="h-8 w-8 text-primary" />
        </div>
        <div className="animate-fade-in">
          <Image
            src="https://ucarecdn.com/aa58cfc6-db9e-4e81-8c8f-26fdfe66de00/-/preview/999x560/"
            alt="Loading Image"
            width={999}
            height={560}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

function LoaderPinwheelIcon(props) {
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
    >
      <path d="M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5 2.2 5 5 5 5-2.2 5-5" />
      <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
      <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
