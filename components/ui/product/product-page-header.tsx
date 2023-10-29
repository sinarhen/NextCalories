'use client';

// Import statements for React and required libraries
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {capitalize} from "lodash";
import {BiTime} from "react-icons/bi";
import {TbSalad, TbWeight} from "react-icons/tb";
import {SlEnergy} from "react-icons/sl";
import {BsArrowLeftShort} from "react-icons/bs";
import {twMerge} from "tailwind-merge";
import ProductPageHeaderPoint from "@/components/ui/recipe/recipe-page-header-point";
import {AiOutlinePlus} from "react-icons/ai";
import RecipePageHeaderSkeleton from "@/components/ui/skeletons/recipe-page-header-skeleton";
import Link from "next/link";
import ProductPageHeaderFavoriteButton from "@/components/ui/product/product-page-header-favorite-button";


// Define the props for the ProductPageHeader component
interface ProductPageHeaderProps {
  product: any
}

// Define the ProductPageHeader component
const ProductPageHeader: React.FC<ProductPageHeaderProps> = ({product}) => {
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <RecipePageHeaderSkeleton/>
  }

  console.log(product)

  // Determine the best image for the background
  const bestImage: string | null = product.hints[0].food.image ? product.hints[0].food.image : null;

  // Define CSS properties for the background image
  const bgImage: React.CSSProperties = {

    backgroundImage: bestImage ? `url("${bestImage}")` : '',

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
  if (!product.calories) {
    return "No data found";
  }
  // Calculate the percentage of fat, carbs, and protein
  const totalWeight = product.totalWeight;
  const fat = (product.totalNutrients.FAT.quantity / totalWeight * 100).toFixed(2) ?? '0';
  const carbs = (product.totalNutrients.CHOCDF.quantity / totalWeight * 100).toFixed(2);
  const protein = (product.totalNutrients.PROCNT.quantity / totalWeight * 100).toFixed(2);
  const id = product.hints[0].food.foodId;
  return (
    <div className='relative overflow-hidden bg-cover bg-center bg-no-repeat' style={bgImage}>
      {!bestImage && <div className='w-full h-full -z-10 flex absolute items-center px-10'>
          <h1 className='text-8xl font-extrabold text-zinc-100 w-min'>Image not found</h1>
      </div>
      }
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
                   onClick={() => router.push(`/products?dish_type=${product.dishType[0]}`)}>
                  {capitalize(product.hints[0].food.category)}
                </p>
              </div>
              <ProductPageHeaderFavoriteButton productId={id}/>
            </div>
            <div className='flex sm:flex-col mt-2'>
              {/* Product title and calorie information */}
              <h1 className={twMerge("text-5xl " +
                "md:text-4xl " +
                "justify-self-center " +
                "font-bold " +
                "transition-all " +
                "ease-in "
              )}>{product.hints[0].food.label}</h1>
              <div className='flex gap-x-1 text-xs sm:mt-2 text-gray-400'>
                <p>{(product.calories / totalWeight * 100).toFixed()}kcal/100g</p>
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
          {/* Display additional product information using ProductPageHeaderPoint */}
          <ProductPageHeaderPoint icon={AiOutlinePlus} label="Health labels">
            <p>{product.healthLabels?.map((item: string) => capitalize(item).replaceAll('_', ' ')).join(', ')}.</p>

          </ProductPageHeaderPoint>
          <ProductPageHeaderPoint icon={SlEnergy} label={"Total calories"}>
            {product.calories.toFixed()}kcal.
          </ProductPageHeaderPoint>
          <ProductPageHeaderPoint icon={TbWeight} label={"Total weight"}>
            {totalWeight.toFixed()}g.
          </ProductPageHeaderPoint>
          <ProductPageHeaderPoint icon={TbSalad} label={"Diet"}>
            {product.dietLabels?.map((label: string) => (
              <>{label}.</>
            ))}
          </ProductPageHeaderPoint>
          <ProductPageHeaderPoint icon={BiTime} label={"Time"}>
            {formatTime(product.totalTime)}h.
          </ProductPageHeaderPoint>
          {/* Display a link to the full product source */}
          <p className='self-end text-sm text-gray-400'>Learn more on <Link className='hover:underline text-white'
                                                                            href={'https://google.com?q=' + product.hints[0].food.label}>google</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// Export the ProductPageHeader component
export default ProductPageHeader;
