import PopularMovies from "@/components/movies/popular-movies";
import ListSkeleton from "@/components/skeletons/list-skeleton";
import { Suspense } from "react";

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
        Popular Movies
      </h1>

      <Suspense fallback={<ListSkeleton />}>
        <PopularMovies currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
