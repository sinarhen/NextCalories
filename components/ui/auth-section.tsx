'use client';

import Button from "@/components/ui/button";
import ProviderButton from "@/components/ui/provider-button";
import Input from "@/components/ui/input";
import {AiOutlineArrowRight} from "react-icons/ai";
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import Header from "@/components/ui/header";
import bg from '@/public/auth-section-bg2.png';

const AuthSection = () => {
  const router = useRouter();

  const [inputValue, setInputValue] = useState('')

  const bgImg: React.CSSProperties = {
    backgroundImage: `url(${bg.src})`
  }
  return (
    <div className=' mt-12 relative w-full md:h-96 h-[26rem]'>

      <div
        className='bg-black/95 absolute z-10 h-full md:w-1/2 w-[80%] py-12 px-16 md:px-10 overflow-x-hidden -ml-12 -skew-x-[12deg] text-white'>
        <div className='flex justify-center items-center skew-x-[12deg]'>
          <div className='gap-y-2 flex-col flex '>
            <Header className='font-extrabold lg:text-2xl md:text-3xl text-4xl'>
              Sign up for free
            </Header>
            <div className='flex flex-col items-center w-full justify-center'>
              <h1 className='text-gray-400'>Sign up with</h1>
              <div className='mt-2 justify-center grid grid-cols-2 gap-x-2 w-full '>
                <div className='w-full flex justify-center'>
                  <ProviderButton provider='github'  className='w-full outline'/>
                </div>
                <div className='w-full flex justify-center'>
                  <ProviderButton provider='google'  className='w-full outline'/>

                </div>
              </div>
              <h1 className='mt-6 text-gray-400'>
                Or with credentials
              </h1>
              <Input value={inputValue} onChange={(event: any) => setInputValue(event.target.value)} id='email' className='rounded-full mt-5' label='E-mail' />
              <Button disabled={!inputValue} onClick={() => {
                router.push('/auth?email=' + inputValue + '&variant=register')
              }} className='flex gap-x-1 items-center mt-1.5 justify-center bg-transparent'>
                Continue <AiOutlineArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-end  w-full h-full'>
        <div className='w-[75%] h-full bg-cover bg-center bg-no-repeat' style={bgImg}>

        </div>
      </div>
    </div>
  )
}

export default AuthSection;