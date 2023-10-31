import React from "react";
import {twMerge} from "tailwind-merge";

const Header = ({children, className}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={twMerge(' md:text-center text-5xl md:text-3xl sm:text-4xl  mt-2 font-extrabold lg:text-2xl', className)}>
      {children}
    </h1>

  )
}

export default Header;