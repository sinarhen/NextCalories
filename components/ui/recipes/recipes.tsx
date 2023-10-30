'use client'
import React from "react";
import RecipeCard from "@/components/ui/recipe/recipe-card";
import Header from "@/components/ui/header";
import {twMerge} from "tailwind-merge";
import {toast} from "react-toastify";
import PageContainer from "@/components/ui/page-container";
import isEmpty from "lodash/isEmpty";
import Header2 from "@/components/ui/header2";

interface RecipesProps {
  recipes: any | null;
  isLoading?: boolean;
  error?: string;
  page?: string;
  wrapperClassName?: string;
  gridClassName?: string;
}

const Recipes: React.FC<RecipesProps> = ({
                                           recipes,
                                           error,
                                           gridClassName,
                                           wrapperClassName
                                         }) => {
  console.log(recipes)
  if (error) {
    toast.info(error, {toastId: 'filtersAndNotQuery'})
    return <Header2 className='text-gray-400'>{error}</Header2>
    }
  if (!recipes || isEmpty(recipes.hits)){
    return <Header2 className='text-gray-400'>No data found</Header2>
  }
  const {hits: hits} = recipes
  return (
    <div className={twMerge("lg:px-8 min-w-full w-full", wrapperClassName)}>
      <div
        className={twMerge("grid grid-cols-1 w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-6", gridClassName)}>

        {hits.map((recipe: any) => {
          console.log(recipe)
          return (
            <RecipeCard

              key={recipe}
              recipe={recipe}
            />
          )

        })}

      </div>
    </div>
  )
}

export default Recipes;