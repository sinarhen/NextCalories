'use client'
import React from "react";
import {AiFillHeart} from "react-icons/ai";
import {useRouter} from "next/navigation";

const RecipePageHeaderSkeleton = () => {
  const router = useRouter();

  return (
  <div className='flex flex-col px-3 sm:px-8 md:px-14 py-6 bg-gray-300 animate-pulse h-full w-full'>
    <button className='text-gray-400 flex animate-pulse  rounded-xl' onClick={() => router.back()}>Back to search</button>
    <div className='flex h-full w-full px-10 sm:px-20 md:px-40 gap-y-5 pb-10 items-center flex-col'>
      <div className='w-full  mt-5'>
        <div className='w-full justify-between items-center flex'>
          <div className='text-gray-400 items-center flex gap-x-1 text-sm'>
            <p className='w-24 h-4 rounded-xl bg-gray-400'>

            </p>
            <p>/</p>
            <p className='w-24 h-4 rounded-xl bg-gray-400'>

            </p>
            <p>/</p>
            <p className='w-24 h-4 rounded-xl bg-gray-400'>

            </p>

          </div>
          <AiFillHeart className='text-gray-400' size={20}/>
        </div>
        <div className='mt-2'>
          {/* Recipe title and calorie information */}
          <div className='md:justify-start md:w-11/12 w-full h-10 text-gray-400 bg-gray-400 rounded-2xl lg:justify-start'></div>
          <div className='mt-1.5 md:justify-start md:w-1/2 w-3/4 h-10 text-gray-400 bg-gray-400 rounded-2xl lg:justify-start'></div>
          <div className='mt-2 bg-gray-400 h-4 w-[16%] rounded-xl'>
          </div>
        </div>
      </div>
      {/* Fat, Carbohydrates, and Protein information */}
      <div className='w-full flex justify-between'>
          <p className='bg-gray-400 h-5 w-32 rounded-xl'></p>
          <p className='bg-gray-400 h-5 w-32 rounded-xl'></p>
          <p className='bg-gray-400 h-5 w-32 rounded-xl'></p>
      </div>
      {/* Display additional recipe information using ProductPageHeaderPoint */}
      <div className='grid grid-cols-12 gap-x-2 grid-rows-3 w-full h-20 text-sm' >
        <div className='col-span-1'>
          <div className='h-4 w-full bg-gray-400 rounded-full'>
          </div>
        </div>
        <div className='flex w-full col-span-2 gap-x-1'>

          <div className='h-4 bg-gray-400 rounded-xl w-full'>
          </div>
        </div>
        <div className='col-span-9 w-11/12 bg-gray-400 rounded-full h-4'>

        </div>

        <div className='col-span-1'>

        </div>
        <div className='col-span-2 w-10/12 bg-gray-400 rounded-full h-4'>

        </div>
        <div className='col-span-9 h-4 bg-gray-400 w-full rounded-xl'>

        </div>
        <div className='col-span-3'>

        </div>
        <div className='col-span-9 h-4 bg-gray-400 w-3/4 rounded-xl'>

        </div>
        </div>
      <div className='grid grid-cols-12 gap-x-2 grid-rows-3 w-full h-20 text-sm' >
        <div className='col-span-1'>
          <div className='h-4 w-full bg-gray-400 rounded-full'>
          </div>
        </div>
        <div className='flex w-full col-span-2 gap-x-1'>

          <div className='h-4 bg-gray-400 rounded-xl w-full'>
          </div>
        </div>
        <div className='col-span-9 w-11/12 bg-gray-400 rounded-full h-4'>

        </div>

        <div className='col-span-1'>

        </div>
        <div className='col-span-2 w-10/12 bg-gray-400 rounded-full h-4'>

        </div>
        <div className='col-span-9 h-4 bg-gray-400 w-full rounded-xl'>

        </div>
        <div className='col-span-3'>

        </div>
        <div className='col-span-9 h-4 bg-gray-400 w-3/4 rounded-xl'>

        </div>
      </div>
      <p className='self-end text-gray-400 '>See full recipe on</p>

    </div>

    </div>

  )
}

export default RecipePageHeaderSkeleton;