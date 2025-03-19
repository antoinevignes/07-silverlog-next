import { Movies } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ImageOff } from "lucide-react";

export default function DirectorMovies({ movies }: { movies: Movies }) {
  return (
    <div className="grid grid-cols-4 gap-5">
      {movies.map((movie) => (
        <TooltipProvider key={movie.id}>
          <Tooltip>
            <TooltipTrigger>
              <Link href={`/movies/${movie.id}`}>
                <div className="w-[130px] h-[190px] border border-transparent hover:border-neutral-900 dark:hover:border-neutral-200 rounded-md">
                  {movie.poster_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                      width={200}
                      height={300}
                      alt={movie.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center border-1 rounded-md">
                      <ImageOff size={56} className="text-neutral-700" />
                    </div>
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
  );
}
