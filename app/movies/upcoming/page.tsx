import TopMovies from "@/components/movies/top-movies";
import UpcomingMovies from "@/components/movies/upcoming-movies";
import { Suspense } from "react";

export default async function Page(props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div className="flex flex-col items-center mt-10 gap-10">
      <h1 className="font-bold text-2xl border-b-1 border-neutral-900">
        Upcoming movies
      </h1>

      <Suspense fallback={<div>Loading...</div>}>
        <UpcomingMovies searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
