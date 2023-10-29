import RecipePageHeaderSkeleton from "@/components/ui/skeletons/recipe-page-header-skeleton";
import RecipePageContentSkeleton from "@/components/ui/skeletons/recipe-page-content-skeleton";
import PageContainer from "@/components/ui/page-container";
import NavbarSkeleton from "@/components/ui/skeletons/navbar-skeleton";

export default function Loading() {
  return (
    <>
      <NavbarSkeleton />
      <RecipePageHeaderSkeleton />
      <PageContainer>
        <RecipePageContentSkeleton />
      </PageContainer>
    </>
  )
}