import React from "react";
import Link from "next/link";

const SeeMoreWrapper = ({children}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className='relative flex w-full h-full'>
      {children}
      <div className='absolute flex items-end bg-white/30 w-full z-30 h-full  '>
        <div className='w-full flex items-center justify-center h-3/4 translate-y-7 bg-gradient-to-t from-white via-white via-35% to-transparent md:h-3/4 '>

          <Link href={'/recipes'}>
            <h1 className='text-3xl hover:-translate-y-2 transition-transform md:text-2xl lg:text-xl'>
              See more...
            </h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SeeMoreWrapper;