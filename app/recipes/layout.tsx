import React from "react";
import {Metadata} from "next";


export const metadata: Metadata = {
  title: 'Recipes',
}

export default async function RecipesLayout({children}: {children: React.ReactNode}){
  return (
    <>
      {children}
    </>
  )
}