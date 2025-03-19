import { fetchPeopleDetails, fetchPeopleMovies } from "@/lib/data";
import Image from "next/image";
import CollapsibleText from "../ui/collapsible-text";
import DirectorMovies from "./director-movies";

export default async function PeopleDetails({ id }: { id: number }) {
  const details = await fetchPeopleDetails(id);
  const movies = await fetchPeopleMovies(id);
  const directedMovies = movies.crew
    .filter((movie: { job: string }) => movie.job === "Director")
    .sort(
      (a: { vote_average: number }, b: { vote_average: number }) =>
        b.vote_average - a.vote_average
    );

  console.log(directedMovies);

  const posterUrl = `https://image.tmdb.org/t/p/original${details.profile_path}`;

  return (
    <div className=" flex justify-center gap-10 mt-20">
      <div>
        <p className="text-xl opacity-70">Films directed by</p>
        <h1 className="text-6xl font-bold mb-10">{details.name}</h1>
        <DirectorMovies movies={directedMovies} />
      </div>
      <div className="mt-32">
        <Image
          src={posterUrl}
          width={300}
          height={450}
          alt={details.name}
          className="rounded-md"
        />
        <CollapsibleText
          text={details.biography}
          className="w-[300px] text-sm mt-6"
        />
      </div>
    </div>
  );
}
