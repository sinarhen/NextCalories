import React from "react";
import {twMerge} from "tailwind-merge";

const Header = ({children, className}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={twMerge(' md:text-center text-7xl md:text-5xl sm:text-4xl mt-2 mb-5 font-extrabold lg:text-3xl', className)}>
      {children}
    </h1>

  )
}

export default Header;