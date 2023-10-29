'use client';

import React from "react";
import {twMerge} from "tailwind-merge";
interface ButtonButtonBorderProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

const ButtonBottomBorder: React.FC<ButtonButtonBorderProps> = ({
        onClick,
        children,
        className
   }) => {
    return (
        <div onClick={onClick} className={twMerge('items-center justify-center flex', className)}>
            <div className='relative cursor-pointer group'>
                <button className="border-0 group-hover:-translate-y-1.5 transition-all duration-500">
                    {children}
                </button>

              <div className='
                transition-all
                duration-75
                absolute
                border-b-blue-800
                border-0
                w-full
                group-active:border-b-2
                group-hover:border-b-2'>
              </div>
            </div>
        </div>

    );
}
export default ButtonBottomBorder;