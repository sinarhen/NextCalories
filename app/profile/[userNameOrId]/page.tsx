import PageContainer from "@/components/ui/page-container";
import UserProfile from "@/components/ui/profile/user-profile";
import React from "react";
import Navbar from "@/components/ui/navbar/navbar";

export default async function Page(){
  return (
    <>
      <Navbar />
      <PageContainer>
        <UserProfile />
      </PageContainer>

    </>
  )
}
