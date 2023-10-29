'use client';

import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {BiHide, BiShowAlt} from 'react-icons/bi';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import ProviderButton from '@/components/ui/provider-button';
import {signIn} from 'next-auth/react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {authFormSchema, TAuthFormSchema} from '@/lib/types';
import {toast} from "react-toastify";
import useQueryParams from "@/hooks/use-query-params";
import {usePathname, useRouter} from "next/navigation";

export default function AuthForm({
                                   error
                                 }: {
  error?: string;
}) {
  if (error) {
    const msg = error.includes('NotLinked') ? "You've signed in with different provider" : error
    toast.error(msg, {toastId: 'anotherProvider'})
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors, isSubmitting},
    setError
  } = useForm<TAuthFormSchema>({resolver: zodResolver(authFormSchema)});

  const [isLoading, setIsLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  });

  const {getParameter, makeParameter, searchParams} = useQueryParams()
  useEffect(() => {
    const email = searchParams.get('email') ?? '';
    if (email){
      setValue('email', email)
    }
  }, [searchParams, setValue]);

  const router = useRouter();

  const variant = getParameter('variant') ?? 'register';
  const pathname = usePathname();
  // Function to toggle between login and signup variants
  const toggleVariant = useCallback(() => {
    router.push(pathname + '?' + makeParameter('variant', variant === 'login'? 'register': 'login'));
  }, [makeParameter, pathname, router, variant]);

  // Function to toggle show/hide password
  const toggleShowHide = useCallback(() => {
    setShowPassword((showPass) => !showPass);
  }, []);

  // Simulate loading with useEffect
  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null
  }
  const login = async (data: TAuthFormSchema) => {
    try {
      const user = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
        callbackUrl: '/',
      }).then((res: any) => {
        if (res?.error === null) {
          toast.success("Successfully logged in")
          window.location.replace('/profile')
        } else {
          toast.error(res.error)
          setError('password', res.error)
        }
      })
      console.log(user)
    } catch (error: any) {
      toast.error(error.response.data.error)
      setError(error.response.data.field, {message: error.response.data.error});
      console.log(error);
    }
  };

  const signup = async (data: TAuthFormSchema) => {
    try {
      // Validate input data against the schema\
      const response = await axios.post('/api/signup', data);

      // Check the response status or data for success
      if (response.status === 200) {
        // Registration was successful, you can perform additional actions if needed.
        await login(data);

      }
    } catch (error: any) {
      toast.error("Something went wrong ;(");
      setError(error.response.data.field, {message: error.response.data.error});
    }
  };
  return (
    <div className="px-10 w-[400px] py-5 bg-gray-400/30 backdrop-blur-sm rounded-md">
      <div className="mb-2 ml-2 mt-4 flex gap-1 flex-col">
        <h1 className="text-4xl font-extrabold leading-none md:text-5xl lg:text-6xl tracking-tight text-black">
          {variant === 'login' ? 'Sign in' : 'Sign up'}
        </h1>
        <p
          className="text-neutral-400 cursor-pointer text-sm hover:underline"
          onClick={toggleVariant}
        >
          {variant === 'login' ? 'Not signed up yet?' : 'Already signed up?'}
        </p>
      </div>

      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
      <form onSubmit={handleSubmit(variant === "register" ? signup : login)}>
        <div className="mt-10 grid gap-8 mb-2">
          {variant === 'register' ? (
            <Input
              onChange={(event) => setFormData({...formData, name: event.target.value})}
              id="name"
              type="text"
              label="Name"
              error={errors.name?.message}
              inputProps={register('name')}
            />
          ) : (
            ''
          )}
          <Input
            onChange={(event) => setFormData({...formData, email: event.target.value})}
            id="email"
            type="email"
            label="Email"
            error={errors.email?.message}
            inputProps={register('email')}
          />

          <div className="relative">
            <button

              type='button'
              onClick={toggleShowHide}
              className="absolute z-10 right-2 top-2 hover:text-gray-300 transition-colors duration-100"
            >
              {!showPassword ? <BiShowAlt size={20}/> : <BiHide size={20}/>}
            </button>

            <Input
              id="password"
              error={errors.password?.message}
              onChange={(event) => setFormData({...formData, password: event.target.value})}
              type={showPassword ? 'text' : 'password'}
              label="Password"
              inputProps={register('password')}
            />
          </div>
        </div>

        <div className="w-full md:flex-row gap-2 flex-col justify-between flex mr-2">
          <div className="flex gap-3 items-center justify-center">
            <input type="checkbox"/>
            <p>Remember me</p>
          </div>
          <Button
            disabled={isSubmitting}
            type="submit"
            className="bg-blue-600 md:w-1/3 w-full"
          >
            {variant === 'login' ? 'Sign in' : 'Sign up'}
          </Button>
        </div>
      </form>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      <p className="text-sm flex justify-center">Or sign in with:</p>
      <div className="flex flex-col md:flex-row md:justify-center gap-2 py-8 items-center justify-center w-full">
        <ProviderButton provider="github" className='md:w-auto w-full'/>
        <ProviderButton provider="google" className='md:w-auto w-full'/>
      </div>
    </div>
  );
}
