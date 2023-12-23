
import React from "react";
import NutrientsCalculatorSkeleton from "@/components/ui/skeletons/nutrients-calculator-skeleton";
import BurningTimeSkeleton from "@/components/ui/skeletons/burning-time-skeleton";
import CautionsSkeleton from "@/components/ui/skeletons/cautions-skeleton";
import IngredientsSkeleton from "@/components/ui/skeletons/ingredients-skeleton";
import RecipePageContentSectionHeaderSkeleton
  from "@/components/ui/skeletons/recipe-page-content-section-header-skeleton";
import {PiBowlFood} from "react-icons/pi";


const RecipePageContentSkeleton = () => {
  return (
    <div className="text-md animate-pulse w-full sm:text-sm gap-x-7 gap-y-12 grid grid-cols-8">
      <IngredientsSkeleton />
      <CautionsSkeleton />
      <NutrientsCalculatorSkeleton />
      <BurningTimeSkeleton />
      <div className='col-span-8'>
        <RecipePageContentSectionHeaderSkeleton icon={PiBowlFood}>
          Nutrients Table
        </RecipePageContentSectionHeaderSkeleton>
      </div>
    </div>
  );
};

export default RecipePageContentSkeleton;
