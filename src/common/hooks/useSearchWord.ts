import { useGetSearchForCategoryQuery, useGetSearchWordQuery } from "@/src/generated/graphql";

type SearchWord = {
  word: string;
}

export function useSearchWord({
  word
}: SearchWord) {

  const { data, loading } = useGetSearchWordQuery({
    variables: {
      searchWord: word
    }
  })
  return {
    data,
    loading
  }
}