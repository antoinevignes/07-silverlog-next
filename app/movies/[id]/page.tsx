import MovieDetails from "@/components/movies/details/movie-details";
import { DetailsProps } from "@/lib/definitions";

export default function Page({ params }: DetailsProps) {
  return (
    <div>
      <MovieDetails params={params} />
    </div>
  );
}
