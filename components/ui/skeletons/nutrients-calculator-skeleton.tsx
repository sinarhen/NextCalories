
import React from "react";
import RecipePageContentSectionHeader from "@/components/ui/skeletons/recipe-page-content-section-header-skeleton";
import {AiOutlineCalculator} from "react-icons/ai";

const NutrientsCalculatorSkeleton = () => {
  return (

    <div
      className="col-span-8 row-span-2 sm:col-span-5 lg:col-span-4"
    >
      <RecipePageContentSectionHeader icon={AiOutlineCalculator}>
        Calculator
      </RecipePageContentSectionHeader>
      <div className="w-full mt-2 bg-gray-200 rounded gap-x-2">
        <div className=' flex px-5 pt-3 text-gray-400'>
          <h1 className='text-gray-400 bg-gray-400 rounded-xl'>Nutrients calculator</h1>
        </div>
        <div
          className='mt-1 px-5'
        >
          <div className='bg-gray-300 text-gray-300 w-full rounded-sm'>
            input
          </div>
        </div>
        <div className="px-5 grid grid-cols-5 w-full gap-x-2 md:gap-x-3 mt-3">
          <div className='text-gray-600 bg-gray-600 rounded px-2 py-1'>button</div>
          <div className='text-gray-600 bg-gray-600 rounded px-2 py-1'>button</div>
          <div className='text-gray-600 bg-gray-600 rounded px-2 py-1'>button</div>
          <div className='text-gray-600 bg-gray-600 rounded px-2 py-1'>button</div>
          <div className='text-gray-600 bg-gray-600 rounded px-2 py-1'>button</div>
        </div>
        <hr className='h-px mt-2 mb-3 bg-gray-400 px-1 border-0 '/>
        <div className='flex pb-3 justify-between'>
          <div className=' px-5 flex items-center w-full flex-col'>
            <h1 className='text-gray-500 bg-gray-500 rounded-xl'>result</h1>
            <p className='text-gray-400 mt-0.5 rounded-xl bg-gray-400'>0.00g</p>
          </div>
          <div className=' px-5 flex items-center w-full flex-col'>
            <h1 className='text-gray-500 bg-gray-500 rounded-xl'>result</h1>
            <p className='text-gray-400 mt-0.5 rounded-xl bg-gray-400'>0.00g</p>
          </div>
          <div className=' px-5 flex items-center w-full flex-col'>
            <h1 className='text-gray-500 bg-gray-500 rounded-xl'>result</h1>
            <p className='text-gray-400 mt-0.5 rounded-xl bg-gray-400'>0.00g</p>
          </div>
          <div className=' px-5 flex items-center w-full flex-col'>
            <h1 className='text-gray-500 bg-gray-500 rounded-xl'>result</h1>
            <p className='text-gray-400 mt-0.5 rounded-xl bg-gray-400'>0kcal</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default NutrientsCalculatorSkeleton