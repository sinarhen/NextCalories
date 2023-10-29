'use client';
import { RiArrowDropDownLine } from "react-icons/ri";
import { twMerge } from "tailwind-merge";
import React from "react";
import Button from "@/components/ui/button";

const MoreOptions = ({ children, onClick, setIsOpen, isOpen }: {
  children?: React.ReactNode;
  onClick: () => void;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) => {
  const toggleMenuIsOpen = () => {
    setIsOpen && setIsOpen(!isOpen);
  };
  return (
    <div className="flex mt-4 text-sm w-full flex-col items-center justify-center">
      <button onClick={toggleMenuIsOpen} className="flex text-gray-400 items-center justify-center w-full">
        <p>More options</p>
        <p>
          <RiArrowDropDownLine className={twMerge("transition-transform rotate-0", isOpen && "-rotate-90")} size={20} />
        </p>
      </button>
      <div className={twMerge("grid-cols-2 px-6 grid w-full md:grid-cols-3 gap-x-3 md:gap-x-5 gap-y-6 md:gap-y-2 max-h-0 p-0 overflow-y-hidden transition-all duration-500 opacity-0", isOpen && "opacity-100 max-h-72 py-4")}>
        {children}
        <div className="w-full h-full flex items-end justify-center">
          <Button onClick={onClick} className="bg-white text-black w-full rounded-full">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MoreOptions;
