import NavbarSkeleton from "@/components/ui/skeletons/navbar-skeleton";
import PageContainer from "@/components/ui/page-container";

export default function Loading(){
  return (
    <>
      <NavbarSkeleton/>
      <PageContainer>
        <p>Is loading...</p>
      </PageContainer>

    </>
  )
}