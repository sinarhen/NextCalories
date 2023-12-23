
import ActivityTimeSkeleton from "@/components/ui/skeletons/activity-time-skeleton";
import React from "react";
import RecipePageContentSectionHeaderSkeleton
  from "@/components/ui/skeletons/recipe-page-content-section-header-skeleton";
import {AiOutlineFire} from "react-icons/ai";


const BurningTimeSkeleton = () => {
  return (

    <div className='col-span-8'>
      <RecipePageContentSectionHeaderSkeleton icon={AiOutlineFire}>
        Burning time
      </RecipePageContentSectionHeaderSkeleton>
      <div className="grid-cols-2  md:grid-cols-4 mt-3 gap-x-3 gap-y-2 md:grid-rows-1 grid-rows-2 grid">
        <ActivityTimeSkeleton/>
        <ActivityTimeSkeleton/>
        <ActivityTimeSkeleton/>
        <ActivityTimeSkeleton/>


      </div>
    </div>

  )
}

export default BurningTimeSkeleton;