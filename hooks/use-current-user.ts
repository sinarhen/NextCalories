import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export function useCurrentUser(){
  const user = useSWR({
    url: "/api/current"
  }, fetcher)
  return user
}