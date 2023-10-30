import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Products',
}
export default async function ProductsLayout({children}: {children: React.ReactNode}){

  return (
    <>
      {children}
    </>
  )
}