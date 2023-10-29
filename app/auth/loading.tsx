import PageContainer from "@/components/ui/page-container";
import NavbarSkeleton from "@/components/ui/skeletons/navbar-skeleton";

export default function Loading(){
  return (
    <>
      <NavbarSkeleton />
      <PageContainer>
        <p>Is loading...</p>
      </PageContainer>
    </>
    )
}