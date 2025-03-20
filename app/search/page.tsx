import MovieList from "@/components/movie-list";
import PaginationComp from "@/components/shadcn/pagination";
import ListSkeleton from "@/components/shadcn/skeletons/list-skeleton";
import { searchMovies } from "@/lib/data";
import { Suspense } from "react";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const movies = await searchMovies(query, currentPage);
  const totalPages = movies.total_pages;

  //   console.log(query);

  //   console.log(movies);

  return (
    <div className="flex flex-col items-center mt-10 gap-10 min-h-[82vh]">
      <h1 className="font-bold text-2xl border-b-1 border-neutral-900 dark:border-neutral-200">
        Search results for "{query}"
      </h1>

      <Suspense fallback={<ListSkeleton width={200} height={300} />}>
        {movies.total_results > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <p>No results matched the query...</p>
        )}
      </Suspense>

      <PaginationComp total_pages={totalPages} />
    </div>
  );
}
