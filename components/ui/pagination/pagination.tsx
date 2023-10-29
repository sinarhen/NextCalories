'use client'

import PaginationButton from "@/components/ui/pagination/pagination-button";
import {usePathname, useRouter} from "next/navigation";
import useQueryParams from "@/hooks/use-query-params";

const Pagination = () => {
  const router = useRouter();
  const {makeParameter, getParameter} = useQueryParams();
  const pathname = usePathname();
  const navigateToPage = (page: string) => {
    const paramString = makeParameter('page', page);
    router.push(pathname + '?' + paramString);
  }
  const page = getParameter('page');
  return (
    <div className='flex flex-row gap-x-3'>
      {
        [1, 2, 3, 4, 5].map(num => {
         return (

             <PaginationButton onClick={() =>  navigateToPage(num.toString())} key={num + 1} selected={page ? page === num.toString() : (num === 1)}>
               {num}
             </PaginationButton>

         );
        })
      }
    </div>
  )
}
export default Pagination;