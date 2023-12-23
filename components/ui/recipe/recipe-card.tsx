'use client'

import React from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";

interface Ingredient{
  text: string;
  quantity: string|number;
  foodId: string;
}
interface RecipeCardProps {
  recipe: any;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe
}) => {
  const router = useRouter();
  if (!recipe){
    return null;
  }
  const id = recipe.recipe.uri.split("#recipe_")[1];

  const title = recipe.recipe.label

  let imageSrc = recipe.recipe.image;
  if (recipe.recipe.images?.Large){
    imageSrc = recipe.recipe.images?.Large.url
  } else if(recipe.recipe.images?.Regular){
    imageSrc = recipe.recipe.images.Regular.url
  } else if (recipe.recipe.images?.Small){
    imageSrc = recipe.recipe.images.Small.url;
  }
  const totalWeight = recipe.recipe.totalWeight
  const calories = (recipe.recipe.calories / totalWeight * 100).toString()

  const fats = (recipe.recipe.totalNutrients.FAT.quantity / totalWeight * 100).toString();
  const carbs = (recipe.recipe.totalNutrients.CHOCDF.quantity / totalWeight * 100).toString();
  const protein = (recipe.recipe.totalNutrients.PROCNT.quantity / totalWeight * 100).toString();
  const ingredients = recipe.recipe.ingredients

  const round = (val: string) => {
    return parseFloat(val).toFixed(2)
  }

  return (
    <div
      onClick={() => {router.push(`/recipes/${id}`)}}
      className='overflow-hidden cursor-pointer border-gray-100 relative md:h-[320px] h-[512px] lg:h-[342px] w-full shadow-lg rounded bg-gray-300'>
      <Image
        src={imageSrc}
        alt=""
        layout='fill'
        objectFit="cover"
      />
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
                                via-5%
                                h-full
                                via-black
                                to-transparent
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
                            md:bg-transparent
                            bg-black/10
                            md:group-hover:bg-gray-300/10
                            text-white
                            '>

              <div className="min-w-0 md:group-hover:h-[70%] md:h-[20%] h-full  transition-all flex flex-col justify-between">
                <div className='flex overflow-y-hidden min-w-0 gap-y-2 flex-col'>
                  <div className='flex flex-col gap-y-0.5'>
                    <p className='text-gray-400 w-min text-xl md:text-xs'>{round(calories)}kcal
                      / 100g </p>
                    <h1 className='md:text-xl  md:truncate text-4xl sm:text-3xl transition-all pb-1 '>{title}</h1>

                  </div>

                  <ul className='list-disc  overflow-y-scroll md:group-hover:block md:hidden'>
                    {ingredients.map((ingredient: Ingredient) => {
                      const text = ingredient.text
                      return (
                        <li className='sm:text-sm text-l' key={ingredient?.foodId}> - {text}</li>
                      )
                    })}
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

export default RecipeCard;