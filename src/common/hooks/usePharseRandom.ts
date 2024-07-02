import { useGetPhraseRandomQuery } from "@/src/generated/graphql"

export function usePhraseRandom() {
  const { data, loading } = useGetPhraseRandomQuery()

  return {
    data, loading
  }
}