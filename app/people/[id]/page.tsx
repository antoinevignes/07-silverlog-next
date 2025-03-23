import DirectorMovies from "@/components/people/director-movies";
import CollapsibleText from "@/components/ui/collapsible-text";
import { fetchPeopleDetails, fetchPeopleMovies } from "@/lib/data";
import { ImageOff } from "lucide-react";
import Image from "next/image";

export default async function Page(props: {
  params?: Promise<{
    id?: string;
  }>;
}) {
  const params = await props.params;
  const id = Number(params?.id);
  const [details, movies] = await Promise.all([
    fetchPeopleDetails(id),
    fetchPeopleMovies(id),
  ]);

  const directedMovies = movies.crew
    .filter((movie: { job: string }) => movie.job === "Director")
    .sort(
      (a: { vote_average: number }, b: { vote_average: number }) =>
        b.vote_average - a.vote_average
    );

  const posterUrl = `https://image.tmdb.org/t/p/original${details.profile_path}`;

  return (
    <div className="min-h-[79vh] flex justify-center gap-10 mt-20">
      <div>
        <p className="text-xl opacity-70">Films directed by</p>
        <h1 className="text-6xl font-bold mb-10">{details.name}</h1>
        <DirectorMovies movies={directedMovies} />
      </div>
      <div className="mt-32">
        {details.profile_path ? (
          <Image
            src={posterUrl}
            width={300}
            height={450}
            alt={details.name}
            className="rounded-md"
          />
        ) : (
          <div className="w-[300px] h-[450px] bg-neutral-300 rounded-md flex justify-center items-center">
            <ImageOff size={56} className="text-neutral-600" />
          </div>
        )}

        {details.biography ? (
          <CollapsibleText
            text={details.biography}
            className="w-[300px] text-sm mt-6"
          />
        ) : (
          <p className="w-[300px] text-sm mt-6">
            There is no description for this author...
          </p>
        )}
      </div>
    </div>
  );
}
