
interface FooterSectionList{
  list: {
    label: string;
    href: string;
  }[];
}
const FooterSectionList:React.FC<FooterSectionList> = ({list}) => {
  return (
    <ul className='text-xl sm:text-l md:text-sm lg:text-xs'>
      {list.map((item, id) => {
        const label = item.label;
        const href = item.href;
        return (
          <>
            <li key={id}><a href={href}>{label}</a></li>
          </>
        )
      })}
    </ul>

  )
}

export default FooterSectionList;