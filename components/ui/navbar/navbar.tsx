'use client'

import React, {useContext, useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";

import DropdownMenuContent from "@/components/ui/dropdown-menu/dropdown-menu-content";
import ButtonBottomBorder from "@/components/ui/button-bottom-border";
import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import DropdownMenuButton from "@/components/ui/dropdown-menu/dropdown-menu-button";
import {signOut} from "next-auth/react";
import UserNavigation from "@/components/ui/navbar/user-navigation";
import AccountMenu from "@/components/ui/account-menu";
import {twMerge} from "tailwind-merge";
import DropdownMenuContentSection from "@/components/ui/dropdown-menu/dropdown-menu-content-section";
import {AuthContext} from "@/contexts/user-provider";
import NavbarSkeleton from "@/components/ui/skeletons/navbar-skeleton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  const {data: user} = useContext(AuthContext);
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    setIsMounted(true)
    window.addEventListener('scroll', stickNavbar);
    console.log(window.scrollY);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);
  const [isBetween, setIsBetween] = useState(false);
  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      const navHeight = (navRef.current?.offsetHeight || 200);
      windowHeight < navHeight * 2.5 && windowHeight > navHeight * 2 ? setIsBetween(true) : setIsBetween(false)
      windowHeight > navHeight * 2.5 ? setIsSticky(true) : setIsSticky(false);

    }
  };
  const navRef = useRef<HTMLDivElement>(null);
  const StickyNavbarStyles: React.CSSProperties = {
    opacity: isSticky ? 1 : 0,
  }
  if (!isMounted) {
    return <NavbarSkeleton/>
  }
  return (
    <div ref={navRef} style={isSticky ? StickyNavbarStyles : {}} className={twMerge(
      'sticky ' +
      `w-full bg-white ` +
      'text-black transition-all z-40 duration-300 top-0',
      (isSticky) && 'text-black duration-1000 bg-white/70 backdrop-blur-md  ',
      isBetween && 'md:opacity-1 opacity-0',
    )}>
      <div className="w-full shadow-xl flex flex-col  justify-between items-center py-2 md:px-12 px-3">
        <div className="w-full flex flex-row justify-between items-center">
          <div className='w-1/3'>
            <Logo/>
          </div>
          <div className="md:flex w-1/3 items-center justify-center gap-6 hidden">
            <ButtonBottomBorder onClick={() => router.push('/recipes')}>Recipes</ButtonBottomBorder>
            <ButtonBottomBorder onClick={() => router.push('/products')}>Products</ButtonBottomBorder>

          </div>
          <div className="md:flex hidden justify-end items-center w-1/3 gap-4">
            {user ?
              <div className='flex flex-col'>
                <UserNavigation onClick={toggleMenuIsOpen} isOpenedMenu={menuIsOpen}/>
                <div ref={menuRef}>
                  <AccountMenu visible={menuIsOpen}/>
                </div>

              </div>
              :
              <>
                <Button onClick={() => router.push('/auth?variant=login')}
                        className="bg-emerald-500 hover:bg-emerald-600">
                  Sign In
                </Button>
                <Button onClick={() => router.push('/auth?variant=register')} className='bg-black hover:bg-gray-900'>
                  Register
                </Button>
              </>
            }
          </div>
          <DropdownMenuButton onClick={toggleIsOpen}/>

        </div>
      </div>
      <DropdownMenuContent visible={isOpen}>
        <div className="w-full grid md:hidden sm:grid-cols-2 grid-cols-1">
          <DropdownMenuContentSection onClick={() => router.push('/recipes')}
                                      className="border-r border-t border-b cursor-pointer">
            <ButtonBottomBorder>Recipes</ButtonBottomBorder>
          </DropdownMenuContentSection>

          <DropdownMenuContentSection onClick={() => router.push('/products')} className='border-b sm:border-t'>
            <ButtonBottomBorder>Products</ButtonBottomBorder>
          </DropdownMenuContentSection>
          {user ?
            <>
              <DropdownMenuContentSection onClick={toggleMenuIsOpen}
                                          className={twMerge("cursor-pointer justify-center sm:justify-start px-6 border-b", menuIsOpen && 'sm:col-span-2')}>
                <UserNavigation isOpenedMenu={menuIsOpen}/>
              </DropdownMenuContentSection>
              {menuIsOpen &&
                  <>
                      <DropdownMenuContentSection
                          onClick={() => router.push(`/profile`)}
                          className='bg-gray-400/70 hover:bg-gray-400/90 border-b'>
                          <ButtonBottomBorder>My Profile</ButtonBottomBorder>
                      </DropdownMenuContentSection>

                      <DropdownMenuContentSection
                          onClick={() => router.push(`/profile`)}
                          className='bg-gray-400/70 hover:bg-gray-400/90 sm:border-l border-b'>
                          <ButtonBottomBorder>My favorites</ButtonBottomBorder>
                      </DropdownMenuContentSection>


                  </>
              }
              <DropdownMenuContentSection
                onClick={() => {
                  signOut();
                  closeMenu();
                }}
                className={twMerge("px-6 py-4 bg-red-50/70 hover:bg-red-50/90 cursor-pointer flex items-center border-b border-b-gray-500 justify-center sm:justify-end w-full", menuIsOpen && 'sm:col-span-2 sm:justify-center')}>
                <button className='text-red-600'>
                  Logout
                </button>
              </DropdownMenuContentSection>
            </>
            :
            <>
              <ButtonBottomBorder onClick={() => {
                closeMenu();
                router.push('/auth')
              }} className="py-4 cursor-pointer ">
                Sign In
              </ButtonBottomBorder>
              <ButtonBottomBorder onClick={() => {
                closeMenu();
                router.push('/auth')
              }} className="py-4 cursor-pointer bg-black text-white border-gray-400">
                Register
              </ButtonBottomBorder>
            </>
          }
        </div>

      </DropdownMenuContent>

    </div>

  );
}

export default Navbar;