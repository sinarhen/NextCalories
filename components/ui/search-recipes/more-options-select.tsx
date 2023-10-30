'use client';

import {capitalize} from "lodash";
import React from "react";

interface MoreOptionsSelectProps {
  placeholder?: string;
  name?: string;
  label?: string;
  categories: string[];
  onClick?: (value: string) => void;
  onChange?: (value: string) => void;
  value?: string;
 }

const MoreOptionsSelect: React.FC<MoreOptionsSelectProps> = ({
  categories,
  placeholder,
  onChange,
  onClick,
  label,
  name,
  value
}) => {

  return (
    <div className='flex flex-col justify-center w-full'>
      <div className='flex w-full justify-between items-center'>
        <label className='ml-1'  id="DietLabel">{label}</label>

        {value ?
            <button onClick={() => {
              onChange && onChange('')
            }} className='text-gray-700'>
                reset
            </button>
          : null
        }
      </div>
      <select value={value} name={name} onChange={onChange && ((event: any) => onChange(event.target.value))}
              className='px-2 py-1 text-gray-300 rounded-full outline-0 bg-gray-700'>
        <option disabled className='rounded-full' value={''} selected>{placeholder ?? "Choose an option"}</option>
        {categories.map((label, index) => (
          <option onClick={onClick && (() => onClick(label))} value={label} key={index}>
            {capitalize(label)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default MoreOptionsSelect;