'use client'
import React, {useContext} from "react";

import {AiOutlineUser} from "react-icons/ai";
import {IoMdArrowDropdown} from "react-icons/io";
import {twMerge} from "tailwind-merge";
import {AuthContext} from "@/contexts/user-provider";
import {ThreeDots} from "react-loader-spinner";

interface UserNavigationProps {
  onClick?: () => void;
  isOpenedMenu?: boolean
  className?: string;
}

const UserNavigation: React.FC<UserNavigationProps> = ({
                                                         onClick,
                                                         isOpenedMenu,
                                                         className
                                                       }) => {
  const {data: user, isLoading} = useContext(AuthContext);
  return (
    <>
      {
        isLoading ? <ThreeDots/> :
          <div className={twMerge('flex flex-col justify-center items-center', className)}>
            <div className='flex items-center gap-x-2'>
              <h1 className='italic'>{user?.name}</h1>
              <div onClick={onClick} className='flex items-center cursor-pointer justify-center'>
                <AiOutlineUser size={30}/>
                <IoMdArrowDropdown className={twMerge('0 transition-transform', isOpenedMenu && '-rotate-90')}/>
              </div>
            </div>
          </div>

      }

    </>
  );
};

export default UserNavigation;
