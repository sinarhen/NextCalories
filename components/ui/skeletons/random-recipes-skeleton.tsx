'use client';

import RecipeCardSkeleton from "@/components/ui/skeletons/recipe-card-skeleton";
import React from "react";
import Header from "@/components/ui/header";

const RandomRecipesSkeleton = () => {
  return <>
      <div className='w-full h-full animate-pulse flex justify-center flex-col '>

          <Header className='h-full sm:pb-1.5 pb-2 text-gray-300'>
            Explore amazing recipes
          </Header>
        <div className='relative w-full h-full'>
          <div className='flex w-full h-full '>

          <div className="grid w-full h-full gap-x-2 gap-y-4 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {Array(10).fill(0).map((recipeCard, index) => (
              <RecipeCardSkeleton key={index}/>
            ))}
          </div>
        </div>
      </div>

    </div>
</>
}
export default RandomRecipesSkeleton;