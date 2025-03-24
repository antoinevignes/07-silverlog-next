import MovieList from "@/components/movie-list";
import ListSkeleton from "@/components/shadcn/skeletons/list-skeleton";
import { fetchTrendingMovies } from "@/lib/data";
import { Suspense } from "react";

export default async function Home() {
  const movies = await fetchTrendingMovies();

  console.log(movies);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl">Welcome back User...</h1>
      <p className="font-light text-3xl mb-10">
        Here is what&apos;s trending today
      </p>

      <Suspense fallback={<ListSkeleton width={200} height={300} />}>
        <MovieList movies={movies} />
      </Suspense>
    </div>
  );
}
