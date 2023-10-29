'use client';

// Import statements for React and required libraries
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {capitalize} from "lodash";
import {BiTime} from "react-icons/bi";
import {TbSalad, TbWeight} from "react-icons/tb";
import RecipePageHeaderPoint from "@/components/ui/recipe/recipe-page-header-point";
import {SlEnergy} from "react-icons/sl";
import {BsArrowLeftShort} from "react-icons/bs";
import {twMerge} from "tailwind-merge";
import {AiOutlinePlus} from "react-icons/ai";
import RecipePageHeaderFavoriteButton from "@/components/ui/recipe/recipe-page-header-favorite-button";


// Define the props for the ProductPageHeader component
interface RecipePageHeaderProps {
  recipe: {
    image: string;
    images: any;
    label: string,
    dietLabels?: string[];
    healthLabels?: string[];
    cautions?: string[];
    source: string;
    url: string;
    ingredients?: {
      text: string;
      quantity: number;
      measure: string;
      food: string;
      weight: number;
      foodId: string;
    }[];
    calories: number;
    cuisineType: string[];
    mealType: string[];
    dishType: string[];
    instructions?: string[]
    digest?: any[];
    totalNutrients: any;
    totalWeight: number;
    totalTime: number;
    uri: string;
  };

}

// Define the ProductPageHeader component
const RecipePageHeader: React.FC<RecipePageHeaderProps> = ({recipe}) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true);
  }, []);
  // Check if the 'recipe' prop is not provided, and return null in that case
  if (!recipe) {
    return null;
  }

  // Determine the best image for the background
  const bestImage =
    recipe.images.LARGE?.url ||
    recipe.images.REGULAR?.url ||
    recipe.image;

  // Define CSS properties for the background image
  const bgImage: React.CSSProperties = {
    backgroundImage: `url("${bestImage}")`,
  };

  // Function to format time in hours and minutes
  const formatTime = (mins: number) => {
    if (!mins) {
      return "0:00";
    }
    const hours = Number((mins / 60).toFixed());
    const remainMins = mins % 60;
    return `${hours}:${remainMins ? remainMins : "00"}`;
  };
  const id = recipe.uri.split('#recipe_')[1]
  // Calculate the percentage of fat, carbs, and protein
  const totalWeight = recipe.totalWeight;
  const fat = (recipe.totalNutrients.FAT.quantity / totalWeight * 100).toFixed(2);
  const carbs = (recipe.totalNutrients.CHOCDF.quantity / totalWeight * 100).toFixed(2);
  const protein = (recipe.totalNutrients.PROCNT.quantity / totalWeight * 100).toFixed(2);
  return (
    <div className='relative overflow-hidden bg-cover bg-center bg-no-repeat' style={bgImage}>
      <div className='flex px-3 sm:px-8 md:px-14 py-6 w-full h-full flex-col text-white bg-black/60'>
        {/* Back to search link */}
        <p className='flex items-center text-sm cursor-pointer text-gray-400 hover:underline'
           onClick={() => router.back()}>
          <BsArrowLeftShort size={20}/> Back to search
        </p>
        <div className='flex h-full w-full px-10 sm:px-20 md:px-40 gap-y-5 items-center flex-col'>
          {/* Dish type, cuisine type, and meal type links */}
          <div className='w-full  mt-5'>
            <div className='w-full justify-between items-center flex'>
              <div className='text-gray-400 items-center flex gap-x-1 text-sm'>
                <p className='hover:underline hover:cursor-pointer'
                   onClick={() => router.push(`/recipes?dish_type=${recipe.dishType[0]}`)}>
                  {capitalize(recipe.dishType[0])}
                </p>
                <p>/</p>
                <p className='hover:underline hover:cursor-pointer'
                   onClick={() => router.push(`/recipes?cuisine_type=${recipe.cuisineType[0]}`)}>
                  {capitalize(recipe.cuisineType[0])}
                </p>
                <p>/</p>
                <p className='hover:underline hover:cursor-pointer'
                   onClick={() => router.push(`/recipes?meal_type=${recipe.mealType[0]}`)}>
                  {capitalize(recipe.mealType[0])}
                </p>
              </div>
              <RecipePageHeaderFavoriteButton recipeId={id}/>
            </div>
            <div className='flex sm:flex-col mt-2'>
              {/* Recipe title and calorie information */}
              <h1 className={twMerge("text-5xl " +
                "md:text-4xl" +
                "justify-self-center" +
                "font-bold" +
                "transition-all" +
                "ease-in-out " +
                "-translate-x-[100vh]" +
                "duration-900", mounted ? "translate-x-0" : "")}>{recipe.label}</h1>
              <div className='flex gap-x-1 text-xs sm:mt-2 text-gray-400'>
                <p>{(recipe.calories / totalWeight * 100).toFixed()}kcal/100g</p>
              </div>
            </div>
          </div>
          {/* Fat, Carbohydrates, and Protein information */}
          <div className='w-full flex gap-x-4 gap-y-5'>
            {[
              {label: 'Fats', value: fat},
              {label: 'Carbohydrates', value: carbs},
              {label: 'Protein', value: protein},
            ].map(item => {
              return (
                <div key={item.label} className='flex justify-center text-sm'>
                  <p>{item.label}:</p>
                  <p className='text-sm text-gray-400'>{item.value}g</p>
                  <p className='text-gray-400 text-xs'>/100g</p>
                </div>
              );
            })}
          </div>
          {/* Display additional recipe information using ProductPageHeaderPoint */}
          <RecipePageHeaderPoint icon={AiOutlinePlus} label="Health labels">
            {recipe.healthLabels ? recipe.healthLabels.map((label: string) => (
              <>
                {`${label}, `}
              </>
            )) : null}

          </RecipePageHeaderPoint>
          <RecipePageHeaderPoint icon={SlEnergy} label={"Total calories"}>
            {recipe.calories.toFixed()}kcal.
          </RecipePageHeaderPoint>
          <RecipePageHeaderPoint icon={TbWeight} label={"Total weight"}>
            {totalWeight.toFixed()}g.
          </RecipePageHeaderPoint>
          <RecipePageHeaderPoint icon={TbSalad} label={"Diet"}>
            {recipe.dietLabels?.map(label => (
              <>{label}.</>
            ))}
          </RecipePageHeaderPoint>
          <RecipePageHeaderPoint icon={BiTime} label={"Time"}>
            {formatTime(recipe.totalTime)}h.
          </RecipePageHeaderPoint>
          {/* Display a link to the full recipe source */}
          <p className='self-end text-sm text-gray-400'>See full recipe on <a className='hover:underline text-white'
                                                                              href={recipe.url}>{recipe.source}</a></p>
        </div>
      </div>
    </div>
  );
}

// Export the ProductPageHeader component
export default RecipePageHeader;
