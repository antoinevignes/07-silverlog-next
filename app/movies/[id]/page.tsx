import { Separator } from "@/components/ui/separator";
import { fetchMovieById, fetchMovieCredits } from "@/lib/data";
import { ImageOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Page(props: {
  params?: Promise<{
    id?: string;
  }>;
}) {
  const params = await props.params;
  const id = Number(params?.id);
  const [movie, credits] = await Promise.all([
    fetchMovieById(id),
    fetchMovieCredits(id),
  ]);

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  const director = credits.crew.find(
    (member: { job: string }) => member.job === "Director"
  );

  const fullDate = new Date(movie.release_date);
  const year = fullDate.getFullYear();

  return (
    <div className="relative h-screen">
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
        <div className="flex justify-center items-center gap-10 h-full text-neutral-50">
          <div className="w-[400px] h-[600px] rounded-md">
            {movie.poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                width={400}
                height={600}
                alt={movie.title}
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center border-1 rounded-md bg-neutral-100">
                <ImageOff size={56} className="text-neutral-700" />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 max-w-[50vw] md:max-w-[30vw]">
            <h1 className="font-bold text-6xl">
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
            <Separator className="bg-neutral-50" />
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
