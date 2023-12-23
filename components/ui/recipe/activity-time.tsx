
import React from "react";
import {IconType} from "react-icons";


interface ActivityTimeProps {
  icon: IconType;
  header: string;
  minutes: string;
}
const ActivityTime: React.FC<ActivityTimeProps> = ({ icon: Icon, header, minutes }) => {
  return (
    <div className="h-full bg-gray-200 px-3 rounded py-2 gap-x-2">
      <div className="flex items-center text-xl gap-x-1">
        <h1>
          <Icon/>
        </h1>
        <h1 className="">
          {header}
        </h1>
      </div>
      <div className="mt-1">
        <p>In {minutes} minutes</p>
      </div>

    </div>
  )
}
export default ActivityTime;