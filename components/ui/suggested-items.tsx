
import React from "react";

interface SuggestedItemsProps {
  onClick: (label: string) => void;
  items?: any;
}
const SuggestedItems: React.FC<SuggestedItemsProps> = ({onClick, items}) => {
  return (

    <ul className='w-full grid grid-cols-2 md:grid-cols-4 text-sm gap-x-2   gap-y-4 md:mt-3 mt-5 py-1'>
      {items && items.map((label: string, index: number) => {
        return (
          <li key={index} className='flex md:justify-center'>
            <button className='text-gray-100 w-full text-center hover:text-gray-600 transition-colors' onClick={() => onClick(label)}>
              {label}
            </button>
          </li>
        )
      })}
    </ul>

  )
}

export default SuggestedItems;