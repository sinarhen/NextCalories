import Button from "@/components/ui/button";
import React from "react";
import LogoSkeleton from "@/components/ui/skeletons/logo-skeleton";

export default function NavbarSkeleton() {
  return (
    <div className='sticky z-40 w-full h-full'>
      <div
        className='w-full animate-pulse bg-gray-200 text-gray-400 shadow-xl flex flex-col  justify-between items-center py-3 md:px-12 px-3'>
        <div className="w-full flex flex-row justify-between items-center">
          <div className='w-1/3'>
            <LogoSkeleton/>
          </div>
          <div className="md:flex w-1/3 items-center justify-center gap-6 hidden">
            <button disabled>Recipes</button>
            <button disabled>Products</button>
          </div>
          <div className="md:flex hidden justify-end items-center w-1/3 gap-4">
            <Button disabled className='bg-gray-300 pointer-events-none'>Sign in</Button>
            <Button disabled className='bg-gray-300 pointer-events-none'>Register</Button>
          </div>

        </div>

      </div>
    </div>
  )
}