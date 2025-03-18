import { fetchUpcomingMovies } from "@/lib/data";
import MovieList from "./movie-list";
import PaginationComp from "../pagination";

export default async function UpcomingMovies({
  currentPage,
}: {
  currentPage: number;
}) {
  const movies = await fetchUpcomingMovies(currentPage);

  return (
    <>
      <MovieList movies={movies} />
      <PaginationComp total_pages={movies.total_pages} />
    </>
  );
}
