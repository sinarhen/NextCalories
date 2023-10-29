'use client';

const RecipeCardSkeleton = () => {
  return (
    <div
      className='overflow-hidden bg-gray-300 animate-pulse border-gray-100 flex items-end md:h-[320px] h-[512px]  w-full shadow-lg rounded'>

      <div className='px-2 h-fit flex flex-col gap-y-1.5 animate-pulse py-1 w-full'>
        <div className='w-1/5 rounded-3xl h-4 bg-gray-400 animate-pulse'></div>
        <div className='w-3/4 rounded-xl h-9 bg-gray-400 animate-pulse'></div>
        <div className='w-11/12 h-3 mt-4 rounded-full bg-gray-400'></div>
        <div className='w-11/12 h-3 bg-gray-400 rounded-full '></div>
        <div className='w-11/12 h-3 bg-gray-400 rounded-full '></div>
        <div className='w-11/12 h-3 bg-gray-400 rounded-full '></div>
        <div className='w-11/12 h-3 bg-gray-400 rounded-full '></div>
        <div className='w-full mt-2 grid grid-cols-3 gap-x-4'>
          <div className='bg-gray-400 h-8 rounded-xl'></div>
          <div className='bg-gray-400 h-8 rounded-xl'></div>
          <div className='bg-gray-400 h-8 rounded-xl'></div>

        </div>
      </div>
    </div>
    )
}

export default RecipeCardSkeleton;