import React from "react";
import {twMerge} from "tailwind-merge";

const DropdownMenuContent = ({
    children,
    visible,
    className
}: {
    children: React.ReactNode;
    visible: boolean;
    className?: string;
}) => {
    if (!visible){
        return null;
    }
    return (
      <div className='relative w-full'>
          <div className={twMerge('s md:hidden shadow-2xl backdrop-blur-md hover:bg-white bg-white/30 w-full', className)}>
              {children}
          </div>
      </div>

    )
}

export default DropdownMenuContent;