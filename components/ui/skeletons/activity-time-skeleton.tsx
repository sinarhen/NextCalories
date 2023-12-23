import React from "react";

const ActivityTimeSkeleton = () => {
  return (
    <div className="h-full bg-gray-200 px-3 rounded py-2 gap-x-2">
      <div className="flex w-fit text-gray-300 bg-gray-300 rounded-xl items-center text-xl gap-x-1">
        <h1>
          {"{Icon}"}
        </h1>
        <h1 className="">
          Activity
        </h1>
      </div>
      <div className="text-gray-400 w-fit flex bg-gray-400 rounded-xl mt-1">
        <p>In some minutes</p>
      </div>

    </div>
  )
}

export default ActivityTimeSkeleton;