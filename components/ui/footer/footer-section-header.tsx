
const FooterSectionHeader = ({children}: {children: React.ReactNode}) => {
  return (
    <h1 className='font-bold text-4xl sm:text-xl md:text-md lg:text-sm'>
      {children}
    </h1>
  )
}

export default FooterSectionHeader;