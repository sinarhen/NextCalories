'use client'
import React from "react";
import RecipeCard from "@/components/ui/recipe/recipe-card";
import Header from "@/components/ui/header";
import {twMerge} from "tailwind-merge";
import {toast} from "react-toastify";
import PageContainer from "@/components/ui/page-container";

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

  if (error) {
    toast.info(error, {toastId: 'filtersAndNotQuery'})
    return <PageContainer>
      <Header>{error}</Header>
    </PageContainer>
  }
  if (!recipes) {
    return null;
  }
  const {hits: hits} = recipes
  if (!hits) {
    return null;
  }
  return (
    <div className={twMerge("max-w-screen-xl w-full", wrapperClassName)}>
      <div
        className={twMerge("grid grid-cols-1 w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-6", gridClassName)}>

        {hits.map((recipe: any) => {
          console.log(recipe)
          return (
            <RecipeCard

              key={recipe.id}
              recipe={recipe}
            />
          )

        })}

      </div>
    </div>
  )
}

export default Recipes;