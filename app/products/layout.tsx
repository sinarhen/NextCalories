import React from "react";
import {Metadata} from "next";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";

export const metadata: Metadata = {
  title: 'Products',
}
export default async function ProductsLayout({children}: {children: React.ReactNode}){
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/auth')
  }

  return (
    <>
      {children}
    </>
  )
}