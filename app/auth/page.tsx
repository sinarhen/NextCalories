import AuthForm from '@/components/ui/auth-form';
import PageContainer from "@/components/ui/page-container";
import Navbar from "@/components/ui/navbar/navbar";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Authentication',
}
export default function Auth({
  searchParams
                             }:{
  searchParams: {
    error?: string
  }
}) {

  return (
    <>
      <Navbar/>
      <PageContainer className='flex w-full pt-12 pb-24 justify-center'>
        <AuthForm error={searchParams.error}/>
      </PageContainer>
    </>
  );
}
