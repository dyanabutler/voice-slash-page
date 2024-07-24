"use client"
import { Button } from "@/components/ui/button";
import React from "react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-muted  px-4 mt-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm text-white text-muted-foreground">
          &copy; 2024 iAccess Life All Rights Reserved.
        </p>
        <Button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2  rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-primary-foreground  shadow transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          <ArrowUpIcon className="h-4 w-4 " />
          Back to Top
        </Button>
      </div>
    </footer>
  );
};

const ArrowUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
};

export default Footer;
