'use client';

import SearchRecipesSkewedSection from "@/components/ui/search-recipes/search-recipes-skewed-section";
import React, {useEffect, useState} from "react";
import {AiOutlineArrowRight} from "react-icons/ai";
import {twMerge} from "tailwind-merge";
import SuggestedItems from "@/components/ui/suggested-items";
import {getRandomProductsName, getRandomRecipesNames} from "@/utils/random-recipe";
import {useRouter} from "next/navigation";

const SearchRecipesPreview = () => {

  const [suggestedRecipes, setSuggestedRecipes] = useState<string[]>();
  const [suggestedProducts, setSuggestedProducts] = useState<string[]>();

  useEffect(() => {
    const suggestedRecipes = getRandomRecipesNames(4);
    const suggestedProducts = getRandomProductsName(4);
    setSuggestedRecipes(suggestedRecipes);
    setSuggestedProducts(suggestedProducts)
  }, [])
  const [recipesInputValue, setRecipesInputValue] = useState<string>();
  const [productsInputValue, setProductsInputValue] = useState<string>();
  const router = useRouter();
  return (
    <div className="w-full text-lg flex overflow-hidden md:text-sm h-96">
      <div
        className='absolute text-white z-20 mt-24 left-1/2 right-1/2 mx-auto bg-black/30 flex items-center justify-center rounded-full h-10 w-10'>
        <h1 className='text-lg'>OR</h1>
      </div>
      <div className='grid grid-cols-2 w-full h-full'>
        <SearchRecipesSkewedSection id='photo-1' wrapperClassName='overflow-hidden'>
          <h1 className='text-4xl sm:text-3xl text-white font-extrabold '>
            Search Recipes
          </h1>
          <p className='mt-0.5 text-xs text-gray-200'>Absolutely for free</p>
          <hr
            className=' w-full h-px border-0 mt-2 mb-4 bg-gradient-to-r md:from-transparent from-gray-400 via-transparent via-75% md:via-50% md:via-gray-400 to-transparent  rounded'/>
          <div className='w-full flex gap-x-2 items-center md:justify-center'>
            <input
              value={recipesInputValue}
              onChange={(e: any) => setRecipesInputValue(e.target.value)}
              onClick={() => {
              }}
              placeholder="Recipe name"
              className='rounded-full text-white outline-0 w-3/4  md:py-1 px-2 py-1 bg-gray-900 placeholder-gray-400 text-sm md:w-1/2'
            />
            <button onClick={() => {
              router.push('/recipes?q=' + recipesInputValue)
            }} disabled={!recipesInputValue}>
              <AiOutlineArrowRight size={20}
                                   className={twMerge(`text-gray-600 ease-in transition-all`, recipesInputValue && "text-white hover:translate-x-3")}/>

            </button>
          </div>
          <SuggestedItems onClick={setRecipesInputValue} items={suggestedRecipes}/>

        </SearchRecipesSkewedSection>
        <SearchRecipesSkewedSection id='photo-2' wrapperClassName='items-end'>
          <h1 className='text-4xl sm:text-3xl text-white text-end font-extrabold '>
            Search Products
          </h1>
          <p className='mt-0.5 text-gray-200 text-xs '>Absolutely for free</p>
          <hr
            className=' w-full h-px border-0 mt-2 mb-4 bg-gradient-to-l md:from-transparent from-gray-400 via-transparent via-75% md:via-50% md:via-gray-400 to-transparent  rounded'/>
          <div className='w-full flex gap-x-2 items-center md:justify-center'>
            <input
              value={productsInputValue}
              onChange={(e: any) => setProductsInputValue(e.target.value)}
              onClick={() => {
              }}
              placeholder="Product name"
              className='rounded-full outline-0 text-white w-3/4  md:py-1 px-2 py-1 bg-gray-900 placeholder-gray-400 text-sm md:w-1/2'
            />
            <button onClick={() => {
              router.push('/products?q=' + productsInputValue)
            }} disabled={!productsInputValue}>
              <AiOutlineArrowRight size={20}
                                   className={twMerge(`text-gray-600 ease-in transition-all`, productsInputValue && "text-white hover:translate-x-3")}/>

            </button>
          </div>
          <SuggestedItems onClick={setProductsInputValue} items={suggestedProducts}/>

        </SearchRecipesSkewedSection>

      </div>
    </div>

  )
}


export default SearchRecipesPreview;