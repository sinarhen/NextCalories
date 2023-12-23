
import React from "react";
import RecipeCardSkeleton from "@/components/ui/skeletons/recipe-card-skeleton";

const RecipesSkeleton = () => {
  return (
    <div className="grid grid-cols-1 w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-6">
      {Array(20).fill(0).map((recipeCard, index) => (
        <RecipeCardSkeleton key={index}/>
      ))}
    </div>
  )
}

export default RecipesSkeleton;