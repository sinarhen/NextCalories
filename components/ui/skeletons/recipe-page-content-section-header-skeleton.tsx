import React from "react";
import {IconType} from "react-icons";

const RecipePageContentSectionHeaderSkeleton = ({icon, children}: {
  icon: IconType;
  children: React.ReactNode;
}) => {
  const Icon = icon;
  return (
      <h1 className='flex gap-x-2 items-center
            text-5xl sm:text-4xl md:text-3xl lg:text-2xl
            text-gray-400
            '><span><Icon className='w-full h-full'/></span>{children}</h1>

  )
}

export default RecipePageContentSectionHeaderSkeleton;