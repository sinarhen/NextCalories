import RecipePageHeader from "@/components/ui/recipe/recipe-page-header";
import RecipePageContent from "@/components/ui/recipe/recipe-page-content";
import {getRecipe} from "@/utils/get-recipe";
import PageContainer from "@/components/ui/page-container";
import Navbar from "@/components/ui/navbar/navbar";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Recipe',
}
const RecipePage = async (
  {
    params
  }:
  {
    params: {
      recipeId: string
    }
  }

) => {
  const recipe = await getRecipe(params.recipeId);

  return (
    <>
      <Navbar/>
      <RecipePageHeader recipe={recipe ? recipe.recipe : null}/>
      <PageContainer className='mt-10'>
        <RecipePageContent recipe={recipe? recipe.recipe : null}/>
      </PageContainer>
    </>
  )
}

export default RecipePage;