import MovieList from "./movie-list";
import PaginationComp from "../pagination";
import { fetchPopularMovies } from "@/lib/data";

export default async function PopularMovies({
  currentPage,
}: {
  currentPage: number;
}) {
  const movies = await fetchPopularMovies(currentPage);

  // console.log(movies);

  return (
    <>
      <MovieList movies={movies} />
      <PaginationComp total_pages={movies.total_pages} />
    </>
  );
}
