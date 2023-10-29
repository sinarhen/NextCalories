import Button from "@/components/ui/button";
import React from "react";

const SearchRecipesSkeleton = () => {
  return (
    <>
      <div className={'flex w-full bg-cover bg-center items-center space-y-8 bg-gray-200 animate-pulse'}>
        <div className="w-full text-lg md:text-sm text-white h-full bg-black/60 md:py-40 sm:py-30 py-16 flex items-center">
          <div className="md:px-48 lg:px-72 px-14 h-full w-full flex flex-col items-center">
            <h1 className="font-bold text-gray-400 text-5xl md:text-4xl">
              Search Products
            </h1>

            {/* Input field with error handling */}
            <input
              disabled
              className=" w-full rounded-full mt-4 mb-0 text-black"
            />

            {/* Suggested items */}
            <div className='grid md:grid-cols-4 grid-cols-2 w-full mt-4 mb-2 gap-y-7'>
              <div className='w-20  self-center justify-self-center h-2 rounded bg-gray-300'>

              </div>
              <div className='w-20  self-center justify-self-center h-2 rounded bg-gray-300'>

              </div>
              <div className='w-20  self-center justify-self-center h-2 rounded bg-gray-300'>

              </div>
              <div className='w-20  self-center justify-self-center h-2 rounded bg-gray-300'>

              </div>
            </div>

            {/* More options menu */}
            <Button
              disabled
              className="bg-gray-300 text-gray-400 md:w-1/3 sm:w-1/2 w-full mt-2 rounded-full disabled:hover:translate-y-0"
            >
              Search
            </Button>
          </div>
        </div>
      </div>

    </>
  )
}

export default SearchRecipesSkeleton;