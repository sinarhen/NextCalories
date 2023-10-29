'use client'

import React, {ReactNode} from 'react';
import {twMerge} from "tailwind-merge";

interface ButtonProps {
  onClick?: () => void;
  onSubmit?: (e: any) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
                                         type,
                                         onClick,
                                         children,
                                         onSubmit,
                                         className,
                                         disabled
                                       }) => {
  return (
    <button
      className={twMerge(`
            px-3 py-1
            rounded-md  
            text-white
            bg-black 
            h-fit w-fit
            disabled:text-gray-400
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-lg
            active:outline
           
            `, className)}
      onClick={onClick}
      type={type}
      onSubmit={onSubmit}
      disabled={disabled}
    >
      {children}
    </button>
  )

}
export default Button;