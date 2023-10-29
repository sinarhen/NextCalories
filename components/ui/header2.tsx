import React from "react";
import {twMerge} from "tailwind-merge";

const Header2 = ({children, className}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={twMerge('text-5xl md:text-3xl sm:text-4xl lg:text-2xl mt-12 md:mt-10 mb-1.5 font-bold', className)}>
      {children}
    </h1>

  )
}

export default Header2;