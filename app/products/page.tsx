import PageContainer from "@/components/ui/page-container";
import React from "react";
import {getRandomProductsName} from "@/utils/random-recipe";
import Products from "@/components/ui/products/products";
import {getProduct} from "@/utils/get-recipe";
import SearchProducts from "@/components/ui/search-products/search-products";
import Navbar from "@/components/ui/navbar/navbar";

const ProductsPage = async ({searchParams}: {
  searchParams: {
    q: string | null,
    page: string | null,
    dishType: string | null,
    diet: string | null,
    cuisineType: string | null,
    health: string | null,
    mealType: string | null,
  }
}) => {
  async function getData() {
    const query = searchParams.q
    const filters: any = {

    };

    if (Object.keys(filters).length !== 0 && !query) {
      return {
        data: null,
        error: "Please enter some query to search with filters",
      }
    }

    const defaultQuery = query ? query : getRandomProductsName()[0];
    return {data: await getProduct(defaultQuery)}
  }

  const {data: products, error} = await getData();

  return (
    <>
      <Navbar />
      <SearchProducts/>
      <PageContainer className='gap-y-2'>
        <Products error={error} products={products}/>
        {!error && <div className='w-full justify-center flex mx-auto p-5 sm:p-10 md:p-16'>

        </div>
        }
      </PageContainer>

    </>
  );
};

export default ProductsPage;
