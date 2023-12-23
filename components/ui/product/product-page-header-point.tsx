import {IconType} from "react-icons";
import React from "react";

const ProductPageHeaderPoint = ({
                                 icon: Icon,
                                 label,
                                 children
                               }: {
  icon: IconType;
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className='flex text-sm gap-x-2 w-full'>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <div className='flex gap-x-1 h-min items-center text-sm'>
        <p><Icon/></p>

        <p>{label}: </p>
      </div>
      <p className='text-gray-400'>{children}</p>
    </div>
  )
}

export default ProductPageHeaderPoint;