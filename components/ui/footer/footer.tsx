
import React from "react";
import PageContainer from "@/components/ui/page-container";
import FooterSection from "@/components/ui/footer/footer-section";
import FooterSectionList from "@/components/ui/footer/footer-section-list";
import FooterSectionHeader from "@/components/ui/footer/footer-section-header";

const Footer: React.FC = () => {
  const APISectionContent = [
    {label: "Source", href: "https:/edamam.com"},
    {label: "Documentation", href: "https:/api.edamam.com"},
    {label: "Guide", href: "/api-guide"},
  ]
  const AboutSectionContent = [
    {label: "About", href: '/about'},
  ]
  const ContactSectionContent = [
    {label: "Contacts", href: '/contact'},

  ]
  return (
    <PageContainer className='bg-gray-200 px-12 py-5 md:px-24 md:py-12  w-full sticky top-[100vh]'>
      <div className='w-full gap-x-8 lg:grid-cols-4 gap-y-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid'>
        <FooterSection>
          <FooterSectionHeader>
            API
          </FooterSectionHeader>
          <hr className='h-px bg-gray-300 mt-1 mb-2 mr-1'/>
          <FooterSectionList list={APISectionContent}/>
        </FooterSection>

        <FooterSection>
          <FooterSectionHeader>
            About
          </FooterSectionHeader>
          <hr className='h-px bg-gray-300 mt-1 mb-2 mr-1'/>
          <FooterSectionList list={AboutSectionContent}/>
        </FooterSection>

        <FooterSection>
          <FooterSectionHeader>
            Contact
          </FooterSectionHeader>
          <hr className='h-px bg-gray-300 mt-1 mb-2 mr-1'/>
          <FooterSectionList list={ContactSectionContent}/>
        </FooterSection>
      </div>
    </PageContainer>
  )
}

export default Footer;