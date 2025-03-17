import MovieList from "./movie-list";
import PaginationComp from "../pagination";
import { fetchPopularMovies } from "@/lib/data";

export default async function PopularMovies({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  const movies = await fetchPopularMovies(currentPage);

  // console.log(movies);

  return (
    <>
      <MovieList movies={movies} />
      <PaginationComp total_pages={movies.total_pages} />
    </>
  );
}
