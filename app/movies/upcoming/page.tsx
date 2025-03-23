import MovieList from "@/components/movie-list";
import PaginationComp from "@/components/shadcn/pagination";
import ListSkeleton from "@/components/shadcn/skeletons/list-skeleton";
import { fetchUpcomingMovies } from "@/lib/data";
import { Suspense } from "react";

async function UpcomingWrapper({ currentPage }: { currentPage: number }) {
  const movies = await fetchUpcomingMovies(currentPage);
  return (
    <>
      <MovieList movies={movies} />
      <PaginationComp total_pages={movies.total_pages} />
    </>
  );
}

export default async function Page(props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="flex flex-col items-center mt-10 gap-10">
      <h1 className="font-bold text-2xl border-b-1 border-neutral-900">
        Upcoming movies
      </h1>

      <Suspense fallback={<ListSkeleton width={200} height={300} />}>
        <UpcomingWrapper currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
