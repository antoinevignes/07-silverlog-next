import MovieDetails from "@/components/movies/details/movie-details";

export default async function Page(props: {
  params?: Promise<{
    id?: string;
  }>;
}) {
  const params = await props.params;
  const id = Number(params?.id);

  // console.log(params);

  return <MovieDetails id={id} />;
}
