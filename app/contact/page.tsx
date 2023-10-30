import PageContainer from "@/components/ui/page-container";
import Header from "@/components/ui/header";
import Navbar from "@/components/ui/navbar/navbar";

export default function ContactPage(){
  return (
    <>
      <Navbar/>
      <PageContainer>
        <Header>
          Contacts
        </Header>
        <ul>
          <li><span className='text-zinc-600'>Phone:</span> 380961625811</li>
          <li><span className='text-zinc-600'>E-Mail</span>: nicklchannel8@gmail.com</li>
        </ul>
      </PageContainer>

    </>
    )
}