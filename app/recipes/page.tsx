import SearchRecipes from "@/components/ui/search-recipes/search-recipes";
import PageContainer from "@/components/ui/page-container";
import Recipes from "@/components/ui/recipes/recipes";
import Pagination from "@/components/ui/pagination/pagination";
import React from "react";
import {getRandomRecipesNames} from "@/utils/random-recipe";
import RecipesAmount from "@/components/ui/recipes/recipes-amount";
import {getRecipes} from "@/utils/get-recipe";
import Navbar from "@/components/ui/navbar/navbar";

const RecipesPage = async ({searchParams}: {
  searchParams: {
    q: string | undefined,
    page: string | undefined,
    dishType: string | undefined,
    diet: string | undefined,
    cuisineType: string | undefined,
    health: string | undefined,
    mealType: string | undefined,
  }
}) => {
  async function getData() {
    const query = searchParams.q
    const filters: any = {};

    // Check each parameter and add it to the filters object if it's not null
    if (searchParams.dishType) filters.dishType = searchParams.dishType;
    if (searchParams.diet) filters.diet = searchParams.diet;
    if (searchParams.cuisineType) filters.cuisineType = searchParams.cuisineType;
    if (searchParams.health) filters.health = searchParams.health;
    if (searchParams.mealType) filters.mealType = searchParams.mealType;

    if (Object.keys(filters).length !== 0 && !query) {
      return {
        data: null,
        error: "Please enter some query to search with filters",
      }
    }
    const defaultQuery = query ? query : getRandomRecipesNames()[0];
    return {
      data:
        await getRecipes(
          defaultQuery,
          searchParams.page,
          filters
        ),
    };
  }

  const {data: recipes, error} = await getData();
  return (
    <>
      <Navbar/>
      <SearchRecipes/>
      <PageContainer className='gap-y-2'>
        <RecipesAmount recipes={recipes}/>
        <Recipes error={error} recipes={recipes}/>
        {!error && <div className='w-full justify-center flex mx-auto p-5 sm:p-10 md:p-16'>
            <div className='flex '>
                <Pagination/>
            </div>
        </div>
        }
      </PageContainer>

    </>
  );
};

export default RecipesPage;
