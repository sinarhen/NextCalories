
import RecipePageContentSectionHeader from "@/components/ui/skeletons/recipe-page-content-section-header-skeleton";
import React from "react";
import {CiWarning} from "react-icons/ci";

const CautionsSkeleton = () => {
  return (

    <div className='bg-red-100 px-2 py-1 col-span-8 rounded  row-span-auto sm:col-span-3'>
      <RecipePageContentSectionHeader icon={CiWarning}>
          Cautions
      </RecipePageContentSectionHeader>
      <ul className="list flex flex-col gap-y-1.5  mt-1">
        <ul className="list flex flex-col gap-y-1.5 text-gray-400 ml-3 mt-2">
          <li className="h-full w-[100%] bg-gray-400 rounded-xl">Caution</li>
          <li className="h-full w-[43%] bg-gray-400 rounded-xl">Caution</li>
          <li className="h-full w-[64%] bg-gray-400 rounded-xl">Caution</li>
        </ul>
      </ul>
    </div>

  )
}

export default CautionsSkeleton;