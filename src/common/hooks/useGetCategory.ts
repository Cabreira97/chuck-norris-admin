import { useGetCategoriesQuery } from "@/src/generated/graphql";

export function useGetCategory() {
  const { data, loading } = useGetCategoriesQuery()

  return {
    data, loading
  }
}