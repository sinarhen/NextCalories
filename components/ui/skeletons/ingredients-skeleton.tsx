import React from "react";
import {AiOutlineUnorderedList} from "react-icons/ai";
import RecipePageContentSectionHeader from "@/components/ui/skeletons/recipe-page-content-section-header-skeleton";

const IngredientsSkeleton = () => {

  return (
    <div className='md:col-span-5 row-span-2 col-span-8 lg:col-span-4'>
      <RecipePageContentSectionHeader icon={AiOutlineUnorderedList}>
        Ingredients
      </RecipePageContentSectionHeader>
      <ul className="list flex flex-col gap-y-1.5  mt-1">
        <ul className="list flex list-disc text-gray-400 flex-col gap-y-1.5 ml-3 mt-2">
          <li className="h-full w-[75%]  bg-gray-400 rounded-xl">Ingredient</li>
          <li className="h-full w-[73%] bg-gray-400 rounded-xl">Ingredient</li>
          <li className="h-full w-[100%] bg-gray-400 rounded-xl">Ingredient</li>
          <li className="h-full w-[43%] bg-gray-400 rounded-xl">Ingredient</li>
          <li className="h-full w-[64%]  bg-gray-400 rounded-xl">Ingredient</li>
        </ul>
      </ul>
    </div>

  )
}

export default IngredientsSkeleton;