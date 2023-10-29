import {useCallback} from 'react';
import {useSearchParams} from 'next/navigation';
import isEmpty from "lodash/isEmpty";

export default function useQueryParams() {
  const searchParams = useSearchParams();

  const makeParameter = useCallback((name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    return params.toString();
  }, [searchParams]);

  const makeParameters = useCallback((
    params: { name: string, value: string }[],
  ) => {
    if (isEmpty(params)) {
      console.error('No parameters provided')
      return null;
    }
    const filtered = params.filter(item =>
      item.name !== '' && item.value !== ''
    )
    if (filtered.length === 0) {
      return ''
    }
    const query = filtered.map(item =>
      `${item.name}=${item.value.replaceAll(' ', '+')}`
    )
    return query.length > 1 ? query.join('&') : query[0]
  }, [])

  const getParameter = useCallback((name: string) => {
    return searchParams.get(name);

  }, [searchParams])
  return {getParameter, makeParameter, makeParameters, searchParams}
};

