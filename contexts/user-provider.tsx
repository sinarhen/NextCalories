'use client'

import React, {createContext} from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

type AuthContextType = {
  data: any;
  error: any;
  isLoading: any;
  mutate: any;
}
const AuthContext = createContext<AuthContextType>({
  data: null,
  error: null,
  isLoading: null,
  mutate: null,
})
export {AuthContext}
export function AuthProvider ({
                                    children,
                                  }: {
  children: React.ReactNode
}): React.ReactNode {
  const user = useSWR({
    url: "/api/current"
  }, fetcher)
  const {data, error, isLoading, mutate} = user;

  return (
    <AuthContext.Provider value={{data, error, isLoading, mutate}}>
      {children}
    </AuthContext.Provider>
  )
}

