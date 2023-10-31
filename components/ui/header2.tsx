'use client'
import React from "react";
import {twMerge} from "tailwind-merge";

const Header2 = ({children, className}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={twMerge('text-3xl md:text-xl sm:text-2xl lg:text-lg font-bold', className)}>
      {children}
    </h1>

  )
}

export default Header2;