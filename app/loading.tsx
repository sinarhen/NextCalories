import PageContainer from "@/components/ui/page-container";
import RandomRecipesSkeleton from "@/components/ui/skeletons/random-recipes-skeleton";
import SearchRecipesSkeleton from "@/components/ui/skeletons/search-recipes-skeleton";
import NavbarSkeleton from "@/components/ui/skeletons/navbar-skeleton";

export default function Loading() {
  return (
    <>
      <NavbarSkeleton/>
      <SearchRecipesSkeleton/>
      <PageContainer>
        <RandomRecipesSkeleton/>
      </PageContainer>
    </>
  )
}