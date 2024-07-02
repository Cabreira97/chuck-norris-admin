import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CategoriesDto = {
  __typename?: 'CategoriesDto';
  categories: Array<Scalars['String']['output']>;
};

export type GetRandomDto = {
  __typename?: 'GetRandomDto';
  categories: Array<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  icon_url: Scalars['String']['output'];
  id: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  url: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  categories: CategoriesDto;
  random: GetRandomDto;
  searchCategory: GetRandomDto;
  searchWord: SearchResultDto;
};


export type QuerySearchCategoryArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchWordArgs = {
  searchWord?: InputMaybe<Scalars['String']['input']>;
};

export type SearchResultDto = {
  __typename?: 'SearchResultDto';
  result: Array<GetRandomDto>;
  total: Scalars['Float']['output'];
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: { __typename?: 'CategoriesDto', categories: Array<string> } };

export type GetPhraseRandomQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPhraseRandomQuery = { __typename?: 'Query', random: { __typename?: 'GetRandomDto', created_at: string, icon_url: string, id: string, updated_at: string, url: string, value: string } };

export type GetSearchForCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
}>;


export type GetSearchForCategoryQuery = { __typename?: 'Query', searchCategory: { __typename?: 'GetRandomDto', categories: Array<string>, value: string, url: string, id: string, updated_at: string, icon_url: string } };

export type GetSearchWordQueryVariables = Exact<{
  searchWord: Scalars['String']['input'];
}>;


export type GetSearchWordQuery = { __typename?: 'Query', searchWord: { __typename?: 'SearchResultDto', result: Array<{ __typename?: 'GetRandomDto', categories: Array<string>, created_at: string, id: string, value: string, icon_url: string, updated_at: string, url: string }> } };


export const GetCategoriesDocument = gql`
    query getCategories {
  categories {
    categories
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export function useGetCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetCategoriesSuspenseQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetPhraseRandomDocument = gql`
    query getPhraseRandom {
  random {
    created_at
    icon_url
    id
    updated_at
    url
    value
  }
}
    `;

/**
 * __useGetPhraseRandomQuery__
 *
 * To run a query within a React component, call `useGetPhraseRandomQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhraseRandomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhraseRandomQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPhraseRandomQuery(baseOptions?: Apollo.QueryHookOptions<GetPhraseRandomQuery, GetPhraseRandomQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPhraseRandomQuery, GetPhraseRandomQueryVariables>(GetPhraseRandomDocument, options);
      }
export function useGetPhraseRandomLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPhraseRandomQuery, GetPhraseRandomQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPhraseRandomQuery, GetPhraseRandomQueryVariables>(GetPhraseRandomDocument, options);
        }
export function useGetPhraseRandomSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPhraseRandomQuery, GetPhraseRandomQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPhraseRandomQuery, GetPhraseRandomQueryVariables>(GetPhraseRandomDocument, options);
        }
export type GetPhraseRandomQueryHookResult = ReturnType<typeof useGetPhraseRandomQuery>;
export type GetPhraseRandomLazyQueryHookResult = ReturnType<typeof useGetPhraseRandomLazyQuery>;
export type GetPhraseRandomSuspenseQueryHookResult = ReturnType<typeof useGetPhraseRandomSuspenseQuery>;
export type GetPhraseRandomQueryResult = Apollo.QueryResult<GetPhraseRandomQuery, GetPhraseRandomQueryVariables>;
export const GetSearchForCategoryDocument = gql`
    query getSearchForCategory($category: String!) {
  searchCategory(category: $category) {
    categories
    value
    url
    id
    updated_at
    icon_url
  }
}
    `;

/**
 * __useGetSearchForCategoryQuery__
 *
 * To run a query within a React component, call `useGetSearchForCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchForCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchForCategoryQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useGetSearchForCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetSearchForCategoryQuery, GetSearchForCategoryQueryVariables> & ({ variables: GetSearchForCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSearchForCategoryQuery, GetSearchForCategoryQueryVariables>(GetSearchForCategoryDocument, options);
      }
export function useGetSearchForCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSearchForCategoryQuery, GetSearchForCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSearchForCategoryQuery, GetSearchForCategoryQueryVariables>(GetSearchForCategoryDocument, options);
        }
export function useGetSearchForCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSearchForCategoryQuery, GetSearchForCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSearchForCategoryQuery, GetSearchForCategoryQueryVariables>(GetSearchForCategoryDocument, options);
        }
export type GetSearchForCategoryQueryHookResult = ReturnType<typeof useGetSearchForCategoryQuery>;
export type GetSearchForCategoryLazyQueryHookResult = ReturnType<typeof useGetSearchForCategoryLazyQuery>;
export type GetSearchForCategorySuspenseQueryHookResult = ReturnType<typeof useGetSearchForCategorySuspenseQuery>;
export type GetSearchForCategoryQueryResult = Apollo.QueryResult<GetSearchForCategoryQuery, GetSearchForCategoryQueryVariables>;
export const GetSearchWordDocument = gql`
    query getSearchWord($searchWord: String!) {
  searchWord(searchWord: $searchWord) {
    result {
      categories
      created_at
      id
      value
      icon_url
      updated_at
      url
    }
  }
}
    `;

/**
 * __useGetSearchWordQuery__
 *
 * To run a query within a React component, call `useGetSearchWordQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchWordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchWordQuery({
 *   variables: {
 *      searchWord: // value for 'searchWord'
 *   },
 * });
 */
export function useGetSearchWordQuery(baseOptions: Apollo.QueryHookOptions<GetSearchWordQuery, GetSearchWordQueryVariables> & ({ variables: GetSearchWordQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSearchWordQuery, GetSearchWordQueryVariables>(GetSearchWordDocument, options);
      }
export function useGetSearchWordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSearchWordQuery, GetSearchWordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSearchWordQuery, GetSearchWordQueryVariables>(GetSearchWordDocument, options);
        }
export function useGetSearchWordSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSearchWordQuery, GetSearchWordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSearchWordQuery, GetSearchWordQueryVariables>(GetSearchWordDocument, options);
        }
export type GetSearchWordQueryHookResult = ReturnType<typeof useGetSearchWordQuery>;
export type GetSearchWordLazyQueryHookResult = ReturnType<typeof useGetSearchWordLazyQuery>;
export type GetSearchWordSuspenseQueryHookResult = ReturnType<typeof useGetSearchWordSuspenseQuery>;
export type GetSearchWordQueryResult = Apollo.QueryResult<GetSearchWordQuery, GetSearchWordQueryVariables>;