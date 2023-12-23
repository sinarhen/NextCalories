'use client';

import React from "react";
import RecipeCard from "@/components/ui/recipe/recipe-card";
import {twMerge} from "tailwind-merge";
import {toast} from "react-toastify";
import isEmpty from "lodash/isEmpty";
import Header2 from "@/components/ui/header2";
import { motion } from "framer-motion";

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
      const transitionDuration = 0.2;
      const delayPerItem = 0.05;
                                    
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

        {hits.map((recipe: any, index: number) => {
          return (
            <motion.div
              key={recipe.id + index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * delayPerItem, duration: transitionDuration }}
            >
              <RecipeCard
                            recipe={recipe}
                          />
                        
            </motion.div>
            )

        })}

      </div>
    </div>
  )
}

export default Recipes;