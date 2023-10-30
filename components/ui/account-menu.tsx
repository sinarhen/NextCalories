'use client'
import React, {useContext} from "react";
import AccountMenuItem from "@/components/ui/account-menu-item";

import { signOut } from 'next-auth/react';

import { useRouter } from "next/navigation";
import {AuthContext} from "@/contexts/user-provider";

interface AccountMenuProps {
    visible?: boolean;
}
const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
    const router = useRouter();
    const {data: user} = useContext(AuthContext);
    if (!visible){
        return null;
    }
    return (
        <div className='relative md:w-[170px]'>
            <div className='absolute shadow-2xl z-50 top-2 w-full '>
                <div className='flex flex-col w-full h-full bg-white/90 backdrop-blur-sm  border border-gray-300 rounded'>
                    <AccountMenuItem onClick={() => router.push('/profile')} className='font-bold rounded-t'>My Profile</AccountMenuItem>
                    <AccountMenuItem onClick={() => router.push('/profile')}>My Favorites</AccountMenuItem>
                    <AccountMenuItem className='rounded-b text-red-600' onClick={() => (signOut({redirect: true, callbackUrl: '/auth'}))}>Logout</AccountMenuItem>
                </div>
            </div>
        </div>
    )
}

export default AccountMenu;