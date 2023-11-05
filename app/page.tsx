import {getRandomRecipesNames} from "@/utils/random-recipe";
import fetcher from "@/lib/fetcher";
import AuthSection from "@/components/ui/auth-section";
import PageContainer from "@/components/ui/page-container";
import Header from "@/components/ui/header";
import Recipes from "@/components/ui/recipes/recipes";
import SeeMoreWrapper from "@/components/ui/recipes/see-more-wrapper";
import SearchRecipesPreview from "@/components/ui/search-recipes/search-recipes-preview";
import Navbar from "@/components/ui/navbar/navbar";

export default async function Page() {
  const fetchRecipes = async () => {
    try {
      const q = getRandomRecipesNames()[0]

      return await fetcher({
        url: 'https://api.edamam.com/search',
        params: {
          q: q,
          app_id: "4e683e82",
          app_key: "a98a887217e100772317909e9564a7ee",
          from: 0,
          to: 8,
        }
      });
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return null;
    }
  };

  const recipes = await fetchRecipes();

  return (
    <>
      <Navbar/>
      <SearchRecipesPreview/>

      <PageContainer className='lg:pb-40 md:pb-32 sm:pb-24 py-6 md:py-12 lg:py-20'>
        <div className='w-full h-full flex justify-center flex-col '>
          <Header>
            Explore amazing recipes
          </Header>
          <SeeMoreWrapper>
            <Recipes wrapperClassName='mt-4 pointer-events-none'
                     gridClassName='grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4' recipes={ recipes }/>
          </SeeMoreWrapper>
        </div>
      </PageContainer>
      <AuthSection/>

    </>
  );
}
