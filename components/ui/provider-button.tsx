'use client';
import { BiLogoGithub, BiLogoGoogle } from "react-icons/bi"
import Button from "@/components/ui/button";
import React from "react";
import {signIn} from "next-auth/react";

interface ProviderButtonProps{
    onClick?: () => void
    provider: "google" | "github"
    className?: string;
}

const ProviderButton: React.FC<ProviderButtonProps> = ({

    provider,
    className,

}) => {
    return (
                <Button onClick={() => provider === 'github' ?
                  signIn('github', { callbackUrl: '/api/auth/callback/github' })
                  : signIn('google', { callbackUrl: '/api/auth/callback/google' })
                } className={className}>
                    <div className='flex w-full items-center justify-center'>
                        <div className="flex justify-center items-center w-full text-white">
                                {provider === 'github'
                                    ? <BiLogoGithub className="h-10 w-10 md:w-15 md:h-15" />
                                    : <BiLogoGoogle className="h-10 w-10 md:w-15 md:h-15"/>
                                }
                        </div>
                    </div>

                </Button>
    )
}

export default ProviderButton;