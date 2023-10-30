import PageContainer from "@/components/ui/page-container";
import UserProfile from "@/components/ui/profile/user-profile";
import React from "react";
import Navbar from "@/components/ui/navbar/navbar";
import {Metadata} from "next";
import Recipes from "@/components/ui/recipes/recipes";
import Products from "@/components/ui/products/products";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import prisma from "@/lib/prisma";
import {getProduct, getRecipe} from "@/utils/get-recipe";
import Header from "@/components/ui/header";


export const metadata: Metadata = {
  title: 'My Profile',
}
export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log('!session')
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email ? session.user.email : undefined
    }
  })
  console.log(user)
  const favRecipes = user?.favoriteRecipes;
  const favProducts = user?.favoriteProducts;

  const products = favProducts ? {
    hints: (await Promise.all(favProducts.map(async (recipeId: string) => {
      const data = await getProduct(recipeId);
      return data.hints[0];
    }))).slice(0, 8)
  } : null;
  const recipes = favRecipes ? {
    hits: (await Promise.all(favRecipes.map(async (recipeId: string) => {
      return await getRecipe(recipeId);
    }))).slice(0, 8)
  } : null;

  return (
    <>
      <Navbar/>
      <PageContainer>
        <UserProfile/>
        <Header className='mt-24 md:mt-6'>Your favorite recipes</Header>
        <Recipes recipes={recipes} gridClassName={'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}/>

        <Header className='mt-28 md:mt-14'>Your favorite products</Header>
        <Products products={products}
                  gridClassName={'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}/>
      </PageContainer>

    </>
  )
}
