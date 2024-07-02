import { useGetSearchForCategoryQuery } from "@/src/generated/graphql";

type SearchCategory = {
  category: string;
}

export function useSearchCategory({
  category
}: SearchCategory) {

  const { data, loading } = useGetSearchForCategoryQuery({
    variables: {
      category: category
    }
  })
  return {
    data, loading
  }
}