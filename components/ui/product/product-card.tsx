'use client'

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import isEmpty from "lodash/isEmpty";
import {capitalize} from "lodash";
import RecipeCardSkeleton from "@/components/ui/skeletons/recipe-card-skeleton";

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
                                                   product
                                                 }) => {
  const round = (val: string) => {
    return parseFloat(val).toFixed(2)
  }
  const router = useRouter();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, [])
  if (!isMounted) {
    return <RecipeCardSkeleton/>
  }
  if (!product) {
    return null
  }
  const food = product.food

  const id = food.foodId
  const title = food.label

  const imageSrc = food.image;
  const calories = food.nutrients.ENERC_KCAL

  const fats = food.nutrients.FAT;
  const carbs = food.nutrients.CHOCDF;
  const protein = food.nutrients.PROCNT;
  const ingredients: string[] = food.foodContentsLabel ? food.foodContentsLabel.split(';').map((item: string) => {
    return capitalize(item.trim())
  }) : null;
  return (
    <div
      onClick={() => {
        router.push(`/products/${id}`)
      }}
      className='overflow-hidden cursor-pointer border-gray-100 relative md:h-[320px] h-[512px] lg:h-[342px]  w-full shadow-lg rounded bg-gray-300'>
      <div
        style={{backgroundImage: `url('${imageSrc}')`}}
        className={`
            rounded
            absolute
            bg-no-repeat
            bg-center
            bg-cover
            z-10
            w-full 
            h-full
            `}>
        {!imageSrc &&
            <h1 className='text-zinc-100 w-min text-8xl h-full md:text-7xl lg:text-6xl'>
                Image not found
            </h1>
        }

      </div>
      <div className='
            absolute
            z-20
            border
            rounded
            border-gray-400
            w-full h-full
            group
            '>
        <div className='
                    flex
                    flex-col
                    w-full h-full
                    items-end
                    justify-end
                '>
          <div className='
                    absolute
                    z-30
                    h-full
                    w-full
                    rounded
                    '>
            <div className='
                            flex
                            w-full
                            h-full
                            items-end
                        '>
              <div className='
                                w-full
                                md:group-hover:h-full
                                active:h-full
                                md:h-[75%]
                                md:bg-gradient-to-t
                                bg-gradient-to-b
                                from-black
                                md:group-hover:via-15%
                                md:via-5%
                                md:via-black
                                h-full
                                via-transparent
                                md:to-transparent
                                to-black
                                transition-all
                                duration-500

                            '>
              </div>

            </div>
          </div>
          <div className='absolute  transition-all w-full h-full z-40'>
            <div className='
                            w-full
                            flex-col
                            flex
                            h-full
                            justify-end
                            px-2 py-1
                            md:bg-transparent bg-gray-300/20
                            md:group-hover:bg-gray-300/10
                            text-white
                            '>

              <div
                className="min-w-0 md:group-hover:h-[70%] md:h-[20%] h-full  transition-all flex flex-col justify-between">
                <div className='flex overflow-y-hidden min-w-0 gap-y-2 flex-col'>
                  <div className='flex flex-col gap-y-0.5'>
                    <p className='text-gray-400 w-min text-xl md:text-xs'>{round(calories)}kcal
                      / 100g </p>
                    <h1 className='md:text-xl  md:truncate text-4xl sm:text-3xl transition-all pb-1 '>{title}</h1>

                  </div>

                  <ul className='list-disc  overflow-y-auto md:group-hover:block md:hidden'>
                    {!isEmpty(ingredients) ?
                      ingredients.map((ingredient: string, index: number) => (
                          <li className='sm:text-sm text-lg' key={index}> - {ingredient}</li>
                        )
                      ) : <p className='text-gray-400 italic text-xl'>No ingredients</p>}
                  </ul>

                </div>
                <div
                  className='w-full sm:text-sm text-l md:text-xs md:hidden flex md:group-hover:flex md:text-transparent md:group-hover:text-white gap-x-2'>
                  <p>fats: {round(fats)}g </p>
                  <p>carbs: {round(carbs)}g</p>
                  <p>protein: {round(protein)}g</p>

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductCard;