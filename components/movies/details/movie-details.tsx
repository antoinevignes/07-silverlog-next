import { fetchMovieById } from "@/lib/data";
import Image from "next/image";

export default async function MovieDetails({ id }: { id: number }) {
  const movie = await fetchMovieById(id);
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  console.log(movie);

  return (
    <div className="relative h-screen">
      {movie.backdrop_path && (
        <Image
          src={backdropUrl}
          alt={`${movie.title} backdrop`}
          fill
          priority
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/65">
        <div className="flex justify-center items-center gap-10 h-full text-neutral-50">
          <div className="w-[400px] h-[600px] rounded-md">
            {movie.poster_path && (
              <Image
                src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                width={400}
                height={600}
                alt={movie.title}
                className="w-full h-full object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex flex-col gap-4 max-w-[50vw]">
            <h1 className="font-bold text-6xl">{movie.title}</h1>
            <p className="w-[50vw]">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
