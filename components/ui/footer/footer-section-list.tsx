'use client';
import React from "react";

interface FooterSectionList{
  list: {
    label: string;
    href: string;
  }[];
}
const FooterSectionList:React.FC<FooterSectionList> = ({list}) => {
  return (
    <ul className='text-xl sm:text-l md:text-sm lg:text-xs'>
      {list.map(item => {
        const label = item.label;
        const href = item.href;
        return (
          <>
            <li><a href={href}>{label}</a></li>
          </>
        )
      })}
    </ul>

  )
}

export default FooterSectionList;