'use client';
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import {IoMdArrowDropdown} from "react-icons/io";

const NutrientsTable = ({
  nutrientsList,
  totalDaily
}: {
  nutrientsList: any;
  totalDaily: any;
}) => {
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});
  const toggleItem = (index: number) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <div className="transition-all bg-gray-200 rounded px-3 py-2">
      <table className="rounded w-full h-full" >
        <tbody>
        <tr>
          <th className="px-6 py-3 text-left">Label</th>
          <th className="px-6 py-3">Total</th>
          <th className="px-6 py-3">%DV</th>
        </tr>
        {nutrientsList.map((item: any, index: number) => (
          <>
            <tr
              className={twMerge(
                `table-row border-t border-t-gray-500`,
                item.sub ? "border-b-0" : null
              )}
              key={index}
            >
              <td className="table-cell text-left px-6 py-3">
                <div className='flex items-center gap-x-2'>
                  <h1>

                    {item.label}
                  </h1>
                  {item.sub && (
                    <button
                      onClick={() => toggleItem(index)}
                      className="focus:outline-none"
                    >
                       <IoMdArrowDropdown className={twMerge('rotate-0 transition-all', expandedItems[index] ? '-rotate-90' : null)}/>
                    </button>
                  )}

                </div>
              </td>
              <td className="table-cell text-center px-6 py-3">
                {item.quantity.toFixed()}{item.unit}
              </td>
              <td className="table-cell text-center px-6 py-3 justify-center">
                {totalDaily[item.tag]?.quantity.toFixed(2)}%
              </td>

            </tr>
            {expandedItems[index] &&
              item.sub &&
              item.sub.map((subItem: any, subIndex: number) => (
                <tr
                  key={subIndex}
                  className="table-row text-sm sm:text-xs rounded bg-gray-300"
                >
                  <td className="flex w-full ml-5 px-6 py-3">{subItem.label}</td>
                  <td className="table-cell text-center px-6 py-3">
                    {subItem.quantity.toFixed()}{subItem.unit}
                  </td>
                  <td className="table-cell text-center px-6 py-3">
                    {totalDaily[subItem.tag]?.quantity.toFixed(2) || "??"}%
                  </td>
                </tr>
              ))}
          </>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default NutrientsTable;
