'use client';

import React from "react";
import {twMerge} from "tailwind-merge";
import './css/skewed.css';
const SearchRecipesSkewedSection = ({
  children,
  wrapperClassName,
  id
}: {
  children: React.ReactNode;
  wrapperClassName?: string;
  id?: string;
}) => {
  return (
    <div className='w-full h-full relative'>

      <div id={id} className='w-full h-full relative '>

        <div className={twMerge('md:skew-x-12 text-white flex w-full h-full flex-col py-24 left-0 md:items-center items-start', wrapperClassName)}>
          {/*<div className='w-full h-full text-red-700 items-center flex justify-center'>*/}
          {/*    <p>*/}
          {/*      dsadsad*/}
          {/*    </p>*/}
          {/*</div>*/}

        </div>
      </div>

      <div className='-skew-x-12 origin-left flex w-full h-full md:items-center'>
        <div className={twMerge('skew-x-12 flex w-full h-full flex-col py-24 px-2 left-0 md:items-center items-start', wrapperClassName)}>
          {children}
        </div>
      </div>
    </div>
  )

}

export default SearchRecipesSkewedSection;