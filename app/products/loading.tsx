import SearchRecipesSkeleton from "@/components/ui/skeletons/search-recipes-skeleton";
import PageContainer from "@/components/ui/page-container";
import RecipesSkeleton from "@/components/ui/skeletons/recipes-skeleton";
import NavbarSkeleton from "@/components/ui/skeletons/navbar-skeleton";

export default function Loading() {
  return (
    <>
      <NavbarSkeleton/>
      <SearchRecipesSkeleton/>
      <PageContainer>
        <RecipesSkeleton/>
      </PageContainer></>
  )
}