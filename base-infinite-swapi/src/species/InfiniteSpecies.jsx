import InfiniteScroll from "react-infinite-scroller";
import {
  UseInfiniteQueryOptions,
  useInfiniteQuery
} from "react-query";
import { Species } from "./Species";

const initialUrl = "https://swapi.dev/api/species/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies() {
  // TODO: get data for InfiniteScroll via React Query
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading,
    error,
    isError,
    isFetching,
  } = useInfiniteQuery(
    "sw-species",
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    }
  );
  if (isLoading) return <div>Loading......</div>;
  if (isError) return <div>Error! {error.toString()}  </div>;

  return (
    <>
      {isFetching && <div>Loading......</div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((pageData) => {
          return pageData.results.map((specie) => {
            return (
              <Species
                key={specie.name}
                name={specie.name}
                language={specie.language}
                averageLifespan={specie.average_lifespan}
              />
            );
          });
        })}
      </InfiniteScroll>
    </>
  );
}
