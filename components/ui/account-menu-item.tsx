'use client'
import React from "react";
import {twMerge} from "tailwind-merge";
import {useRouter} from "next/navigation";

interface AccountMenuItemProps {
    children?: React.ReactNode;
    className?: string;
    onClick: () => void;
}
const AccountMenuItem: React.FC<AccountMenuItemProps> = ({
    children,
    className,
    onClick,
}) => {
    return (
        <h1 onClick={onClick}
        className={twMerge(
            " px-2 pt-1 pb-0.5 border-b-gray-200 border  cursor-pointer bg-transparent hover:bg-white/70",
            className
        )}>
            {children}
        </h1>
    )
}

export default AccountMenuItem;