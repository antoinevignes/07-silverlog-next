import { fetchPeopleDetails } from "@/lib/data";
import Image from "next/image";

export default async function PeopleDetails({ id }: { id: number }) {
  const details = await fetchPeopleDetails(id);

  console.log(details);

  const posterUrl = `https://image.tmdb.org/t/p/original${details.profile_path}`;

  return (
    <div className="h-screen flex justify-center items-center gap-10">
      <div>
        <h1 className="text-3xl font-bold mb-10">{details.name}</h1>
        <p className="mb-10">
          Born in : {details.place_of_birth}
          <br />
          On {details.birthday}
        </p>
      </div>
      <Image
        src={posterUrl}
        width={300}
        height={450}
        alt={details.name}
        className="rounded-md"
      />
    </div>
  );
}
