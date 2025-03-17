import { fetchTopMovies } from "@/lib/data";
import MovieList from "./movie-list";
import PaginationComp from "../pagination";
import { SearchProps } from "@/lib/definitions";

export default async function TopMovies({ searchParams }: SearchProps) {
  const currentPage = Number(searchParams?.page) || 1;

  const movies = await fetchTopMovies(currentPage);

  // console.log(movies);

  return (
    <>
      <MovieList movies={movies} />
      <PaginationComp total_pages={movies.total_pages} />
    </>
  );
}
