import RecipesSkeleton from "@/components/ui/skeletons/recipes-skeleton";
import PageContainer from "@/components/ui/page-container";
import SearchRecipesSkeleton from "@/components/ui/skeletons/search-recipes-skeleton";
import NavbarSkeleton from "@/components/ui/skeletons/navbar-skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <>
    <NavbarSkeleton/>
    <SearchRecipesSkeleton/>
    <PageContainer>
      <RecipesSkeleton/>
    </PageContainer>
  </>
}