import { fetchTopMovies } from "@/lib/data";
import MovieList from "../movie-list";
import PaginationComp from "../shadcn/pagination";

export default async function TopMovies({
  currentPage,
}: {
  currentPage: number;
}) {
  const movies = await fetchTopMovies(currentPage);

  // console.log(movies);

  return (
    <>
      <MovieList movies={movies} />
      <PaginationComp total_pages={movies.total_pages} />
    </>
  );
}
