'use client'

import React from "react";
import {twMerge} from "tailwind-merge";

interface FooterSectionProps {
  children: React.ReactNode;
  className?: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({
  children,
  className,
                                           }) => {
  return (
    <div className={twMerge('w-full flex flex-col ', className)}>

      {children}
    </div>
  )
}

export default FooterSection;