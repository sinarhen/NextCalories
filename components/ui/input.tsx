'use client';
import { FC } from "react";
import {twMerge} from "tailwind-merge";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    inputProps?: any;
    onChange?: (event: any) => void;
    error?: string | null;
    className?: string;
    divClassName?: string;
    value?: string | null;
    disabled?: boolean
}

const Input: FC<InputProps> = ({
  id,
  label,
  type,
  onChange,
  inputProps,
  error,
  className,
  divClassName,
  value,
  disabled,
}) => {
  const isValid = !error
  // State to track input value and validation status

  return (
    <div className={twMerge("relative text-black w-full", divClassName)}>
      <div className='flex flex-col w-full items-center'>
          <div className='flex w-full items-center justify-center'>
              <input
                  disabled={disabled}
                  onChange={onChange}
                  id={id}
                  value={value}
                  {...inputProps}
                  type={type}
                  className={twMerge(`
          peer
          rounded
          h-10
          px-3
          w-full
          focus:outline-gray-400
          focus:outline-1
          transition-all
          placeholder-transparent
          focus:outline-none
          ${isValid ? "" : "invalid:outline-red-500"}
        `, className)}
                  placeholder={label}
              />
              <label
                  className={twMerge(`
          absolute
          left-2
          -top-5 
          text-xs
          ${isValid ? "text-gray-600" : "text-red-500"}
          peer-placeholder-shown:text-base
          peer-placeholder:${!error ? "text-gray-300" : "text-red-500"}
          peer-placeholder-shown:top-2
          peer-placeholder-shown:left-3.5
          transition-all
          ${isValid ? "outline-none" : "outline-red-500"}
        `, className)}
                  htmlFor={id}
              >
                  {label}
              </label>

          </div>
      <p
          className={`
      ${isValid ? "invisible" : "visible"}
      text-red-500
      text-sm
    `}
      >
          {!error ? '' : error}
      </p>

      </div>
    </div>
  );
};

export default Input;
