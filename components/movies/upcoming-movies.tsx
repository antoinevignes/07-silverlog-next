import { fetchUpcomingMovies } from "@/lib/data";
import MovieList from "./movie-list";
import PaginationComp from "../pagination";
import { SearchProps } from "@/lib/definitions";

export default async function UpcomingMovies({ searchParams }: SearchProps) {
  const currentPage = Number(searchParams?.page) || 1;

  const movies = await fetchUpcomingMovies(currentPage);
  return (
    <>
      <MovieList movies={movies} />
      <PaginationComp total_pages={movies.total_pages} />
    </>
  );
}
