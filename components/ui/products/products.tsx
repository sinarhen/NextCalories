'use client'
import React from "react";
import Header from "@/components/ui/header";
import {twMerge} from "tailwind-merge";
import {toast} from "react-toastify";
import PageContainer from "@/components/ui/page-container";
import ProductCard from "@/components/ui/product/product-card";
import isEmpty from "lodash/isEmpty";

interface productsProps {
  products: any | null;
  isLoading?: boolean;
  error?: string;
  page?: string;
  wrapperClassName?: string;
  gridClassName?: string;
}

const Products: React.FC<productsProps> = ({
  products,
  error,
  gridClassName,
  wrapperClassName
}) => {

  if (error) {
    toast.info(error, {toastId: 'filtersAndNotQuery'})
    return <PageContainer>
      <Header>{error}</Header>
    </PageContainer>
  }
  console.log(products)

  if (!products || isEmpty(products.hints)){
    return <Header>No data found</Header>
  }
  const { hints } = products;

  return (
    <div className={twMerge("min-w-full lg:px-4 w-full", wrapperClassName)}>
      <div
        className={twMerge("grid grid-cols-1 w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-6", gridClassName)}>

        {hints.map((product: any) => {
          console.log(product)
          return (
            <ProductCard
              key={product.food.foodId}
              product={product}
            />
          )

        })}

      </div>
    </div>
  )
}

export default Products;