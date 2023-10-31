'use client'

import React from "react";
import {twMerge} from "tailwind-merge";

const PageContainer = ({
  children,
  className,
                       }: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge('py-12 flex flex-col max-w-full min-w-full overflow-hidden w-full h-full items-center justify-center lg:py-16 md:py-12 p-5 sm:px-10 md:px-16 lg:px-24', className)}>
      {children}
    </div>
  )
};

export default PageContainer;