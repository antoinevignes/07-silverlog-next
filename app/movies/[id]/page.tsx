import MovieDetails from "@/components/movie/movie-details";
import { Separator } from "@/components/ui/separator";
import { fetchMovieById, fetchMovieCredits } from "@/lib/data";
import { ImageOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params?: Promise<{
    id?: string;
  }>;
}) {
  const params = await props.params;
  const id = Number(params?.id);

  if (!id || isNaN(id)) {
    notFound();
  }

  let movie, credits;
  try {
    [movie, credits] = await Promise.all([
      fetchMovieById(id),
      fetchMovieCredits(id),
    ]);
  } catch (error) {
    console.error(error);
    notFound();
  }

  if (!movie || !credits) {
    notFound();
  }

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  const director = credits.crew.find(
    (member: { job: string }) => member.job === "Director"
  );

  const fullDate = new Date(movie.release_date);
  const year = fullDate.getFullYear();

  console.log(credits);

  return (
    <div className="relative min-h-screen">
      {movie.backdrop_path && (
        <Image
          src={backdropUrl}
          alt={`${movie.title} backdrop`}
          fill
          priority
          className="object-cover fade-in"
        />
      )}
      <div className="absolute inset-0 bg-black/65">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10 min-h-screen text-neutral-50">
          <div className="w-[300px] md:w-[400px] shrink-0 rounded-md">
            {movie.poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                width={400}
                height={600}
                alt={movie.title}
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <div className="aspect-[2/3] flex items-center justify-center border-1 rounded-md bg-neutral-100">
                <ImageOff size={56} className="text-neutral-700" />
              </div>
            )}
          </div>
          <div className="w-[90vw] md:w-auto md:max-w-[40vw] px-4 md:px-0">
            <h1 className="font-bold text-6xl mb-4">
              {movie.title} ({year})
            </h1>
            <p className="text-xl">
              Directed by{" "}
              {director ? (
                <Link
                  href={`/people/${director.id}`}
                  className="hover:underline"
                >
                  {director.name}
                </Link>
              ) : (
                "Unknown"
              )}
            </p>
            <Separator className="bg-neutral-50 my-4" />
            <p>{movie.overview}</p>

            <MovieDetails movie={movie} credits={credits} />
          </div>
        </div>
      </div>
    </div>
  );
}
