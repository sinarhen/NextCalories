'use client'


import React from "react";
import {twMerge} from "tailwind-merge";

interface DropdownMenuContentSectionProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
const DropdownMenuContentSection: React.FC<DropdownMenuContentSectionProps> = (
  {
    children,
    className,
    onClick
  }
) => {
  return (
    <div onClick={onClick} className={twMerge('py-4 cursor-pointer transition-colors bg-transparent flex items-center justify-center', className)}>
      {children}
    </div>
  )
}

export default DropdownMenuContentSection;