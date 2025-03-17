import { Movies } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function MovieList({ movies }: { movies: Movies }) {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-4 gap-5">
        {movies.results.map((movie) => (
          <TooltipProvider key={movie.id}>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={`/movies/${movie.id}`}
                  className="w-[200px] h-[300px]"
                >
                  <div className="w-[200px] h-[300px] hover:border rounded-md">
                    {movie.poster_path ? (
                      <Image
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        width={200}
                        height={300}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    ) : (
                      <p className="mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                        {movie.title}
                      </p>
                    )}
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{movie.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}
